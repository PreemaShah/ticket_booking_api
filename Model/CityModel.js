const mongoose = require('mongoose');
let cityDetail = mongoose.Schema({
    city:{
        type:String,
        required:true,
        trim:true
    }
});
var City = mongoose.model('City',cityDetail);
module.exports=
    {
        City
    }