const connection = require('./connection');

const getAllSalesModel = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity 
      FROM sales_products as sp
      JOIN sales as s
      ON sp.sale_id = s.id
      ORDER BY sale_id, product_id`,
  );
  return sales;
};

const getSalesIdModel = async (id) => {
  const [salesId] = await connection.execute(
    `SELECT date, product_id as productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?
      ORDER BY sale_id, product_id`,
    [id],
  );
  return salesId;
};

module.exports = {
  getAllSalesModel,
  getSalesIdModel,
};
