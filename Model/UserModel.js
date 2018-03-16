var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var validators = require('mongoose-validators');


var TicketUser = mongoose.Schema({
    Name:{
      type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        validate:validators.isEmail()
    },
    password:{
      type:String,
        trim:true
    },
    UserId:{
      type:String,
        trim:true
    },
    ProfilePhoto: {
            type:String,
            trim:true
        },
    token1:{
        type:String,
        trim:true
    }
});
TicketUser.plugin(findOrCreate);
var TicketUsers=mongoose.model('TicketUser',TicketUser);
module.exports=
    {
        TicketUsers
    }