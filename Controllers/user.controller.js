const User=require('../Models/user.model');
var ObjectId=require('mongoose').Types.ObjectId;//for handling object id

exports.create_User=function(req,res){
    let user=new User({
        username: req.body.username,
        user_password: req.body.user_password,
        user_name: req.body.user_name,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        contact_number: req.body.contact_number,
    });
    user.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in user Save:'+JSON.stringify(err,undefined,2));}
    })
};

exports.VerifyLogin = function (req, res) {
    const { usern, user_pass } = req.body;
    try {
        User.findOne({ username: req.body.username, user_password: req.body.user_password }, (err, user) => {
            if (user === null) 
            {
                console.log("data : "+req.body.username+" "+req.body.user_password);
                console.log('Error :' + JSON.stringify("User Not found"));
            }
            else if (user.username === req.body.username && user.user_password === req.body.user_password) 
            {
                res.send(user);
            }
            else
             {
                console.log('Error' + JSON.stringify(err, undefined, 2));
            }
        });
    }
    catch (err) {
        res.send(err)
    }
};

exports.findUser_byID = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    User.findById(req.params.id, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Retrieving User:' + JSON.stringify(err, undefined, 2)); }
    })
};


exports.update_user = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, doc) {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating User:' + JSON.stringify(err, undefined, 2)); }
    });
};