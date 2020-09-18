const Education=require('../Models/education.model');
var ObjectId=require('mongoose').Types.ObjectId;//for handling object id

exports.create_Education=function(req,res){
    let education=new Education({
        institute_name: req.body.institute_name,  
        program: req.body.program,  
        start_date: req.body.start_date,  
        end_date: req.body.end_date,  
        field: req.body.field,  
        user_id: req.body.user_id,
    });
    education.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in education Save:'+JSON.stringify(err,undefined,2));}
    })
};

exports.findUser_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    User.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving User:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_education = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    Education.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating Education:' + JSON.stringify(err, undefined, 2)); }
    });
};


exports.ListEducations=function(req, res){
 
      Education.find({'user_id': req.params.id }, function(err, docs)
      {
          if(err){
              res.send(err);
          }
          if(docs===null)
          {
              res.send(JSON.parse("No Educations found"));
          }
          else{
            res.send(docs);
          }
      });
  };