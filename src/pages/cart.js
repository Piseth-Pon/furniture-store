import { url, getOrderCarts, getOneProduct } from "../api/product_api.js"

async function displayOrderCarts(carts) {
  let total = 0

  const tbody = document.querySelector("#cart-table tbody")
  for(let i = 0; i < carts.length; i++) {

    let currentCart = carts[i]
    let product = await getOneProduct(currentCart.productId)
    let subtotal = product.price * currentCart.amount
    total = total + subtotal
    // ${url}/api/files/${product.collectionId}/${product.id}/${product.cover}
    tbody.innerHTML += `
    <tr>
      <td><img src="${url}/api/files/${product.collectionId}/${product.id}/${product.cover}"></td>
      <td>${product.name}</td>
      <td>$${product.price}</td>
      <td>${currentCart.amount}</td>
      <td>$${subtotal}</td>
    </tr>
    `
  }

  const tfoot = document.querySelector("#cart-table tfoot")
  tfoot.innerHTML += `
  <tr>
    <td colspan="4">Total</td>
    <td>$${total}</td>
  </tr>
  `
} 


window.addEventListener("DOMContentLoaded", async () => {
  // console.log(url)

  const orderCarts = await getOrderCarts()
  // console.log(orderCarts)
  displayOrderCarts(orderCarts)


})