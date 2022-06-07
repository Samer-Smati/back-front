const express = require('express');

const roleRouter = express.Router()

const {addrole,getroles,getOnerole,deleteOnerole,updateOnerole} = require('../controllers/role.controller')

roleRouter.get('/',getroles)
roleRouter.post('/addrole',addrole)
roleRouter.get('/:id',getOnerole)
roleRouter.put('/update/:id',updateOnerole)
roleRouter.delete('/delete/:id',deleteOnerole)



module.exports = roleRouter;