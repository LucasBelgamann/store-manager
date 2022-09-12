const express = require('express');
const productsControll = require('../controllers/products.controller');
const valid = require('../middlewares/middlewareName');

const router = express.Router();

router.get('/', productsControll.getProductsControll);

router.get('/:id', productsControll.getForIdControll);

router.post('/', valid, productsControll.createNewProduct);

module.exports = router;
