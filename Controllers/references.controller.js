const References=require('../Models/references.model');
var ObjectId=require('mongoose').Types.ObjectId; //for handling object id

exports.create_References=function(req,res){
    let references=new References({
        name: req.body.name,  
        designation: req.body.designation,  
        company: req.body.company,  
        contact_no: req.body.contact_no,  
        contact_email: req.body.contact_email,  
        user_id: req.body.user_id,
    });
    references.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in references Save:'+JSON.stringify(err,undefined,2));}
    })
};

exports.findReferences_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    References.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving references:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_references = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    References.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating references :' + JSON.stringify(err, undefined, 2)); }
    });
};


exports.ListReferences=function(req, res){
 
      References.find({'user_id': req.params.id }, function(err, docs)
      {
          if(err){
              res.send(err);
          }
          if(docs===null)
          {
              res.send(JSON.parse("No References found"));
          }
          else{
            res.send(docs);
          }
      });
  };