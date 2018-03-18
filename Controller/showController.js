let mongoose = require('mongoose');
var {showDetails} = require('../Model/showModel');
exports.insert=(req,res)=>{

    var show = new showDetails({

        MovieTheatreId:req.body.MovieTheatreId,
        ScreenId:req.body.ScreenId,
        ShowTime:req.body.ShowTime,
        Rate:req.body.Rate

    });
    show.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    showDetails.find().populate('MovieTheatreId')
        .then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    showDetails.remove({_id: req.params.id}).then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(404).send(err);
    }).catch((ex)=>{
        res.status(401).send(ex);
    })
};
exports.getOne=(req,res)=>{
    var _id1=req.params.id;
    console.log(_id1);
    showDetails.find({MovieTheatreId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
