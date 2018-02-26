var mongoose = require('mongoose');

let BackUpSchema = mongoose.Schema({
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

});

var Backup = mongoose.model('BackUp',BackUpSchema);
module.exports={
    Backup
};