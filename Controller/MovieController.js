var mongoose=require('./../Db/Db');
var {MovieDetail}=require('./../Model/MovieModel');

exports.insertMovie=(req,res)=>{
    var Detail = new MovieDetail({
        Title : req.body.Title,
        Poster:req.body.Poster,
        Genre:req.body.Genre,
        Ratings:req.body.Ratings,
        LeadingActorMale:req.body.LeadingActorMale,
        LeadingActorFemale:req.body.LeadingActorFemale,
        Duration:req.body.Duration,
        Description:req.body.Description
    });
    Detail.save().then((detail)=>{
       res.send(detail);
    }).catch((err)=>{
        res.send(err)
    })
};
exports.getMovie=(req,res)=>{

    var que=req.query;
    //console.log(que);
    if(que.page==='Trending')
    {
        MovieDetail.find({Ratings:{$gt:6}}).then((detail)=>{
            //console.log(detail);
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        });
    }
    else
    {
        MovieDetail.find().then((detail)=>{
            res.send(detail);
        },(err)=>{
            res.status(400).send(err);
        });
    }

}