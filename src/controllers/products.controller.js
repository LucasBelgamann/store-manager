const productsService = require('../services/products.service');

const getProductsControll = async (_req, res) => {
  const resultado = await productsService.getWaitingProducts();

  res.status(200).json(resultado);
};

const getForIdControll = async (req, res) => {
  const { id } = req.params;
  const resultado = await productsService.getWaitingProductsId(id);

  if (!resultado[0]) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(resultado[0]);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const resultado = await productsService.createProduct(name);

  console.log(resultado);
  res.status(201).json(resultado);
};

module.exports = {
  getProductsControll,
  getForIdControll,
  createNewProduct,
};