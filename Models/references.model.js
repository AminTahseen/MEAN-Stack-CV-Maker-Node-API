const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ReferencesSchema=new Schema({
    name: {type:String, required:true},  
    designation: {type:String, required:true},  
    company: {type:String, required:true},  
    contact_no: {type:String, required:true},  
    contact_email: {type:String, required:true},  
    user_id: {type:String, required:true},   
});

module.exports=mongoose.model('References_Model',ReferencesSchema);