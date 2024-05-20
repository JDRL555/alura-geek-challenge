import { createProductCard } from '../utils/dom.js'
import { getProducts } from '../api/crud.js'

import { 
  onSubmit, 
  onDelete,
  onCleanForm, 
  onOpenModal, 
  onCloseModal 
} from '../utils/events.js'

const response = await getProducts()
const form = document.querySelector("form")

const btnLimpiar = document.querySelector(".btnLimpiar")

const modalLabel = document.querySelector("#modalLabel")
const modalLabelClose = document.querySelector("#modalLabelClose")

const btnAceptar = document.querySelector("#btnAceptar")
const btnCancelar = document.querySelector("#btnCancelar")


if(!response.error) {
  response.products.map(product => createProductCard(product))

  const trashIcons = document.querySelectorAll(".trash_icon")
  const modalDeleteClose = document.querySelector("#modalDeleteLabelClose")

  trashIcons.forEach(
    icon => icon.addEventListener("click", () => {
      const productCard = icon.closest(".productCard")
      const deleteMsg = document.querySelector("#deleteMsg")
      deleteMsg.innerHTML = `Seguro de eliminar el producto ${productCard.id}?`
      onOpenModal("#modalDeleteBackground")
    })
  )

  modalDeleteClose.addEventListener("click", () => onCloseModal("#modalDeleteBackground"))
  btnCancelar.addEventListener("click", () => onCloseModal("#modalDeleteBackground"))
  btnAceptar.addEventListener("click", onDelete)

}

form.addEventListener("submit", onSubmit)

btnLimpiar.addEventListener("click", onCleanForm)

modalLabel.addEventListener("click", () => onOpenModal("#modalBackground"))
modalLabelClose.addEventListener("click", () => onCloseModal("#modalBackground"))