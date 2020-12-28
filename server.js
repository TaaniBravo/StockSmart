const express = require("express");
const path = require("path");

//set up express app
const app = express();
const PORT = process.env.PORT || 3001

//set Express static path
app.use(express.static("public"));

//set up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use (express.join());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//
app.listen(PORT, ()=>{
    console.log("App listening on http://LocalHost:" + PORT);
})