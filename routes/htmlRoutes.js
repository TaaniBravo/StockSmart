const path = require("path");
const db = require("../db/index.js");
const { JSDOM } = require( "jsdom" );
const { response } = require("express");
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

module.exports = (app) =>{
    const hellos = [{hello:"hello world"}]
    //html routes
    app.get('/', (req, res)=>{
        res.render("index", hellos[0]);
    })
}