$(document).ready(function(){
    $(".nav-link").on("click",function(){
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
    })
});