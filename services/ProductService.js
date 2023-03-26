const productRepo = require('../repository/ProductRepository');


const createProduct = async (product) => { 
    return await productRepo.createProduct(product)
}
 
const findProductsByName = async (name) => { 
    return await productRepo.findProductsByName(name);
}


const getProductById = async (id) => {
    return await productRepo.getProductById(id);
}

const getAllProducts = async () => { 
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