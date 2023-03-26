const productRepo = require('../repository/ProductRepository');


const createProduct = async (product) => {
    console.log('Service..createProduct')
    console.log('Service..product=', product)
    return await productRepo.createProduct(product)
}

//getProductByName
const findProductsByName = async (name) => {
    console.log('Service..findProductsByName')
    console.log('name:', name)
    return await productRepo.findProductsByName(name);
}


const getProductById = async (id) => {
    return await productRepo.getProductById(id);
}

const getAllProducts = async () => {
    console.log('Service...getAllProducts')
    return await productRepo.getAllProduct();
}

const updateProduct = async (id, product) => {
    return await productRepo.updateProduct(id, product);
}

const deleteProduct = async (id) => {
    return await productRepo.deleteProduct(id);
}

module.exports = {
    createProduct,
    getProductById,
    findProductsByName,
    getAllProducts,
    updateProduct,
    deleteProduct
}