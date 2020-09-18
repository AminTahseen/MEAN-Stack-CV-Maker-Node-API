const express=require('express');
const router=express.Router();

const contact_controller=require('../Controllers/contact.controller');

router.post('/',contact_controller.add_contact);

module.exports=router;