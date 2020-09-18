const express=require('express');
const router=express.Router();

const researchExp_controller=require('../Controllers/researchExp.controller');

router.post('/',researchExp_controller.create_ResearchExp);
router.get('/:id',researchExp_controller.ListExperience);
router.put('/:id',researchExp_controller.update_ResearchExp);
module.exports=router;