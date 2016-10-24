/******** 疆外旅游 *********/

$('.kwicks').kwicks({
    maxSize : 400,
    spacing : 10,
    behavior: 'menu'
});

$(".jw_top li").hover(function(){
    $(this).children(".jw_lg").hide();
},function(){
    $(this).children(".jw_lg").show();
});