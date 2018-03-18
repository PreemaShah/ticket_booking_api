const mongoose = require('mongoose');
let showDetailsSchema = mongoose.Schema({
    MovieTheatreId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true,
        ref:['TheatreMovie']
    },
    ScreenId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true,
        ref:['screenDetail']
    },
    ShowTime:{
        type:Date,
        required:true,
        trim:true
    },
    Rate:{
        type:Number,
        required:true,
        trim:true
    }
});
var showDetails = mongoose.model('showDetail',showDetailsSchema);
module.exports=
    {
        showDetails
    }