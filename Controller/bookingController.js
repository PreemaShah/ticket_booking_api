let mongoose = require('mongoose');
var {bookingDetails} = require('../Model/bookingModel');
exports.insert=(req,res)=>{

    var booking = new bookingDetails({

        UserId:req.body.UserId,
        ShowId:req.body.ShowId,
        SeatId:req.body.SeatId,
        BookingDate:req.body.BookingDate,
        Quantity:req.body.Quantity,
        TotalPrice:req.body.TotalPrice

    });
    booking.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    bookingDetails.find().populate('MovieTheatreId')
        .then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    bookingDetails.remove({_id: req.params.id}).then((doc)=>{
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
    bookingDetails.find({MovieTheatreId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
