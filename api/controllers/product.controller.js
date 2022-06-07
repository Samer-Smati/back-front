const productSchema = require('../models/product.model');



exports.addproduct = async (req,res) =>{
    const {title} = req.body;
    try {
        const productExist = await productSchema.findOne({title:title});
        if(productExist){
            return res.status(400).send({msg:'product exist'});
        }
        const product = new productSchema(req.body);
        
        const last_id = await productSchema.find().sort({id:-1}).limit(1)
        
        if(last_id){
            product.id = last_id[0].id + 1
        }else{
            product.id = 1
        }

        await product.save();
        return res.status(200).send({msg:'product added successfully'})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}


exports.getproducts = async (req,res) =>{
   
    try {
        const products = await productSchema.find();
        return res.status(200).send({products})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}


exports.getOneproduct = async (req,res) =>{
   const {id} = req.params
    try {
        const product = await productSchema.findById(id);
        return res.status(200).send({product})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

exports.deleteOneproduct = async (req,res) =>{
    const {id} = req.params
     try {
         await productSchema.findByIdAndDelete(id);
         return res.status(200).send({msg:'product deleted successfully'})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }

 exports.updateOneproduct = async (req,res) =>{
    const {id} = req.params
     try {
         await productSchema.findByIdAndUpdate(id,{$set:{...req.body}});
         const product = await productSchema.findById(id)
         return res.status(200).send({msg:'product updated successfully',product})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }