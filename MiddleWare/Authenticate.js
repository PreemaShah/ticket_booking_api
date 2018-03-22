const {TicketUsers} = require('../Model/UserModel');
const jwt = require('jsonwebtoken');

var authenticate=(req,res,next)=>{
    var token =req.header('x-auth');
    console.log(token);
    console.log("inside middleware:"+token);
    TicketUsers.findOne({token1:token}).then((user)=>{
        if(!user)
        {
            return promise.reject()
        }
        req.user=user;
        req.token=token;
        next();
    }).catch((err)=>{
        res.status(401).send(err);
    })
};
module.exports={authenticate};