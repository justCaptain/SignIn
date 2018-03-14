

var express = require("express");
var router = express.Router();
var user = require("../models/user");
/**
 *  统一返回格式
 *  code:  
 *      0-> 成功
 *      1-> 用户名为空
 *      2-> 两次密码不一致
 *      3-> 用户名不一致
*/
var responseData;
router.use(function(req,res,next){
    responseData = {
        code:0,
        message:""
    };
    next();
});

router.post("/loginAuth",function(req,res,next){
    console.log(req.body);
    res.send(req.body);
});

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
    //
    user.findOne({username:username,password:password},function(err,result){
        if(err){
            console.log(err);
            return ;
        }else{
            if(!result){
                var newuser = new user({
                    username: username,
                    password: password
                }).save()
                    .then(function(Info){
                        res.json(responseData);
                        console.log(Info);
                    });
            }else{
                responseData.code = 3;
                responseData.message = "用户名已存在";
                res.json(responseData);
            }
        }
                
    })
}); 

module.exports = router;