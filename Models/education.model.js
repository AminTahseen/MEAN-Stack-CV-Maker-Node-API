const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let EducationSchema=new Schema({
    institute_name: {type:String, required:true},  
    program: {type:String, required:true},  
    start_date: {type:String, required:true},  
    end_date: {type:String, required:true},  
    field: {type:String, required:true},  
    user_id: {type:String, required:true},   
});

module.exports=mongoose.model('Education_Model',EducationSchema);