var mongoose = require('mongoose');
let TheatreMovieSchema = mongoose.Schema({
    TheatreId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['TheatreDetails']

    },
    MovieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['MovieDetails']
    },

});
var TheatreMovies=mongoose.model('TheatreMovie',TheatreMovieSchema);
module.exports={
    TheatreMovies
};
