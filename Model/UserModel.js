var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
let TicketUser = mongoose.Schema({
    Name:{
      type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
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