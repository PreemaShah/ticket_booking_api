const mongoose = require('mongoose');
let seatDetailsSchema = mongoose.Schema({
    SeatNumber:{
        type:Number,
        trim:true,
        required:true

    },
    ScreenId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['screenDetail']
    },
});
var seatDetails = mongoose.model('seatDetail',seatDetailsSchema);
module.exports=
    {
        seatDetails
    }