const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let extraFieldsSchema=new Schema({
    curricular_activities: {type:String, required:true},  
    languages: {type:String, required:true},  
    user_id: {type:String, required:true},   
});

module.exports=mongoose.model('ActivitiesAndLanguages_Model',extraFieldsSchema);