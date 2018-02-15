var mongoose=require('mongoose');
let MovieDetail=mongoose.model('MovieDetails',{
    Title:{
        type:String,
        required:true,
        trim:true
    },
    Poster:{
        type:String,

    },
    Genre:{
        type:String,
        required:true,
        trim:true
    },
    Ratings:{
        type:Number,
        required:true,
        trim:true
    },
    LeadingActorMale:{
        type:String,
        required:true,
        trim:true
    },
    LeadingActorFemale:{
        type:String,
        required:true,
        trim:true
    },
    Duration:{
        type:Number,
        required:true,
        trim:true
    },
    Description:{
        type:String,
        required:true,
        trim:true
    }

});
module.exports={
    MovieDetail
}