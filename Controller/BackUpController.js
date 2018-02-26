let mongoose = require('mongoose');
var {Backup} = require('../Model/BackUpModel');
exports.insert=(req,res)=>{

    var Backup1 = new Backup({

        TheatreName:req.body.TheatreName,
        CityId:req.body.CityId,
        MovieId:req.body.MovieId

    });
    Backup1.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};