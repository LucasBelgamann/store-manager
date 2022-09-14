const express = require('express');
const productsControll = require('../controllers/products.controller');
const validation = require('../middlewares/validationProduct');

const router = express.Router();

router.get('/', productsControll.getProductsControll);

router.get('/:id', productsControll.getForIdControll);

router.post('/', validation.nameProductValidation, productsControll.createNewProduct);

router.put('/:id', validation.nameProductValidation, productsControll.updateIdProductControll);

module.exports = router;
