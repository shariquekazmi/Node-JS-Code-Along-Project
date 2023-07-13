const path = require('path');

const express = require('express');

//const rootDir = require('../utility/path');
const adminController = require('../controller/admin')

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts );

//router.get('/products', )

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-products/:productId', adminController.getEditProduct);

router.post('/edit-products', adminController.postEditProduct );

module.exports = router;   