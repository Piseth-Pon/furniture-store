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


export {
  url,
  getAllProducts,
  getOneProduct
}