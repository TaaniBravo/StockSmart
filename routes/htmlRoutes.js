const path = require("path");
const orm = require("../config/orm.js");
const axios = require('axios');


module.exports = (app) =>{

    app.engine 
    //html routes
    app.get('/', (req, res)=>{
        res.render("index");
    })

    app.get('/results', (req, res)=>{
        res.render("results");
    })

    app.get('/userpage', (req, res)=>{
        res.render("userpage");
    })

    app.get('/register', (req, res)=>{
        res.render("register");
    })

    app.get('/signin', (req, res)=>{
        res.render("signin");
    })

}