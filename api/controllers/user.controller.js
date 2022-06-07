const userSchema = require('../models/user.model');

const roleSchema = require('../models/role.model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.addUser = async (req,res) =>{
    const {email,password,role} = req.body;
    try {
        const userExist = await userSchema.findOne({email:email});
        if(userExist){
            return res.status(400).send({msg:'User exist'});
        }
        const user = new userSchema(req.body);
        const passwordHashed = bcrypt.hashSync(password,10);
        user.password = passwordHashed;
       
        const userRole = await roleSchema.findOne({roleName:'user'});
        user.role = userRole._id
        
        const token = jwt.sign({id:user._id},process.env.passwordToken);
        await user.save();
        return res.status(200).send({msg:'User added successfully',token})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

exports.login = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const userExist = await userSchema.findOne({email:email});
        if(!userExist){
            return res.status(400).send({msg:'Bad credantials'})
        }
        
        const passwordHashed = bcrypt.compareSync(password,userExist.password);
        if(!passwordHashed){
            return res.status(400).send({msg:'Bad credantials'})
        }
        
        const token = jwt.sign({id:user._id},process.env.passwordToken);
       
        return res.status(200).send({msg:'Logged successfully',token})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

exports.getUsers = async (req,res) =>{
   
    try {
        const users = await userSchema.find();
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}


exports.getOneUser = async (req,res) =>{
   const {id} = req.params
    try {
        const user = await userSchema.findById(id);
        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

exports.deleteOneUser = async (req,res) =>{
    const {id} = req.params
     try {
         await userSchema.findByIdAndDelete(id);
         return res.status(200).send({msg:'User deleted successfully'})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }

 exports.updateOneUser = async (req,res) =>{
    const {id} = req.params
    const {password} = req.body
   
     try {
         if(password){
             const passwordHashed = bcrypt.hashSync(password,10);
            
             password = passwordHashed

         }
         await userSchema.findByIdAndUpdate(id,{$set:{...req.body}});
         const user = await userSchema.findById(id)
         return res.status(200).send({msg:'User updated successfully',user})
     } catch (error) {
         return res.status(500).send({error:error})
     }
 }