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
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );
  const product = { id: insertId, name };
  return product;
};

const updateProductIdModel = async (name, id) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
    [name, id],
  );

  const updateItem = await getById(id);

  return updateItem;
};

const deleteProductId = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = (?)',
  [id]);
};

module.exports = {
  getProducts,
  getById,
  insertProducts,
  updateProductIdModel,
  deleteProductId,
};