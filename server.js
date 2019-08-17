const express = require("express"); 
const path = require("path"); 

const app = express(); 
const PORT = process.env.PORT || 3003; 

app.use(express.static("./app/public")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use(express.static(__dirname + "./app/public/css")); 

require("./app/routes/apiRoutes"); 
require("./app/routes/htmlRoutes"); 

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
