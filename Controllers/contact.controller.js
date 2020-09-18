const Contact=require('../Models/contact.model');
var ObjectId=require('mongoose').Types.ObjectId;//for handling object id

//this function will perform the insert operation
exports.add_contact=function(req,res){
    let contact=new Contact({
        email: req.body.email,
        message: req.body.message
    });

    contact.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in contact Save:'+JSON.stringify(err,undefined,2));}
    })
};