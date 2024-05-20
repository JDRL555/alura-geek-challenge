import { createProduct, deleteProduct } from '../api/crud.js'

export async function onSubmit(e) {
  e.preventDefault();
  const title = document.querySelector("#title").value
  const price = document.querySelector("#price").value
  const img = document.querySelector("#img").value

  
  const newProduct = {
    title, price: parseInt(price), img
  }
  
  await createProduct(newProduct)
}

export async function onDelete(e) {
  const deleteMsg = document.querySelector("#deleteMsg")
  const id = deleteMsg.innerHTML.split(" ")[5].split("")[0]
  await deleteProduct(parseInt(id))
}

export async function onOpenModal(selector) {
  const modalBackground = document.querySelector(selector)

  modalBackground.style.visibility = "visible"
  modalBackground.style.opacity = 1
}

export async function onCloseModal(selector) {
  const modalBackground = document.querySelector(selector)

  modalBackground.style.visibility = "hidden"
  modalBackground.style.opacity = 0
}

export async function onCleanForm(e) {
  const form = document.querySelector("form")
  form.reset()
}