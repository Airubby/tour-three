//页头左边出发城市
j(document).ready(function () {
    var cookie_info = j.cookie("DepartureCity");
    if (!cookie_info) {
        depart_show();
    }else{
        depart_hide();
    }

   /* if (cQuery.browser.isIPad) {
        j(".top_info .depart_city .chose").click(function () {
            if (j(".pop_depart_city").is(":visible")) {
                j(".pop_depart_city").hide();
            } else {
                j(".pop_depart_city").show();
            }
            return false;
        });
    }
    else {
        j(".top_info .depart_city .chose").mouseover(function () {
            j(".pop_depart_city").show();
        });
        j(".top_info .depart_city .chose").mouseout(function () {
            j(".pop_depart_city").hide();
        });
    }*/

/*    j(".pop_depart_city > b").click(function () {
        j(".pop_depart_city").hide();
        return false;
    });

    j("body>div").click(function () {
        //出发城市浮层
        j(".pop_depart_city").hide();
        //旅客信息填写下拉框
        j("#formc .mod_option").hide();
    });*/

    j("#mask_close").click(depart_hide);


});

//跳转登录，并写下回来的url进入cookie


//改变出发城市
/*function changeCity(cityId) {
    var wulmq = 1;
    if (cityId == wulmq) {
        document.location.href = "";
    }
    else {
        j.cookie("DepartureCity", cityId, { expires: 7 });
        window.location.reload(true);
    }
}*/
function changeCity(cityId){
    if(cityId!=null){
        document.location.href = "";
        j.cookie("DepartureCity",cityId);
    }
}
//改变出发城市2
function changeCity2(cityId) {
    changeCity(cityId);
}
//出发城市mask
function depart_show() {
    var top = j("#mask_content_depart").height() / 2;
    var left = j("#mask_content_depart").width() / 2;
    j("#mask_content_depart").css({ "top": "50%", "margin-top": -top + "px" });
    j("#mask_content_depart").css({ "left": "50%", "margin-left": -left + "px" });
    j('#mask_bg').show();
    j('#mask_content_depart').show();
}
function depart_hide() {
    j('#mask_bg').hide();
    j('#mask_content_depart').hide();
}

// 数值显示为千分位
/*var formatToCurrency = function (num) {
    var numStr = num.toString();
    var re = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
    numStr = numStr.replace(re, "$1,");
    return numStr;
};*/
/**Parses string formatted as YYYY-MM-DD to a Date object.
* If the supplied string does not match the format, an
* invalid Date (value NaN) is returned.
* @param {string} dateStringInRange format YYYY-MM-DD, with year in
* range of 0000-9999, inclusive.
* @return {Date} Date object representing the string.
*/
/*

function parseISO8601(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
       date = new Date(NaN), month,
       parts = isoExp.exec(dateStringInRange);

    if (parts) {
        month = +parts[2];
        date.setFullYear(parts[1], month - 1, parts[3]);
        if (month != date.getMonth() + 1) {
            date.setTime(NaN);
        }
    }
    return date;
}

*/
/**Parses string formatted as YYYY-MM-DD 或者 YYYY-M-D
*//*

function parseDate(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d?\d)-(\d?\d)\s*$/,
       date = new Date(NaN), month,
       parts = isoExp.exec(dateStringInRange);

    if (parts) {
        month = +parts[2];
        date.setFullYear(parts[1], month - 1, parts[3]);
        if (month != date.getMonth() + 1) {
            date.setTime(NaN);
        }
    }
    return date;
}
*/

//cookie操作,http://hi.baidu.com/bareearthling/item/51c6c3ecf45192adc00d7540
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '; path=/';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

////删除cookie
//function deleteCookie(name) {
//    deleteCookie(name, '', { expires: -1 });
//}

//删除cookie with options
function deleteCookie(name, options) {
    options = options || { expires: -1 };

    j.cookie(name, '', options);
}

/*function addDate(date, days) {
    var result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    result.setDate(result.getDate() + days);
    return result;
}

function dateToStr(date) {
    var padZero = function (i) {
        return (i < 10) ? "0" + i : "" + i;
    };
    var strDate = date.getFullYear() + '-' + padZero(date.getMonth() + 1) + '-' + padZero(date.getDate());
    return strDate;
}*/


/*

// 修改按钮变成Disable
function ButtonDisable(btnId, loadText, parentCss) {
    var btn = j("#" + btnId);
    btn.attr("disabled", true);            //禁止重复点   add by luzm
    if (arguments.length == 1) {
        loadText = "正在提交中";
        parentCss = "btn_next_disable"
    }
    btn.html(loadText);
    btn.parent().removeClass();
    btn.parent().addClass(parentCss);
    btn.unbind();                    //移除所有事件
}

function ButtonDisable_B(btnId, loadText) {
    var btn = j("#" + btnId);
    btn.attr("disabled", true);            //禁止重复点   add by luzm
    btn.html(loadText);
    btn.removeClass("book_btn");
    btn.addClass("book_btn_disable");
    //btn.unbind();                    //移除所有事件
}

function ButtonEnable_B(btnId, loadText) {
    var btn = j("#" + btnId);
    btn.attr("disabled", false);            //禁止重复点   add by luzm
    btn.html(loadText);
    btn.addClass("book_btn");
    btn.removeClass("book_btn_disable")
    //btn.unbind();                    //移除所有事件
}*/
