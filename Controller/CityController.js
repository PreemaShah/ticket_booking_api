var mongoose = require('../Db/Db');
var {City} = require('../Model/CityModel');

exports.insertCity=(req,res)=>{
    console.log(req.body);
    var cityObj = new City({
       city: req.body.city
    })
    cityObj.save().then((docs)=>{
        res.send("Inserted"+docs);
    }).catch((err)=>{
        res.send(err);
    })

}