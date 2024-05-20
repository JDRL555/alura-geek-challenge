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
    const { products } = await getProducts()
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({...newProduct, id: String(products.length + 1) })
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

export async function deleteProduct(productId) {
  const response = { status: 201, msg: "", error: "" }
  try {
    const response = await fetch(`${API_URL}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    })
    if(!response.ok) {
      response.msg = "Producto no encontrado"
      response.status = 404
    } else {
      response.msg = "Producto eliminado"
    }
  } catch (error) {
    response.msg = `Error: ${error}`
    response.status = 500
  }
  return response
}

