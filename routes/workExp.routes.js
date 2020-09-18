const express=require('express');
const router=express.Router();

const workExp_controller=require('../Controllers/workExp.controller');

router.post('/',workExp_controller.create_WorExp);
router.get('/:id',workExp_controller.ListExperience);
router.put('/:id',workExp_controller.update_WorkExp);
module.exports=router;