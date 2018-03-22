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
        res.json(doc);
    }, (err) => {
        res.json("fail");
    })
};

exports.failure=(req,res)=>{
    //res.render("Reg");
    console.log("failed");
    res.status(404).json("failed");
};

exports.success=(req,res)=>{
    //res.render("Reg");
    console.log('success');
    console.log(document1);
    res.header('x-auth',token).status(200).json(document1);
};
exports.nullifyToken=(req,res)=>{
    console.log("in nullify token");
    console.log(req.token);
    TicketUsers.findOneAndUpdate({token1:req.token},{
        $set:{
            token1:''
        }
    }).then((docs)=>{
        console.log(docs.token1);
        res.status(200).json(docs.token1);
    },(err)=>{
        console.log(err)
        res.status(404).send(err)
    }).catch((cerr)=> {
        console.log(cerr);
    })
};
exports.getUserDetail=(req,res)=>{
    TicketUsers.find().then((detail)=>{
        res.send(detail);
    },(err)=>{
        res.status(400).send(err);
    });
}

exports.getLoginUser=(req,res)=>{
    console.log("in loginUser");
    TicketUsers.find({token1:{$ne:""}}).then((detail)=>{
        res.status(200).send(detail);
        console.log(detail);
    }).catch((err)=>{
        console.log(err);
    })
};