const Product = require('../models/Product'); 

const createProduct = async (product) => {
    console.log('repo...createProduct');
    console.log('createProduct=',product);

    return await Product.create(product);
} 

const findProductsByName = async (name) => {
    console.log('repo..findProductsByName')
    console.log('name:',name)
    const products = await Product.find({ name:name });
    console.log('products:',products)

    return products;
  };


const getProductById = async (id) => { 
    return await Product.findById(id);
}

const getAllProduct = async () => {  
    return await Product.find();
}

const updateProduct = async (id, product) => {
    
    return await Product.findByIdAndUpdate(id, product, {
        new: true,
    })
}

const deleteProduct = async (id) => { 
    return await Product.findByIdAndDelete(id);
}


module.exports = {
    createProduct,
    getProductById,
    findProductsByName,
    getAllProduct,
    updateProduct,
    deleteProduct
};
