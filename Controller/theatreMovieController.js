let mongoose = require('mongoose');
var {TheatreMovies} = require('../Model/theatreMovie');
exports.insert=(req,res)=>{

    var TheatreMovie = new TheatreMovies({

        TheatreId:req.body.TheatreId,
        MovieId:req.body.MovieId
    });
    TheatreMovie.save().then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err)
    })

};
exports.getall=(req,res)=>{
    TheatreMovies.find().populate('MovieId',['Title']).populate('TheatreId')
        .then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        }).catch((err)=>{
        console.log(err);
    });
}
exports.delete1=(req,res)=>{
    TheatreMovies.remove({_id: req.params.id}).then((doc)=>{
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
    TheatreMovies.findOne({TheatreId:_id1}).then((user)=>{
        console.log(user);
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
};
