const productsModel = require('../models/products.model');

const getWaitingProducts = async () => {
  const result = await productsModel.getProducts();
  return result; 
};

const getWaitingProductsId = async (id) => {
  const result = await productsModel.getById(id);
  return result; 
};

const createProduct = async (name) => {
     const newProduct = await productsModel.insertProducts(name);
     return newProduct;
};

module.exports = {
  getWaitingProducts,
  getWaitingProductsId,
  createProduct,
};