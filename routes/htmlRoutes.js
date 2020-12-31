const path = require("path");
const db = require("../db/index.js");
const axios = require('axios');


module.exports = (app) =>{

    app.engine 
    const hellos = [{hello:"hello world"}]
    //html routes
    app.get('/', (req, res)=>{
        res.render("index", hellos[0]);
    })
}