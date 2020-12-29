const express = require("express");
const exphbs = require('express-handlebars')
const path = require("path");

//set up express app
const app = express();
const PORT = process.env.PORT || 3002

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//
app.listen(PORT, ()=>{
    console.log("App listening on http://LocalHost:" + PORT);
})