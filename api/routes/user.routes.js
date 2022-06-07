const express = require('express');

const userRouter = express.Router()

const {addUser,login,getUsers,getOneUser,deleteOneUser,updateOneUser} = require('../controllers/user.controller');
const { isAuth } = require('../middlewares/isAuth');
const {validation,loginValidation,registerValidation} = require('../middlewares/validator')
userRouter.get('/',getUsers)
userRouter.post('/addUser',registerValidation,validation,addUser)
userRouter.get('/current',isAuth,async(req,res)=>res.send({user:req.user}))
userRouter.post('login',loginValidation,validation,login)
userRouter.get('/:id',getOneUser)
userRouter.put('/update/:id',updateOneUser)
userRouter.delete('/delete/:id',deleteOneUser)



module.exports = userRouter;