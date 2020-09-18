const express=require('express');
const router=express.Router();

const references_controller=require('../Controllers/references.controller');

router.post('/',references_controller.create_References);
router.get('/:id',references_controller.ListReferences);
router.put('/:id',references_controller.update_references);
module.exports=router;