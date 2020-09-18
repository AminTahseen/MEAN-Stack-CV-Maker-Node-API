const ExtraFields=require('../Models/extraFields.model');
var ObjectId=require('mongoose').Types.ObjectId; //for handling object id

exports.create_extraFields=function(req,res){
    let extraFields=new ExtraFields({
        curricular_activities: req.body.curricular_activities,  
        languages: req.body.languages,    
        user_id: req.body.user_id,
    });
    extraFields.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in extraFields Save:'+JSON.stringify(err,undefined,2));}
    })
};
exports.findextraFields_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

     ExtraFields.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving ExtraFields:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_extraFields = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    ExtraFields.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating ExtraFields :' + JSON.stringify(err, undefined, 2)); }
    });
};


exports.ListextraFields=function(req, res){
 
    ExtraFields.find({'user_id': req.params.id }, function(err, docs)
      {
          if(err){
              res.send(err);
          }
          if(docs===null)
          {
              res.send(JSON.parse("No ExtraFields found"));
          }
          else{
            res.send(docs);
          }
      });
  };