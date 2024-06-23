import { url, getOrderCarts, deleteOrderCart, getOneProduct } from "../api/product_api.js"

async function displayOrderCarts() {
  const carts = await getOrderCarts()
  let total = 0
  let products = []
  for(let i = 0; i < carts.length; i++) {
    let currentCart = carts[i]
    let product = await getOneProduct(currentCart.productId)
    products.push(product)
  }

  const tbody = document.querySelector("#cart-table tbody")
  tbody.innerHTML = ``
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    let subtotal = product.price * carts[i].amount
    total = total + subtotal
    // ${url}/api/files/${product.collectionId}/${product.id}/${product.cover}
    tbody.innerHTML += `
    <tr>
      <td><img src="${url}/api/files/${product.collectionId}/${product.id}/${product.cover}"></td>
      <td>${product.name}</td>
      <td>$${product.price}</td>
      <td>${carts[i].amount} <button id="deleteItemBtn" data-recordid="${carts[i].id}">X<button></td>
      <td>$${subtotal}</td>
    </tr>
    `
  }

  const tfoot = document.querySelector("#cart-table tfoot")
  tfoot.innerHTML = `
  <tr>
    <td colspan="4">Total</td>
    <td>$${total}</td>
  </tr>
  `
  
  const deleteBtns = document.querySelectorAll("#deleteItemBtn")
  console.log(deleteBtns)
  for (let i = 0; i < deleteBtns.length; i++) {
    const currentBtn = deleteBtns[i]
    currentBtn.addEventListener("click", async () => {
      const id = currentBtn.dataset.recordid
      await deleteOrderCart(id)
      alert('item is deleted successfully')
      displayOrderCarts()
    })
  }
} 


window.addEventListener("DOMContentLoaded", async () => {
  // console.log(url)

  
  // console.log(orderCarts)
  displayOrderCarts()
  // console.log('done')





})