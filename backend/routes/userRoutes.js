const express=require('express')
const userRoutes=express.Router()
const {userController,getUser,deleteUser,updateUser}=require('../controllers/userController')

userRoutes.post('/',userController)
userRoutes.get('/',getUser)
userRoutes.delete('/:id',deleteUser)
userRoutes.put('/:id',updateUser)
module.exports=userRoutes

