var bcrypt = require('bcrypt');
var jwt=require('jsonwebtoken');
var mongoose = require('../Db/Db');
var {TicketUsers} = require('../Model/UserModel');

exports.insert =(req,res)=> {

    var user1 = new TicketUsers({
        Name:req.body.Name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        UserId:req.body.UserId
    });
    user1.save().then((doc) => {
        res.json("success");
    }, (err) => {
        res.json("fail");
    })
};

exports.failure=(req,res)=>{
    //res.render("Reg");
    console.log("failed");
    res.json("failed");
};

exports.success=(req,res)=>{
    //res.render("Reg");
    console.log('success');
    res.json(token);
};
exports.nullifyToken=(req,res)=>{
    TicketUsers.findOneAndUpdate({token:token},{
        $set:{
            token:''
        }
    }).then((docs)=>{
        console.log("nulled token")
    }).catch((err)=> {
        console.log(err);
    })
}