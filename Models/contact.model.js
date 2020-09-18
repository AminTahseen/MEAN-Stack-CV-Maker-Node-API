const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ContactSchema=new Schema({
    email:{type:String, required:true},
    message:{type:String,required:true}
});

module.exports=mongoose.model('Contact_Us_Model',ContactSchema);