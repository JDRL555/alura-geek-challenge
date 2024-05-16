import { createProductCard } from '../utils/dom.js'
import { getProducts } from '../api/crud.js'

const response = await getProducts()

if(!response.error) {
  response.products.map(product => createProductCard(product))
}
