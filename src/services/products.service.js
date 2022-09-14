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
  const idProduct = await productsModel.insertProducts(name);
  return idProduct;
};

const updateProdutcIdServices = async (name, id) => {
  const idProductChange = await productsModel.updateProductIdModel(name, id);
  return idProductChange;
};

const deleteProdutcIdServices = async (id) => { await productsModel.deleteProductId(id); };

module.exports = {
  getWaitingProducts,
  getWaitingProductsId,
  createProduct,
  updateProdutcIdServices,
  deleteProdutcIdServices,
};