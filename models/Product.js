const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:String,
    price:{
        type:Number,
        required:true,
    },
});

const Product =mongoose.model('products2',productSchema);

module.exports = Product;