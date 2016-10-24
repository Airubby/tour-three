$(function(){


window.scrollbar=function(){
	      this.y1=0;
		  this.y2=0;
		  this.move=false;
		  this.top=0;
		  this.prop=1;
		  this.maxh=0;
		  this.top_1=0;
		  this.prop_1=1;
		  this.ifwheel=false;
		  this.getTargetEvent=function(obj,eventname,func){
			  if(obj.addEventListener){
			      obj.addEventListener(eventname,func);
			  }
			  else if(obj.attachEvent){
			      obj.attachEvent('on'+eventname,func);
			      return;
			  }
			  else{
			      obj['on'+eventname]=func;
			  }
		  }

	   }
	   scrollbar.prototype.scrollsize=function(t,s){
		   t=s==0?(t+parseInt(this.bar.css('top'),10)):t;
	       if(t<=0){
			   this.scrollbox.css('top',0);
			   this.bar.css('top',0);
			   return false;
		   }
		   else if(t>=this.maxh){
			   this.bar.css('top',this.maxh+'px');
			   this.scrollbox.css('top',-1*(this.maxh*this.prop)+'px');
			   return false;
		   }
		   else{
			   this.scrollbox.css('top',-1*(t*this.prop)+'px');
			   this.bar.css('top',t+'px');
		   }
	   }
	   scrollbar.prototype.bind=function(scrollbox,bar){
		   this.scrollbox=scrollbox;
		   this.bar=bar;
		   this.scrollbox.css('top',0);
		   this.bar.css('top',0);
		   var barp_h=bar.parent().height();
		   var bar_h=bar.height();
		   var scrollboxp_h=scrollbox.parent().height();
		   var scrollbox_h=scrollbox.height();
		   if(scrollbox_h<=scrollboxp_h){this.bar.css('display','none'); return false;}

		   var h1=parseInt(scrollboxp_h/scrollbox_h*barp_h);
		   this.bar.css('height',h1+'px');
		   this.maxh=barp_h-h1;
		   this.prop=scrollbox_h/barp_h;
		   var that=this;
		   this.scrollbox.hover(function(){that.ifwheel=true;},function(){that.ifwheel=false;})

		   if($.browser.mozilla){
			    this.getTargetEvent(window,'DOMMouseScroll',function(event){
					if(that.ifwheel==true){ 
					   event.preventDefault();
					   var t=parseInt(event.detail*40/12);
					   that.scrollsize(t,0);
					}
				})
		   }
		   else if($.browser.opera && parseFloat($.browser.version)<9.5){
			   this.getTargetEvent(window,'mousewheel',function(event){
				   if(that.ifwheel==true){ 
				       if(window.event){window.event.returnValue=false;var e=window.event;}
				  else{
					   event.preventDefault();
					   var e=event;
				   }
					   var t=parseInt(e.wheelDelta/12);
					   that.scrollsize(t,0);
				  }
			   })
		   }
		   else{
		       this.getTargetEvent(document,'mousewheel',function(event){

				   if(that.ifwheel==true){ 
				       if(window.event){window.event.returnValue=false;var e=window.event;}
				  else{
					   event.preventDefault();
					   var e=event;
				   }
					   var t=parseInt(-1*e.wheelDelta/12);
					   that.scrollsize(t,0);
				   }
			   })
		   }

		   this.bar.bind('mousedown',function(e){
			   e.preventDefault();
		       that.move=true;
			   that.y1=e.pageY;
			   that.top=parseInt(that.bar.css('top'),10);
			   that.top_1=parseInt(that.scrollbox.css('top'),10);
		   })
		   $(document).bind('mousemove',function(e){
		       if(that.move==true){
			       that.y2=e.pageY;
				   var x=that.y2-that.y1;
				   var top=x+that.top;
				   that.scrollsize(top,1);
			   }
		   }).bind('mouseup',function(e){
			   if(that.move==true){
				that.move=false;
				that.y1=that.y2=that.top=that.top_1=0;}
			  })

	  }










    var s1=new scrollbar();
    var s2=new scrollbar();
    var s3=new scrollbar();
    var s4=new scrollbar();
    var s5=new scrollbar();


    s1.bind($('.describ1'),$('.bar1'),true);
    if($('.describ1').height()<=$('.describlayer1').height()){$('.sidebar1').css('visibility','hidden');}
    $('.scrollbarbox1').hover(function(){
        $('.sidebar1').animate({'opacity':1});$('.bar1').animate({'opacity':1});
    },function(){
        $('.sidebar1').animate({'opacity':0});$('.bar1').animate({'opacity':0});
    })


    s2.bind($('.describ2'),$('.bar2'),true);
    if($('.describ2').height()<=$('.describlayer2').height()){$('.sidebar2').css('visibility','hidden');}
    $('.scrollbarbox2').hover(function(){
        $('.sidebar2').animate({'opacity':1});$('.bar2').animate({'opacity':1});
    },function(){
        $('.sidebar2').animate({'opacity':0});$('.bar2').animate({'opacity':0});
    })


    s3.bind($('.describ3'),$('.bar3'),true);
    if($('.describ3').height()<=$('.describlayer3').height()){$('.sidebar3').css('visibility','hidden');}
    $('.scrollbarbox3').hover(function(){
        $('.sidebar3').animate({'opacity':1});$('.bar3').animate({'opacity':1});
    },function(){
        $('.sidebar3').animate({'opacity':0});$('.bar3').animate({'opacity':0});
    })


    s4.bind($('.describ4'),$('.bar4'),true);
    if($('.describ4').height()<=$('.describlayer4').height()){$('.sidebar4').css('visibility','hidden');}
    $('.scrollbarbox4').hover(function(){
        $('.sidebar4').animate({'opacity':1});$('.bar4').animate({'opacity':1});
    },function(){
        $('.sidebar4').animate({'opacity':0});$('.bar4').animate({'opacity':0});
    })



    s5.bind($('.describ5'),$('.bar5'),true);
    if($('.describ5').height()<=$('.describlayer5').height()){$('.sidebar5').css('visibility','hidden');}
    $('.scrollbarbox5').hover(function(){
        $('.sidebar5').animate({'opacity':1});$('.bar5').animate({'opacity':1});
    },function(){
        $('.sidebar5').animate({'opacity':0});$('.bar5').animate({'opacity':0});
    })















});

