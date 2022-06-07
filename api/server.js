const express = require('express'); //import express from 'express'

const app = express();
const connect = require('./config/connectDb');
const init = require('./config/setup');
const userRouter = require('./routes/user.routes')
const roleRouter = require('./routes/role.routes')
const productRouter = require('./routes/product.routes');
const cors = require('cors')
require('dotenv').config()
app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/role',roleRouter);
app.use('/product',productRouter);
const PORT = process.env.PORT || 5000;
connect(); 
init()
app.listen(PORT,(err)=>{
if(err) throw console.error(err);
console.log('listen to port '+PORT)
})
