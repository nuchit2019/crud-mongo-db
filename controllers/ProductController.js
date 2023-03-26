const express = require('express');
const routeProoductController = express.Router();

const productService = require('../services/ProductService');


/* http://localhost:3500/products */
routeProoductController.get('/', function (req, res, next) {
    res.send('Hello Product ... ');
});


/* http://localhost:3500/products/getAllProducts */
routeProoductController.get('/getAllProducts', async (req, res, next) => {
    try {
        console.log('ProoductController...getAllProducts')
        const product = await productService.getAllProducts();
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

//getProductByName
/* http://localhost:3500/products/findProductsByName/:name */
routeProoductController.get('/findProductsByName/:name', async (req, res, next) => {
    try {
        const name = req.params.name;
        const product = await productService.findProductsByName(name);

        console.log("ProoductController=",product);

        if (!product) {
            res.status(404).json({message:'ไม่พบข้อมูล สินค้า'});
        } else {
            res.status(200).json(product)
        }

    } catch (err) {
        next(err);
    }
})



/* http://localhost:3500/products/:id */
routeProoductController.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (!product) {
            res.status(404);
        } else {
            res.status(200).json(product)
        }

    } catch (err) {
        next(err);
    }
})


/* http://localhost:3500/products/create */
// POST a new product
routeProoductController.post('/create', async (req, res, next) => {
    try { 
        
        const product = req.body;
        const createProduct = await productService.createProduct(product);
        res.status(201).json(createProduct);

    } catch (err) {
        console.log('err=',err);
        next(err);
    }
})

/* http://localhost:3500/products/:id */
// PUT update an existing product by id
routeProoductController.put('/:id', async (req, res, next) => {
    try {
 
        const id = req.params.id;
        const product = req.body;
 
        //console.log("PUT update product:",product)
        const updateProduct = await productService.updateProduct(id, product);
        res.status(200).json(updateProduct)

    } catch (err) {
        next(err);
    }
})

/* http://localhost:3500/products/:id */
// DELETE a product by id
routeProoductController.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await productService.deleteProduct(id);
        res.status(200).json({message:'ลบข้อมูลเรียบร้อย...'});
    } catch (err) {
        next(err);
    }

})

module.exports = routeProoductController;