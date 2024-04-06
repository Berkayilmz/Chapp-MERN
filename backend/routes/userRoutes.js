const express=require('express');
const protecRoute=require('../middleware/protectRoute')

const getUsersForSidebar=require('../controlles/userController')

const router=express.Router();

router.get('/',protecRoute,getUsersForSidebar)

module.exports=router
