import { url, getOneProduct } from "../api/product_api.js"


function displayProductDetail(product) {
  const productContainer = document.querySelector(".product-container")
  productContainer.innerHTML = `
    <section class="product-preview">
      <img src="${url}/api/files/${product.collectionId}/${product.id}/${product.cover}" alt="">
    </section>

    <section class="product-detail">
      <div class="product-header">
        <h2>${product.name}</h2>
        <p class="price">$${product.price}</p>
        <h4>${product.company.toUpperCase()}</h4>
        <button id="addToCart" data-recordid="${product.id}">Add to Cart</button>
      </div>

      <div>
        <h4>Description</h4>
        <p>
          ${product.description}
        </p>
      </div>

    </section>

    <section class="product-review">
      <h4>Reviews</h4>

      <div class="product-review-wrapper">

        <div class="review">
          <img src="./images/profile-1.jpeg" alt="">
          <h4>Anna</h4>
          <div class="stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
        </div>


      </div>

    </section>
  
  
  `
}


window.addEventListener("DOMContentLoaded", async () => {
  // console.log("code from product page")

  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  // console.log(id)

  const product = await getOneProduct(id)
  console.log(product)
  displayProductDetail(product)



})