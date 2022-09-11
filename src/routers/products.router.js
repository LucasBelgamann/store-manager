const express = require('express');
const productsControll = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsControll.getProductsControll);

router.get('/:id', productsControll.getForIdControll);

router.post('/', productsControll.createNewProduct);

module.exports = router;
