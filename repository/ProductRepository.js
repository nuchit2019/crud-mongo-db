const Product = require('../models/Product');
//const objectId = require('mongodb').ObjectId;

const createProduct = async (product) => {
    console.log('repo...createProduct');
    console.log('createProduct=',product);

    return await Product.create(product);
}

// const getProductByName = async (name1) => {
//     console.log('repo..getProductByName')
//     console.log('name:',name1)
//     return await Product.findOne({name:name1});
    
// }

const findProductsByName = async (name) => {
    console.log('repo..findProductsByName')
    console.log('name:',name)
    const products = await Product.find({ name:name });
    console.log('products:',products)

    return products;
  };


const getProductById = async (id) => {
    //console.log('repo...1.getProductById=',id);
    //const id2 = new objectId(id);
    //console.log('repo...2.getProductById=',id2);
    return await Product.findById(id);
}

const getAllProduct = async () => { 
    console.log('repo...getAllProduct');
    console.log('repo...getAllProduct************************************');
    return await Product.find();
}

const updateProduct = async (id, product) => {
    console.log('repo...updateProduct');
    console.log('repo...updateProduct************************************');
    return await Product.findByIdAndUpdate(id, product, {
        new: true,
    })
}

const deleteProduct = async (id) => {
    console.log('repo...deleteProduct');
    console.log('repo...deleteProduct************************************');
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
