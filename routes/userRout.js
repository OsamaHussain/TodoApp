const express=require('express');
const router=express.Router()
const {getAllUsers,postUser}=require('../userController/userController');
router.get('/getAllUser',getAllUsers);
router.post('/post',postUser);
module.exports=router;
