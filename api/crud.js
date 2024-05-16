import { API_URL } from '../constants/const.js'

export async function getProducts() {
  const response = { status: 200, products: [], error: "" }
  try {
    const res = await fetch(API_URL)
    const products = await res.json()
    response.products = products
  } catch (error) {
    response.error = error
  }
  return response
}

