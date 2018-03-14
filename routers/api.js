

var express = require("express");
var router = express.Router();
var user = require("../models/user");

//统一返回格式
var responseData;
router.use(function(req,res,next){
    responseData = {
        code:0,
        message:""
    };
    next();
});

//处理注册路由
router.post("/registerAuth",function(req,res,next){
    var username  = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

    //用户名为空
    if(username == ""){
        responseData.code = 1;
        responseData.message = "用户名不能为空"
        res.json(responseData);
        return ;
    }
    
    //两次输入密码不一致
    if(password != repassword){
        responseData.code = 2;
        responseData.message = "两次输入密码不一致";      
        res.json(responseData);
        return ;
    }
    //查询数据库
    user.findOne({username:username},function(err,result){
        if(!result){
            new user({
                username: username,
                password: password
            }).save(function(err,product){
                responseData.code = 0;
                responseData.message = "注册成功";
                res.json(responseData);
            });
        }else{
            responseData.code = 3;
            responseData.message = "用户名已存在";
            res.json(responseData);
        }       
    });
}); 

//处理登录路由
router.post("/loginAuth",function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    if(username=="" || password==""){
        responseData.code = 1;
        responseData.message = "用户名或密码不能为空";
        res.json(responseData);
        return ;
    }

    user.findOne({username : username,password : password},function(err,result){
        if(result){
            responseData.code = 0;
            responseData.message = "您好！"+ username;
            res.json(responseData);
        }else{
            responseData.code = 2;
            responseData.message = "用户名或密码错误";
            res.json(responseData);
        }
    });
})
module.exports = router;