const salesService = require('../services/sales.service');

const getAllSalesControll = async (_req, res) => {
  const resultado = await salesService.getAllSalesService();
  res.status(200).json(resultado);
};

const getSalesIdControll = async (req, res) => {
  const { id } = req.params;
  const response = await salesService.getSalesByIdService(id);
  if (response.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(response);
};

module.exports = {
  getAllSalesControll,
  getSalesIdControll,
};