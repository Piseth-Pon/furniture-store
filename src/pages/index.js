import { url, getAllProducts } from "../api/product_api.js"

function displayAllProducts(products) {

  // console.log(products)

  const productsWrapper = document.querySelector(".products-wrapper")
  productsWrapper.innerHTML = ``

  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i]
    productsWrapper.innerHTML += `
    <a href="product.html?id=${currentProduct.id}">
        <div class="card">
          <img src="${url}/api/files/${currentProduct.collectionId}/${currentProduct.id}/${currentProduct.cover}" alt="">
          <div class="overlay">
            <p class="price">$${currentProduct.price}</p>
            <h3>${currentProduct.name}</h3>
          </div>
        </div>
    </a>
    `
  }

}



window.addEventListener("DOMContentLoaded", async () => {
  console.log("code from home page")


  const products = await getAllProducts()
  displayAllProducts(products)

})