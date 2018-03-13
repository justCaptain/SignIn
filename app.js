
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
    
app.use(bodyParser.urlencoded({extended:true}));

app.use("/public",express.static("public"));
app.use("/",require("./routers/main"));
app.use("/api",require("./routers/api"));

mongoose.connect("mongodb://localhost:27017/login",function(err){
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        app.listen(8888);
    }
});

