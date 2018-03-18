let mongoose = require('mongoose');
var {seatDetails} = require('../Model/seatModel');
exports.insert=(req,res)=>{

    var seat = new seatDetails({

        SeatNumber:req.body.SeatNumber,
        ScreenId:req.body.ScreenId,

    });
    seat.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    seatDetails.find().populate('ScreenId')
        .then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    seatDetails.remove({_id: req.params.id}).then((doc)=>{
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
    seatDetails.find({ScreenId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
