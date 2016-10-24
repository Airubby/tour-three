
$(function(){

    $(".box2_click").hover(function(){
        $(".box2_click").css({
            color:"#fff",
            background: "#33A6B5"
        });
        $(".box1_click").css({
            color:"#33A6B5",
            background: "#dfdfdf"
        });
        $(".box2").css({
            "z-index":"99"
        });
        $(".box1").css({
            "z-index":"9"
        });
    });
    $(".box1_click").hover(function(){
        $(".box1_click").css({
            color:"#fff",
            background: "#33A6B5"
        });
        $(".box2_click").css({
            color:"#33A6B5",
            background: "#dfdfdf"
        });
        $(".box1").css({
            "z-index":"99"
        });
        $(".box2").css({
            "z-index":"9"
        });
    });

});



