const express = require('express');

const productRouter = express.Router()

const {addproduct,getproducts,getOneproduct,deleteOneproduct,updateOneproduct} = require('../controllers/product.controller')

productRouter.get('/',getproducts)
productRouter.post('/addproduct',addproduct)
productRouter.get('/:id',getOneproduct)
productRouter.put('/update/:id',updateOneproduct)
productRouter.delete('/delete/:id',deleteOneproduct)



module.exports = productRouter;