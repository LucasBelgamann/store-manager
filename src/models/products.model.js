const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const getById = async (productId) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

const insertProducts = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );
  const newProduct = { id: product.insertId, name };
  return newProduct;
};

module.exports = {
  getProducts,
  getById,
  insertProducts,
};