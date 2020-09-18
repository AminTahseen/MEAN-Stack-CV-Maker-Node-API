const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let WorkExpSchema=new Schema({
    company_name: {type:String, required:true},  
    designation: {type:String, required:true},  
    start_date: {type:String, required:true},  
    end_date: {type:String, required:true},  
    responsibilities: {type:String, required:true},  
    user_id: {type:String, required:true},   
});

module.exports=mongoose.model('WorkExperience_Model',WorkExpSchema);