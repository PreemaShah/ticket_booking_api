
exports.route=function (app) {
const backController=require('../Controller/BackUpController');
const userController=require('../Controller/UserController');
const movieController=require('../Controller/MovieController');
const CityController=require('../Controller/CityController');
const TheatreController=require('../Controller/theatreController');
const MovieTheatreController=require('../Controller/theatreMovieController');
const {authenticate}=require('../MiddleWare/Authenticate');
const showController = require('../Controller/showController');
const screenController = require('../Controller/screenController');
const bookController = require('../Controller/bookingController');
const seatController = require('../Controller/seatController');


    //Movie route
    app.post("/MovieDetail",movieController.insertMovie);
    app.get("/Movie",movieController.getMovie);

    //user route
    app.post("/users/insert",userController.insert);
    app.get("/failure",userController.failure);
    app.get("/success",userController.success);
    app.get("/users/getAll",userController.getUserDetail);
    app.get("/users/loginUser",userController.getLoginUser);
    app.put("/users/deleteToken",authenticate,userController.nullifyToken);

    //city route
    app.post("/city/insert",CityController.insertCity);
    app.get("/city/getAll",CityController.getCity);

    //theater route
    app.post("/theatre/insert",TheatreController.insert);
    app.delete("/theatre/delete/:id",TheatreController.delete1);
    app.get("/theatre/getAll",TheatreController.getall);
    app.get("/theatre/getOne/:id",TheatreController.getOne);

    //backup route
    app.post("/backup",backController.insert);

    //movieTheater route
    app.post("/theatreMovie/insert",MovieTheatreController.insert);
    app.get("/theatreMovie/getAll",MovieTheatreController.getall);
    app.get("/theatreMovie/getOne/:id",MovieTheatreController.getOne);

    //show route
    app.post(" ",showController.insert);
    app.get("/show/getAll",showController.getall);
    app.get("/show/getOne/:id",showController.getOne);

    //screen route
    app.post("/screen/insert",screenController.insert);
    app.get("/screen/getAll",screenController.getall);
    app.get("/screen/getOne/:id",screenController.getOne);

    //seat route
    app.post("/seat/insert",seatController.insert);
    app.get("/seat/getAll",seatController.getall);
    app.get("/seat/getOne/:id",seatController.getOne);

    //booking route
    app.post("/book/insert",bookController.insert);
    app.get("/book/getAll",bookController.getall);
    app.get("/book/getOne/:id",bookController.getOne);

};

