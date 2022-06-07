
const roleSchema = require('../models/role.model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.addrole = async (req,res) =>{
    const {roleName} = req.body;
    try {
        const roleExist = await roleSchema.findOne({roleName:roleName});
        if(roleExist){
            return res.status(400).send({msg:'role exist'});
        }
        const role = new roleSchema(req.body);

        await role.save();
        return res.status(200).send({msg:'role added successfully'})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}


exports.getroles = async (req,res) =>{
   
    try {
        const roles = await roleSchema.find();
        return res.status(200).send({roles})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}


exports.getOnerole = async (req,res) =>{
   const {id} = req.params
    try {
        const role = await roleSchema.findById(id);
        return res.status(200).send({role})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

exports.deleteOnerole = async (req,res) =>{
    const {id} = req.params
     try {
         await roleSchema.findByIdAndDelete(id);
         return res.status(200).send({msg:'role deleted successfully'})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }

 exports.updateOnerole = async (req,res) =>{
    const {id} = req.params
     try {
        
         await roleSchema.findByIdAndUpdate(id,{$set:{...req.body}});
         const role = await roleSchema.findById(id)
         return res.status(200).send({msg:'role updated successfully',role})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }