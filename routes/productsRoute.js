const express = require('express');
const productRouter = express.Router();
const productsController = require('controllers/productsController.js');

productRouter.get('/products', productsController.getAllProducts);
// router.get('/products', productsController.getProductById);
// router.post('/products', productsController.createProduct);
// router.put('/products/:id', productsController.updateProduct);
// router.delete('/products/:id', productsController.deleteProduct);

module.exports = productRouter;