

function words_deal(){
    var curLength=$("#noteTitleInput").val().length;
    if(curLength>40)
    {
        var num=$("#noteTitleInput").val().substr(0,40);
        $("#noteTitleInput").val(num);
        alert("请输入40字以内的标题！" );
    }
    else
    {
        $("#note_title_all").text(40-$("#noteTitleInput").val().length);
    }
}
function words_all(){
    var curLength=$("#contentTitle").val().length;
    if(curLength>600)
    {
        var num=$("#contentTitle").val().substr(0,600);
        $("#contentTitle").val(num);
        alert("请输入600字以内的内容！" );
    }
    else
    {
        $("#remainingCount").text(600-$("#contentTitle").val().length);
    }
}
function words_all2(){
    var curLength=$("#contentTitle1").val().length;
    if(curLength>600)
    {
        var num=$("#contentTitle1").val().substr(0,600);
        $("#contentTitle1").val(num);
        alert("请输入600字以内的内容！" );
    }
    else
    {
        $("#remainingCount1").text(600-$("#contentTitle1").val().length);
    }
}

$(document).ready(function(e) {
    YUI({
        modules: {
            'trip-calendar': {
                fullpath: 'js/trip-calendar.js',
                type    : 'js',
                requires: ['trip-calendar-css']
            },
            'trip-calendar-css': {
                fullpath: 'css/trip-calendar.css',
                type    : 'css'
            }
        }
    }).use('trip-calendar', function(Y) {

        /**
         * 弹出式日历实例
         * 将日历与指定的触发元素绑定
         * 日历可根据浏览器窗口大小，自动调整显示位置
         */
        var oCal = new Y.TripCalendar({
            //绑定日历的节点，支持选择器模式，可批量设置（必选）
            triggerNode: '.date-input'
        });

        oCal.on('dateclick', function(e) {
            this.getCurrentNode().setAttribute('value', e.date);
        });

        //显示日历时自定义事件
        oCal.on('show', function() {
            var v = this.getCurrentNode().getAttribute('value');
            this.set('date', v || new Date);
            this.set('selectedDate', v).render();
        });

    });





    $("#noteTitleInput").focus(function(){
        $(".note_title_all").css({display:"inline"});
        words_deal();
    }).blur(function(){
        $(".note_title_all").css({display:"none"});
    });

    $("#contentTitle").focus(function(){
        $(this).siblings(".contentTitleCount").css({display:"inline-block"});
        words_all();
    }).blur(function(){
        $(this).siblings(".contentTitleCount").css({display:"none"});
    });

    $("#contentTitle1").focus(function(){
        $(this).siblings(".contentTitleCount1").css({display:"inline-block"});
        words_all2();
    }).blur(function(){
        $(this).siblings(".contentTitleCount1").css({display:"none"});
    });


    var mydate = new Date();
    var y=mydate.getFullYear();
    var m=mydate.getMonth()+1;
    var d=mydate.getDate();
    var nowdate=y+"-"+m+"-"+d;
    var inputnow=$("#noteFromDate").val(nowdate).val();











});



