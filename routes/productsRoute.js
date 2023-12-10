const express = require('express');
const router = require.Router();

const productsController = require('controllers/productsController.js');

router.get('/products', productsController.getAllProducts);
// router.get('/products', productsController.getProductById);
// router.post('/products', productsController.createProduct);
// router.put('/products/:id', productsController.updateProduct);
// router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;