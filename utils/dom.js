export function createProductCard(product) {
  const productList = document.querySelector(".productList")
  const productCard = document.createElement("li")

  const productImg = document.createElement("div")
  const productTitle = document.createElement("h3")
  const productDetails = document.createElement("section")
  const productPrice = document.createElement("p")

  const trashImg = document.createElement("img")

  productCard.setAttribute("class", "productCard")
  productCard.setAttribute("id", product.id)

  productImg.setAttribute("class", "productImg")
  productTitle.setAttribute("class", "productTitle")
  productDetails.setAttribute("class", "productDetails")
  productPrice.setAttribute("class", "productPrice")
  trashImg.setAttribute("class", "trashImg")

  productImg.style.background = `url(${product.img})`
  productImg.style.backgroundSize = "cover"
  productImg.style.backgroundPosition = "center"
  productImg.style.backgroundRepeat = "no-repeat"

  productTitle.innerText = product.title
  productPrice.innerText = `$ ${parseFloat(product.price)}`

  trashImg.src = "./assets/trash.png"
  trashImg.alt = "trash icon"

  trashImg.setAttribute("id", product.id)
  trashImg.setAttribute("class", "trash_icon")

  trashImg.style.cursor = "pointer"

  productDetails.append(productPrice)
  productDetails.append(trashImg)

  productCard.append(productImg)
  productCard.append(productTitle)
  productCard.append(productDetails)

  productList.append(productCard)
}