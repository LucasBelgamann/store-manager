const modelSales = require('../models/sales.model');

const getAllSalesService = async () => {
  const sales = await modelSales.getAllSalesModel();
  return sales;
};

const getSalesByIdService = async (id) => {
  const sale = await modelSales.getSalesIdModel(id);
  console.log('ai to aquiiiii', sale);
  return sale;
};

module.exports = {
  getAllSalesService,
  getSalesByIdService,
};