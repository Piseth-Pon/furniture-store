import PocketBase from '../lib/pocketbase.es.mjs'

const url = 'https://cckh2024.pockethost.io/'
const client = new PocketBase(url)

async function getAllProducts() {
  const records = await client.collection('products').getFullList()
  return records
}

async function getOneProduct(id) {
  const record = await client.collection('products').getOne(id)
  return record
}


async function getProductReviews() {
  // const resultList = await client.collection('reviews').getList(1, 50, {filter: `productId == ${id}`})
  // return resultList
  const records = await client.collection('reviews').getFullList()
  return records
}

async function getOrderCarts() {
  const records = await client.collection('carts').getFullList()
  return records
}

async function addToOrderCarts(data) {
  const record = await client.collection("carts").create(data)
  return true
}

export {
  url,
  getAllProducts,
  getOneProduct,
  getProductReviews,
  getOrderCarts,
  addToOrderCarts
}