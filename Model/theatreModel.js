var mongoose = require('mongoose');
var {Backup} = require('./BackUpModel');
let TheatreSchema = mongoose.Schema({
    TheatreName:{
        type:String,
        trim:true,
        required:true

    },
    CityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['City']
    },
    MovieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['MovieDetails']
    }

})

TheatreSchema.pre('save',function (next){
    var user= this;
    console.log(user);
    next();


})

TheatreSchema.post('remove',function(err,doc,next){
    var theatre= doc;
    console.log(theatre);
    next();
   /* Backup.insertOne(theatre).then((user1,err)=>{
        if(err){throw err}
        console.log(user1);
    }).catch((err1)=>{
        console.log(err1);
    })*/


})
var Theatre = mongoose.model('TheatreDetails',TheatreSchema);
module.exports={
    Theatre
}