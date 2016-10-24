

/************ 内容页中锚点跳转 **************/

function anchorGoWhere(nav,yangshi,sudu,toubu){
    a=nav+" a";
    $(a).click(function(){
        tis=$(this);
        o=tis.attr("href");
        $("html,body").animate({scrollTop: $(o).offset().top-toubu}, sudu);
        return false;
    });
    $(window).scroll(function() {
        t = $(this).scrollTop();
        $(a).each(function(){
            d=$(this).attr("href");
            y = $(d).offset().top;
            jl=t-y;
            $(this).removeClass(yangshi);
            if (-20<jl && jl<$(d).height()){
                $(this).addClass(yangshi);
            }
        });
    });
}


$(document).ready(function(){



    /****************首页顶部幻灯*********************/

    var lb = $("#limit-buy"),
        lb_cur = 1,
        lbp_w = lb.find(".products").width();
    lb_timer = null;
    t = 1;
    function showLimitBuyProducts(){
        if(lb_cur < 1){
            lb_cur = 4;
        } else if(lb_cur > 4){
            lb_cur = 1;
        }
        $("#J-lbcp").html(lb_cur);
        var products = $("#limit-buy .products").hide().eq(lb_cur-1).show(),
            ta = products.find("textarea");

        if(ta.length){
            products.html(ta.val());
        }
    }
    lb_timer = setInterval(function(){
        lb_cur++;
        showLimitBuyProducts();
    }, 4000);

    $("#J-lbn .prev, #J-lb .btn-prev").click(function(){
        lb_cur--;
        showLimitBuyProducts();
    });
    $("#J-lbn .next, #J-lb .btn-next").click(function(){
        lb_cur++;
        showLimitBuyProducts();
    });
    $("#J-lb").hover(function(){
        clearInterval(lb_timer);
        lb_timer = null;
        $("#J-lb .btn-prev, #J-lb .btn-next").show();
    }, function(){
        lb_timer = setInterval(function(){
            lb_cur++;
            showLimitBuyProducts();
        }, 10000);

    });


    /**************选项卡*****************/

    $(".newtab li").eq(0).addClass("tcur");
    $(".tabContent .tcb").eq(0).show("normal");
    $(".newtab li").click(function(){
        var index = $(".newtab li").index(this);
        $(".tabContent .tcb").eq(index).show("normal").siblings(".tcb").hide("normal");
        $(this).addClass("tcur").siblings("li").removeClass("tcur");
    });

    /******** 疆外旅游 *********/

    $(".jw_top li").hover(function(){
        $(this).children(".jw_lg").hide();
    },function(){
        $(this).children(".jw_lg").show();
    });


    /*********** 内容页幻灯片 ************/

    var slid = $('ul.slide_box li'),controls = $('ul.bx-controls a');
    slid.addClass('none');
    slid.eq(0).removeClass('none');

    var slideindex = 0;
    function switchi() {
        if(slideindex == slid.length - 1){
            slideindex = 0;
        }else {
            slideindex = slideindex + 1;
        }
        slid.addClass('none');
        slid.eq(slideindex).removeClass('none');
        controls.removeClass('actives');
        controls.eq(slideindex).addClass('actives');
    }

    var timer = setInterval(switchi, 3000);

    function options(indexs) {
        slid.addClass('none');
        slid.eq(indexs).removeClass('none');
        controls.removeClass('actives');
        controls.eq(indexs).addClass('actives');
    }

    $('a.options').click(function(){
        var drec = $(this).data('drec');
        if(drec == 'pre') {
            if(slideindex == 0) {
                slideindex = 3;
            }else {
                slideindex = slideindex - 1;
            }
        }else {
            if(slideindex == 3) {
                slideindex = 0;
            }else {
                slideindex = slideindex + 1;
            }
        }
        clearInterval(timer);
        options(slideindex);
        timer = setInterval(switchi, 3000);
    });

    $('ul.bx-controls li').hover(function(){
        slideindex = $(this).index();
        clearInterval(timer);
        options(slideindex);
    },function(){
        timer = setInterval(switchi, 3000);
    });


    /******** 新疆旅游 *********/

    $(".xj_tabsort_con").children(".xj_tabsort_title").siblings(".xj_tabsort_list").css({"display":"none"});
    $(".xj_tabsort_con").hover(function(){
        $(this).children(".xj_tabsort_title").siblings(".xj_tabsort_list").css({"display":"block"});
    },function(){
        $(this).children(".xj_tabsort_title").siblings(".xj_tabsort_list").css({"display":"none"});
    });
    /******** 新疆旅游 *********/

    $("#i_more").click(function(){
        $(this).siblings(".i_more").removeClass("i_more_hidden").addClass("i_more_show");
    });
    $("#span_more").click(function(){
        $(this).parents(".i_more").removeClass("i_more_show").addClass("i_more_hidden");
    });
    $(".i_more li a").click(function(){
       $("#i_name").html($(this).text());
    });

    $(".travel_select_more").hide();
    $(".travel_select_conleft").hover(function(){
        $(this).parents(".travel_select_con").siblings(".travel_select_more").show();
    });
    $(".travel_select_more").hover(function(){
    },function(){
        $(this).hide();
    });
    $("#travel_more").click(function(){
        $(".travel_select_more").hide();
    });
    $(".travel_agn").click(function(){
       $(".travel_select_more").hide();
       $("#travel_name").html($(this).text());
       $("#travel_phone").html($(this).siblings(".travel_phn").text());
       $("#travel_address").html($(this).siblings(".travel_adn").text());
    });

    var con_offset= $(".content_body").offset().top;
    var con_height =$(".content_body").height();
    var offsetTop = $("#goType").offset().top;
    $(window).scroll(function(){
        var thisTop = $(document).scrollTop();
        var win_height= $(window).height();
        var now_height= con_offset+con_height-thisTop;
        if(thisTop>offsetTop && now_height>win_height){
            $("#goType").css({
                "position":"fixed",
                "top":"0",
                "width":"170"
            });
        }else{
            $("#goType").css({
                "position":"absolute",
                "top":"",
                "width":"170"
            });
        }

    });
    anchorGoWhere("#goType","thisclass",500,19);

    $(".day_other").hide();
    $(".day_other").eq(0).show();
    $(".dayType").click(function(){
        $("#goType").find(".day_other").hide();
        $(this).siblings().show();
    });

    $(".jd_other").hide();
    $(".jd_more").click(function(){
        $(this).siblings().show();
    });

    $(".day_other a").hover(function(){
       $(this).children().removeClass("day_other_span");
       $(this).children().addClass("now_span");
    },function(){
        $(this).children().removeClass("now_span");
        $(this).children().addClass("day_other_span");
    });
    $(".jd_other a").hover(function(){
        $(this).children().removeClass("jd_other_span");
        $(this).children().addClass("jd_now_span");
    },function(){
        $(this).children().removeClass("jd_now_span");
        $(this).children().addClass("jd_other_span");
    });


    $("#nav_scroll").hide();
    $(window).scroll(function(){
       if($(this).scrollTop()>400){
           $("#nav_scroll").fadeIn();
       } else{
           $("#nav_scroll").fadeOut();
       }
    });
    $(".nav_xcts").click(function(){
        $('html,body').animate({scrollTop:$('#xcts').offset().top},500);
        return false;
    });
    $(".nav_xcnr").click(function(){
        $('html,body').animate({scrollTop:$('#xcnr').offset().top},500);
        return false;
    });
    $(".nav_fysm").click(function(){
        $('html,body').animate({scrollTop:$('#fysm').offset().top},500);
        return false;
    });
    $(".nav_wxts").click(function(){
        $('html,body').animate({scrollTop:$('#wxts').offset().top},500);
        return false;
    });
    $(".nav_tydp").click(function(){
        $('html,body').animate({scrollTop:$('#tydp').offset().top},500);
        return false;
    });
    $(".nav_fhdb").click(function(){
        $('html,body').animate({scrollTop:$('#fhdb').offset().top},500);
        return false;
    });



});

