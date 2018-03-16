
exports.route=function (app) {
const backController=require('../Controller/BackUpController');
const userController=require('../Controller/UserController');
const movieController=require('../Controller/MovieController');
const CityController=require('../Controller/CityController');
const TheatreController=require('../Controller/theatreController');
const MovieTheatreController=require('../Controller/theatreMovieController');
const {authenticate}=require('../MiddleWare/Authenticate');

    app.post("/MovieDetail",movieController.insertMovie);
    app.get("/Movie",movieController.getMovie);
    app.post("/users",userController.insert);
    app.get("/failure",userController.failure);
    app.get("/success",userController.success);
    app.get("/UserDetail",userController.getUserDetail);
    app.get("/loginUser",userController.getLoginUser);
    app.put("/deleteToken/:token",userController.nullifyToken);
    app.post("/CityInsert",CityController.insertCity);
    app.get("/CityDetail",CityController.getCity);
    app.post("/TheatreInsert",TheatreController.insert);
    app.delete("/Theatredelete/:id",TheatreController.delete1);
    app.get("/TheatregetAll",TheatreController.getall);
    app.post("/backup",backController.insert);
    app.get("/selectTheatre/:id",TheatreController.getOne);
    app.post("/theatreMovie/insert",MovieTheatreController.insert);
    app.get("/theatreMovie/getAll",MovieTheatreController.getall);
    app.get("/theatreMovie/getOne/:id",MovieTheatreController.getOne);
};
