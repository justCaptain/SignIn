
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//设置模板引擎
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//解析body
app.use(bodyParser.urlencoded({extended:true}));

// 托管静态资源
app.use("/public",express.static("public"));

//路由处理
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

