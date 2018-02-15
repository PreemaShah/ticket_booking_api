var express = require('express');
var session = require('express-session');
var bodyparser = require('body-parser') ;
var {TicketUsers} = require('../Model/UserModel');
var route=require('../Route/Route');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const githubStrategy = require('passport-github').Strategy;
var mongoose = require('../Db/Db');
var bcrypt = require('bcrypt');
var jwt=require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
var token='';
var app=express();
app.use(passport.initialize());
app.use(bodyparser.json());



//Passport Authentication
passport.serializeUser((user, done) => {
    done(null, user);
});

// deserialize user object
passport.deserializeUser((user, done) => {
    done(null, user);
});

//localStrategy
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
    },
    function (username,password,done) {

        console.log(username);
        console.log(password);

        TicketUsers.findOne({email:username}).then((user1)=>{
            console.log(user1);
            if(!user1){
                return done(null,false);
            }
            else
            {
                if(!bcrypt.compareSync(password,user1.password))
                {
                    console.log("In Encrypt")
                    return done(null,false);
                }
                else
                {
                    token = jwt.sign({username:user1.email,password:user1.password},'TICKETBOOKINGAPI');

                    TicketUsers.findOneAndUpdate({username:user1.email,password:user1.password},{
                        $set:{
                            token:token
                        }
                    }).then((docs)=>{
                        return done(null,true)
                    }).catch((err)=> {
                        console.log(err);
                        return done(null,false)
                    })
                }
            }

        }).catch((err)=>{
            console.log(err);
            return done(null,false)
        })
    }
));
app.post('/user',passport.authenticate('local',{

    successRedirect:'/success',
    failureRedirect:'/failure'


}));


//GoogleStrategy
passport.use(new googleStrategy({
    clientID:'294176182838-7d8l7ppu7qlrs95rc9cjnqnr8hhdcjjp.apps.googleusercontent.com',
    clientSecret:'8aasu1KlCJoeACY2jEb9fFu_',
    callbackURL:"http://localhost:3000/auth/google/callback"
},
    function (accessToken,refreshToken,profile,done) {
    console.log(profile);

    TicketUsers.findOrCreate({UserId:profile.id,Name:profile.displayName,email:profile.emails[0].value,ProfilePhoto:profile.photos[0].value}, (err,user)=> {
        return done(err,user);
    })
        
    }
    ));

app.get('/auth/google',
    passport.authenticate('google', {scope: ['profile','email']}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/failure' }),
    function(req, res) {
        res.redirect('/success');
    });





//Github Strategy
passport.use(new githubStrategy({
        clientID:'f2f068083b8dd838811b',
        clientSecret:'f8b01bc3ac1fce1effa5e801003b15847b3f4050',
        callbackURL:"http://localhost:3000/auth/github/callback"
    },
    function (accessToken,refreshToken,profile,done) {
        console.log(profile);

        TicketUsers.findOrCreate({UserId:profile.id,Name:profile.username,ProfilePhoto:profile.photos[0].value}, (err,user)=> {
            console.log(user);
            return done(err,user);
        })

    }
));

app.get('/github',
    passport.authenticate('github',{scope:['profile:email']}));

app.get('/auth/github/callback',
    passport.authenticate('github',{failureRedirect:'/failure'}),
    function(req, res) {
        res.redirect('/success');
    });

route.route(app);

app.listen(3000,()=>{
console.log("Port started");
});
