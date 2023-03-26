const express = require('express'); 
const mongoose  = require('mongoose');

const cors = require('cors');
const dotenv = require('dotenv');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
 
// const productsRouter = require('./routes/products');
const productController = require('./controllers/ProductController');

// Use the connectDatabase middleware
const connectDatabase = require('./middlewares/MongoDBConnector');



// Load environment variables from .env file
dotenv.config();

// Create Express app
var app = express();
app.use(cors());
app.use(connectDatabase);
app.use(logger('dev'));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/products', productController);


// Set up error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('Server Error');
})
 

module.exports = app;
