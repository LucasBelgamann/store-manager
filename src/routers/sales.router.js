const express = require('express');
const salesControll = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', salesControll.getAllSalesControll);

router.get('/:id', salesControll.getSalesIdControll);

module.exports = router;
