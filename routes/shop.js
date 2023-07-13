const path = require('path');

const express = require('express');

//const rootDir = require('../utility/path');
//const adminRoute = require('./admin');
const shopController = require('../controller/shop')

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts );

router.get("/products/:productId", shopController.getProduct )

router.get('/cart', shopController.getCart );

router.post('/cart', shopController.postCart);

router.get('/orders',shopController.getOrder );

router.get('/checkout', shopController.getCheckout );



module.exports = router;