const mongoose = require('mongoose');
let bookingDetailsSchema = mongoose.Schema({
    UserId:{
        type:String,
        trim:true,
        required:true

    },
    ShowId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['TheatreMovie']
    },
    SeatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['seatDetail'],
        trim:true,
        required:true
    },
    BookingDate:{
        type:Date,
        trim:true,
        required:true
    }

});
var bookingDetails = mongoose.model('bookingDetail',bookingDetailsSchema);
module.exports=
    {
        bookingDetails
    }