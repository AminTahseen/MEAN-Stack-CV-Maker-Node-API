const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ResearchExpSchema=new Schema({
    project_name: {type:String, required:true},  
    start_date: {type:String, required:true},  
    end_date: {type:String, required:true},  
    research_field: {type:String, required:true},  
    user_id: {type:String, required:true},   
});

module.exports=mongoose.model('ResearchExperience_Model',ResearchExpSchema);