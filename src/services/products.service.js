const productsModel = require('../models/products.model');

const getWaitingProducts = async () => {
  const result = await productsModel.getProducts();
  return result; 
};

const getWaitingProductsId = async (id) => {
  const result = await productsModel.getById(id);
  return result; 
};

module.exports = {
  getWaitingProducts,
  getWaitingProductsId,
};