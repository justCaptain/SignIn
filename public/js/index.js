

$(document).ready(function(){
    $("#id_login").click(function(){
        $("#login").css("display","block");
        $("#register").css("display","none");
    });
    $("#id_register").click(function(){
        $("#register").css("display","block");
        $("#login").css("display","none");
    });

    var login = $("#login");
    var register = $("#register");

    $(".loginSubmit").click(function(){
        $.ajax({
            type:"POST",
            url:"/api/loginAuth",
            data:{
                username:login.children('input[name="username"]').val(),
                password:login.children('input[name="password"]').val()
            },
            success:function(result){
                $("#loginMsg").html(JSON.stringify(result));
            }
        });
    });
    $(".registerSubmit").click(function(){
        $.ajax({
            type:"POST",
            url:"/api/registerAuth",
            dataType:"json",
            data:{
                username:register.children('input[name="username"]').val(),
                password:register.children('input[name="password"]').val(),
                repassword:register.children('input[name="repassword"]').val()
            },
            success:function(result){
                if(result.code == 0){
                    $("#registerMsg").html("注册成功");
                }else{
                    $("#registerMsg").html(result.message);
                }
            }
        });
    });

});