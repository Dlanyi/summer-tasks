$(function(){
    $(".option").mouseenter(function(){
        //当前元素添加展出效果的类名
        $(this).addClass("active");
        //其他元素删除展出效果的类名
        $(this).siblings(".option").removeClass("active");
    })
})