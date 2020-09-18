const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let UserSchema=new Schema({
    username: {type:String, required:true},  
    user_password: {type:String, required:true},  
    user_name: {type:String, required:true},  
    gender: {type:String, required:true},  
    dateOfBirth: {type:String, required:true},  
    email: {type:String, required:true},   
    contact_number:{type:String, required:true}
});

module.exports=mongoose.model('User_Model',UserSchema);