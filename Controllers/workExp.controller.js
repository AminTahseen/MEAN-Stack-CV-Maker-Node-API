const WorkExp=require('../Models/workExp.model');
var ObjectId=require('mongoose').Types.ObjectId; //for handling object id

exports.create_WorExp=function(req,res){
    let workExp=new WorkExp({
        company_name: req.body.company_name,  
        designation: req.body.designation,  
        start_date: req.body.start_date,  
        end_date: req.body.end_date,  
        responsibilities: req.body.responsibilities,  
        user_id: req.body.user_id,
    });
    workExp.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in education Save:'+JSON.stringify(err,undefined,2));}
    })
};

exports.findWorkExp_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

   WorkExp.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving Exp:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_WorkExp = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    WorkExp.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating Exp :' + JSON.stringify(err, undefined, 2)); }
    });
};


exports.ListExperience=function(req, res){
 
      WorkExp.find({'user_id': req.params.id }, function(err, docs)
      {
          if(err){
              res.send(err);
          }
          if(docs===null)
          {
              res.send(JSON.parse("No Experience found"));
          }
          else{
            res.send(docs);
          }
      });
  };