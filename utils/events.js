import { createProduct } from '../api/crud.js'

export async function onSubmit(e) {
  e.preventDefault();
  const title = document.querySelector("#title").value
  const price = document.querySelector("#price").value
  const img = document.querySelector("#img").value

  
  const newProduct = {
    title, price, img
  }
  
  await createProduct(newProduct)
}

export async function onOpenModal(e) {
  const modalBackground = document.querySelector("#modalBackground")

  modalBackground.style.visibility = "visible"
  modalBackground.style.opacity = 1
}

export async function onCloseModal(e) {
  const modalBackground = document.querySelector("#modalBackground")

  modalBackground.style.visibility = "hidden"
  modalBackground.style.opacity = 0
}

export async function onCleanForm(e) {
  const form = document.querySelector("form")
  form.reset()
}