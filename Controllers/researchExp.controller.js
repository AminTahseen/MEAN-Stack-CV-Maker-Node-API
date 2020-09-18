const ResearchExp=require('../Models/researchExp.model');
var ObjectId=require('mongoose').Types.ObjectId; //for handling object id

exports.create_ResearchExp=function(req,res){
    let researchExp=new ResearchExp({
        project_name: req.body.project_name,  
        start_date: req.body.start_date,  
        end_date: req.body.end_date,  
        research_field: req.body.research_field,  
        user_id: req.body.user_id,
    });
    researchExp.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in research exp Save:'+JSON.stringify(err,undefined,2));}
    })
};

exports.findResearchExp_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

   ResearchExp.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving r exp:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_ResearchExp = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    ResearchExp.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating r Exp :' + JSON.stringify(err, undefined, 2)); }
    });
};


exports.ListExperience=function(req, res){
 
      ResearchExp.find({'user_id': req.params.id }, function(err, docs)
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