import { createProductCard } from '../utils/dom.js'
import { getProducts } from '../api/crud.js'

import { onSubmit, onCleanForm, onOpenModal, onCloseModal } from '../utils/events.js'

const response = await getProducts()
const form = document.querySelector("form")

const btnLimpiar = document.querySelector(".btnLimpiar")

const modalLabel = document.querySelector("#modalLabel")
const modalLabelClose = document.querySelector("#modalLabelClose")

if(!response.error) {
  response.products.map(product => createProductCard(product))
}

form.addEventListener("submit", onSubmit)

btnLimpiar.addEventListener("click", onCleanForm)

modalLabel.addEventListener("click", onOpenModal)
modalLabelClose.addEventListener("click", onCloseModal)