/**
===================================================================================
= Blurrify v0.1 - CSS Motion Blur
=
= @2013 - Jean Lucas de Carvalho (@JLCarv)
===================================================================================	 

Blurrify is a jQuery Plugin based on Ross McMillan (@RossMcMillanNet) Motion Blur
script (Check ir out - http://rmcmillan.net/labs/motionblur).

======================
= Quick setup
======================

All we need to do is activate the Blurrify plugin.

$(document).ready(function(){
	$('.motion').blurrify();
});

======================
= Advanced Options
======================

$(document).ready(function(){
	$('.motion').blurrify({
		blur: 10,				// Amount of blur
		length: 15				// Size of blur
	});
});


*/

(function($){
	var obj = null;
	var defaults = {
		'blur': 10,
		'length': 15
	};
	
	var scrollPos1 = null;
	var scrollPos2 = 0;
	var scrollDis = 0;
	var scrollTime1 = 0;
	var scrollTime = 0;
	var scrollSpeed = 0;
	
	var scrolling = false;

	var opacity = 1;
	var textPos = 0;

    $.fn.blurrify = function(options){
		var obj = this;		
		var settings = $.extend( {}, defaults, options );
		
		shadowBlur = settings.blur;
		shadowLength = settings.length;
		
		origText = obj.first();
		body = $("body").first();
		body.css("height", origText.outerHeight());
	
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
									window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
		window.requestAnimationFrame = requestAnimationFrame;
	
		setTimeout(function(){
			origText.css("-webkit-transform","translate3d(0,"+ -window.pageYOffset +"px,0)");
		},50);

        window.onscroll = function (oEvent) {
			if(scrollPos1 == null){
				scrollPos1 = window.pageYOffset;
				scrollTime1 = new Date().getTime();
				return;
			}
		
			scrollPos2 = window.pageYOffset;
			scrollTime = new Date().getTime() - scrollTime1;
		
			scrollDis = scrollPos2 - scrollPos1;
			scrollDis = (scrollDis < 0) ? scrollDis * -1 : scrollDis;
		
			scrollSpeed = scrollDis / scrollTime;
		
			scrollPos1 = scrollPos2;
			scrollTime1 = new Date().getTime()
		
			opacity = 1 - (scrollSpeed/10);
		
			if(!scrolling){
				requestAnimationFrame(step);
			}
			
		
			scrolling = true;
		}
		
		var step = function (timestamp) {
			if(scrolling){
				requestAnimationFrame(step);
			}
		
			xDif = parseInt(scrollPos2 + textPos)
		
			textPos -= (xDif*.1);
			opacity = (xDif < 0) ? 1-((xDif * -1)/200) : 1-(xDif/200);
		
			if(xDif > 0) {
				upOrDown = 1
			} else {
				upOrDown = -1
			}
		
			textShadow =    "0px "+ (0*upOrDown) * shadowLength +"px "+shadowBlur+"px rgba(255,255,255,"+ (1-opacity)/2 +"),"+ 
							"0px "+ (1*upOrDown) * shadowLength +"px "+shadowBlur+"px rgba(255,255,255,"+ (1-opacity)/4 +"),"+ 
							"0px "+ (2*upOrDown) * shadowLength +"px "+shadowBlur+"px rgba(255,255,255,"+ (1-opacity)/8 +"),"+ 
							"0px "+ (3*upOrDown) * shadowLength +"px "+shadowBlur+"px rgba(255,255,255,"+ (1-opacity)/16 +"),"+ 
							"0px "+ (4*upOrDown) * shadowLength +"px "+shadowBlur+"px rgba(255,255,255,"+ (1-opacity)/32 +")";
		
		
			origText.css("color","rgba(255,255,255,"+ opacity +")");
			origText.css("transform","translate3d(0,"+ textPos +"px,0)");
			origText.css("-webkit-transform","translate3d(0,"+ textPos +"px,0)");
			origText.css("text-shadow",textShadow);
		
			if(xDif == 0){
				scrolling = false;
			}
		}
		
		requestAnimationFrame(step);
    };
	
})(jQuery);