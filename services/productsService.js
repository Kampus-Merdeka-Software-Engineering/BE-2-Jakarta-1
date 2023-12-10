const prisma = require('config/prisma.js');

async function getAllProducts() {
    try {
        const produucts = await prisma.products.findMany();
        return products;
    } catch (err) {
        throw err;
    }
};

// async function getProductById() {
//    try {
//        const productId = parseInt(req.params.id);

//      return products;
//    } catch (err) {
//      throw err;
//    }
// };

// async function createProduct(products) {
//    try {
//      return await prisma.product.create(products);
//    } catch (err) {
//      throw err;
//    }
// };

module.exports = {
    getAllProducts
};