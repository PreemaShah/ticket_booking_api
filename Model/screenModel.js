const mongoose = require('mongoose');
let screenDetailsSchema = mongoose.Schema({
    ScreenName:{
        type:String,
        trim:true,
        required:true

    },
    TheatreId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['TheatreMovie']
    },
    ScreenSeat:{
        type:Number,
        trim:true,
        required:true
    }

});
var screenDetails = mongoose.model('screenDetail',screenDetailsSchema);
module.exports=
    {
        screenDetails
    }