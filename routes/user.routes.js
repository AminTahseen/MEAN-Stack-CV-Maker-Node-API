const express=require('express');
const router=express.Router();

const user_controller=require('../Controllers/user.controller');

router.post('/',user_controller.create_User);
router.post('/verifyLogin', user_controller.VerifyLogin);
router.get('/getUserDetails/:id',user_controller.findUser_byID);
router.put('/SavechangesProfile/:id',user_controller.update_user);
module.exports=router;