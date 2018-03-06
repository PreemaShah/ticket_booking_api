let mongoose = require('mongoose');
var {Theatre} = require('../Model/theatreModel');
exports.insert=(req,res)=>{

    var theatre = new Theatre({

        TheatreName:req.body.TheatreName,
        CityId:req.body.CityId,
        MovieId:req.body.MovieId

    });
    theatre.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    Theatre.find().populate('MovieId',['Title']).populate('CityId')
        .then((detail)=>{
        res.send(detail);
    },(err)=>{
        res.status(400).send(err);
    }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    Theatre.remove({_id: req.params.id}).then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(404).send(err);
    }).catch((ex)=>{
        res.status(401).send(ex);
    })
};
exports.getOne=(req,res)=>{
    var qur= req.params
    var _id1=qur.id
    console.log(_id1);
    Theatre.find({CityId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
