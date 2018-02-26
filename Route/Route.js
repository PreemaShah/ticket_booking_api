
exports.route=function (app) {
const backController=require('../Controller/BackUpController');
const userController=require('../Controller/UserController');
const movieController=require('../Controller/MovieController');
const CityController=require('../Controller/CityController');
const TheatreController=require('../Controller/theatreController');
    app.post("/MovieDetail",movieController.insertMovie);
    app.get("/Movie",movieController.getMovie);
    app.post("/users",userController.insert);
    app.get("/failure",userController.failure);
    app.get("/success",userController.success);
    app.get("/UserDetail",userController.getUserDetail);
    app.put("/deleteToken",userController.nullifyToken);
    app.post("/CityDetail",CityController.insertCity);
    app.post("/TheatreInsert",TheatreController.insert);
    app.delete("/Theatredelete/:id",TheatreController.delete1);
    app.get("/TheatregetAll",TheatreController.getall);
    app.post("/backup",backController.insert);
};
