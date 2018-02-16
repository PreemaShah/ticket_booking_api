
exports.route=function (app) {

const userController=require('../Controller/UserController');
const movieController=require('../Controller/MovieController');
const CityController=require('../Controller/CityController');
    app.post("/MovieDetail",movieController.insertMovie);
    app.get("/Movie",movieController.getMovie);
    app.post("/users",userController.insert);
    app.get("/failure",userController.failure);
    app.get("/success",userController.success);
    app.get("/UserDetail",userController.getUserDetail);
    app.put("/deleteToken",userController.nullifyToken);
    app.post("/CityDetail",CityController.insertCity);
};
