const express=require("express");
const app=express();
const morgan=require("morgan")
var nunjucks = require('nunjucks');


var logger=morgan("dev");

/*app.use(function(req,res,next){
    console.log(req.path,req.method,res.statusCode);
    next();
});*/

app.use(logger);

app.listen(8080,function(){
    console.log("listening on port 8080!'");
});

app.get('/', function(req,res,next){
    res.send("welcome!");
    //next();
});


