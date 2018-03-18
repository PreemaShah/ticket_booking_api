let mongoose = require('mongoose');
var {screenDetails} = require('../Model/screenModel');
exports.insert=(req,res)=>{

    var screen = new screenDetails({

        ScreenName:req.body.ScreenName,
        TheatreId:req.body.TheatreId,
        ScreenSeat:req.body.ScreenSeat

    });
    screen.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    screenDetails.find().populate('TheatreId')
        .then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    screenDetails.remove({_id: req.params.id}).then((doc)=>{
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
    screenDetails.find({TheatreId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
