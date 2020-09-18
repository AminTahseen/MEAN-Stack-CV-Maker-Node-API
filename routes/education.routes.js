const express=require('express');
const router=express.Router();

const edu_controller=require('../Controllers/education.controller');

router.post('/',edu_controller.create_Education);
router.get('/listEducations/:id',edu_controller.ListEducations);
router.put('/:id',edu_controller.update_education);

module.exports=router;