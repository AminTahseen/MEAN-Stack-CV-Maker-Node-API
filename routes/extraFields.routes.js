const express=require('express');
const router=express.Router();

const extraFields_controller=require('../Controllers/extraFields.controller');

router.post('/',extraFields_controller.create_extraFields);
router.get('/:id',extraFields_controller.ListextraFields);
router.put('/:id',extraFields_controller.update_extraFields);
module.exports=router;