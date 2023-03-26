const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedtopology: true,
}).then(() => {
    console.log('Connectd to mongo database');

}).catch((err) => {
    console.err(err);
});


// Middleware function to connect to database before handling requests
function connectDatabase(req,re,next){
    if(mongoose.connect.readyState===1){
         // Database already connected, proceed with handling request
        return next();
    }

    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Connected to database');
        next();
    }).catch((err)=>{
        next(err);
    })
}


module.exports = connectDatabase;