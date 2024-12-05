const express = require('express');
const app = express();

var morgan = require('morgan');
const cors = require('cors');


require('./db.config')

const router = require('./router.config');

app.use(router);


app.use((req,res,next) => {
    next({
        statusCode: 404,
        message:"404 resources not found",
        detail: null
    });
});

app.use((err,req,res,next)=> {
    let statusCode = err.statusCode || 500;
    let message = 'internal error' || err.message;
    let error = err.detail || null;
    
    if (err.code === 11000){
        console.log('Validation error at mongodb');
        const uniquefieldKeys = Object.keys(err.keyPattern);
        console.log(uniquefieldKeys);
        details={}
        details[uniquefieldKeys]= uniquefieldKeys.map(key => '${key} must be unique').join(',');
        message = 'Validation error';
        statusCode = 400;
    }

    console.log(" error handling middleware",err)
    
    res.status(statusCode).json({
        result:detail,
        message: message,
        meta: null
});
}
);

module.exports = app;
