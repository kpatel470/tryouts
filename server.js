/*setTimeout(() =>{
  console.log("diplay after 5 second ");
}, 5000)*/

// npm i for reinstall for node_modules folder
// is not recommended to push files to github becaz of node_modules + space

var express = require("express");
var app = express();

var path = require("path");

// use the package in code
require("dotenv").config();  //FOR .ENV

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/about", function(req,res){
  res.sendFile(path.join(__dirname, "./views/about.html"));
});


// setup another route to listen on /about
app.get("/about", function(req,res){
    res.send("<h3>MY NAME IS KIRTAN :) </h3>");
});

app.get("/home", function(req,res){
  res.send("<h3>This is my home page.) </h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {  // FUNCTION EXPRESSION
  console.log("Express http server listening on: " + HTTP_PORT);
});

// FOR CHANGE IN THE PORT IN WINDOWS WE NEED TO GIVE COMMAND ON GIT BASH