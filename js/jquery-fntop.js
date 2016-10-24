
function b(){
    h = $(window).height()/2;
    t = $(document).scrollTop();
    if(t > h){
        $('#nav_scroll').show();
    }else{
        $('#nav_scroll').hide();
    }
}

function c(srcelement)
{
    var targetid,srcelement,targetelement;
    targetid=srcelement.id+"d";
    targetelement=document.getElementById(targetid);

    if (targetelement.style.display=="none")
    {
        srcelement.className="active";
        targetelement.style.display='';
    }
    else
    {
        srcelement.className="";
        targetelement.style.display="none";
    }
}

$(document).ready(function(e) {
    b();
    $(window).scroll(function(){
        b();
    });

    $("#gotop_hover").hide();
    $('#gotop').click(function(){
        $('html,body').animate({scrollTop:$('#top').offset().top},500);
        return false;
    });
    $('#gotop').hover(function(){
        $("#gotop_hover").show();
    },function(){
        $("#gotop_hover").hide();
    });
    $("#fenlei_hover").hide();
    $('#fenlei').click(function(){
        $('html,body').animate({scrollTop:$('#fenlei_top').offset().top},500);
        return false;
    });
    $('#fenlei').hover(function(){
        $("#fenlei_hover").show();
    },function(){
        $("#fenlei_hover").hide();
    });


    /************* 热门 ******************/

    $("#hot_more").hide();
    $(".hot_t").click(function(){
        $("#hot_more").show();
    });
    $("#hot_more").hover(function(){},function(){
        $(this).hide();
    });


    /************* 旅游攻略 ******************/
    $('.captionfull').hover(function(){
        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'170px'},{queue:false,duration:160});
    });

    /********************** search页面 **********************/

    $(".open_close").on("click",function(){
        if($(this).attr("data-status")==1){
            $(this).attr("data-status",2);
            $(this).siblings("dd").addClass("dd_height");
            $(this).addClass("active");
        }else{
            $(this).attr("data-status",1);
            $(this).siblings("dd").removeClass("dd_height");
            $(this).removeClass("active");
        }

    });


    /************* 景点 ******************/
    $('.caption').hover(function(){
        $(".li_active", this).stop().animate({top:'0px'},{queue:false,duration:160});
    }, function() {
        $(".li_active", this).stop().animate({top:'165px'},{queue:false,duration:160});
    });


    /************* 预订页面 ******************/
    $("#show-state").hide();
    $(".boder-bd-right").hover(function(){
        $("#show-state").show();
    },function(){
        $("#show-state").hide();
    });


    var expanded1 = true;
    var expanded2 = true;
    $(".click_span1").on("click",function(){
        if(expanded1){
            $(this).next("em").addClass("this_em");
            $("#list_info1").addClass("info_show");
        }else{
            $(this).next("em").removeClass("this_em");
            $("#list_info1").removeClass("info_show");
        }
        expanded1 = !expanded1;
    });
    $(".click_span2").on("click",function(){
        if(expanded2){
            $(this).next("em").addClass("this_em");
            $("#list_info2").addClass("info_show");
        }else{
            $(this).next("em").removeClass("this_em");
            $("#list_info2").removeClass("info_show");
        }
        expanded2 = !expanded2;
    });


    $("#insurance").hide();
    $("#insurance_input").click(function(){
        $(this).each(function(){
            if($(this).attr("checked")=="checked"){
                $("#insurance").show();
            }
            else{
                $("#insurance").hide();
            }
        });
    });





});



