require('dotenv').config();
const express = require("express");
const exphbs = require('express-handlebars')
const flash = require('express-flash');
const session = require('express-session');
const passport = require('./config/passport.js')

//set up express app
const app = express();
const PORT = process.env.PORT || 3002

//set public folder
app.use(express.static("public"));

//set up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(flash())
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.sessions)

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//
app.listen(PORT, ()=>{
    console.log("App listening on http://LocalHost:" + PORT);
})