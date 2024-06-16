import { url, getOneProduct, getProductReviews, addToOrderCarts } from "../api/product_api.js"

function displayProductReviews(reviews) {
  const wrapper = document.querySelector(".product-review-wrapper")
  wrapper.innerHTML = ``
  for (let i = 0; i < reviews.length; i++) {
    let currentReview = reviews[i]
    wrapper.innerHTML += `
        <div class="review">
          <img src="./images/profile-1.jpeg" alt="">
          <h4>${currentReview.username}a</h4>
          <p>Rating: ${currentReview.rating}</p>
          <p>${currentReview.comment}</p>
        </div>
    `
  }

}

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
        <div class="amount">
          <label>Amount</label>
          <input type="number" id="amount" value="1">
        <div>
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
  // console.log(product)
  displayProductDetail(product)

  let allReviews = await getProductReviews()
  // console.log(allReviews)
  let productReviews = allReviews.filter((review) => review.productId == id)
  displayProductReviews(productReviews)
  

  const addToCart = document.querySelector("#addToCart")
  const amountInput = document.querySelector("#amount")
  addToCart.addEventListener("click", async () => {
    let productId = addToCart.dataset.recordid
    let amount = amountInput.value

    let data = {
      "productId": productId,
      "amount": amount
    }
    // console.log(data)
    await addToOrderCarts(data)
    alert("add the product to carts successfully")
    window.location.href = "cart.html"
  })



})