import React from 'react'

const products = [
    {"id": 1, "name": "coffee", "price": 3.50},
    {"id": 2, "name": "sunglasses", "price": 25.99},
    {"id": 3, "name": "camera", "price": 299.99}
]


function getProducts(id){
  let productData = products.find(p => p.id === id)

  if(productData == undefined){
    console.log("product doesnt exist")
    return undefined
  }

  return productData
}

export {getProducts,products}