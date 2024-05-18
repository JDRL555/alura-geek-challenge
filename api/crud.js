import { API_URL } from '../constants/const.js'

export async function getProducts() {
  const response = { status: 200, products: [], error: "" }
  try {
    const res = await fetch(API_URL)
    const products = await res.json()
    response.products = products
  } catch (error) {
    response.error = error
    response.status = 500
  }
  return response
}

export async function createProduct(newProduct) {
  const response = { status: 201, msg: "", error: "" }
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
    if(!res.ok) {
      response.error = "Datos incorrectos, intenta nuevamente"
      response.status = 400
    } else {
      response.msg = "Producto creado exitosamente"
    }
  } catch (error) {
    response.status = 500
    response.error = error
  }
  return response
}

