

$(document).ready(function(){
    $("#id_login").click(function(){
        $("#login").css("display","block");
        $("#register").css("display","none");
    });
    $("#id_register").click(function(){
        $("#register").css("display","block");
        $("#login").css("display","none");
    });
});