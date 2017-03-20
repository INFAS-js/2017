if(!String.prototype.includes) {
	String.prototype.includes = function() {
         'use strict';
         return String.prototype.indexOf.apply(this, arguments) !== -1;
     };
 }
var isIE = !(navigator.userAgent.includes("Chrome")||
			navigator.userAgent.includes("Opera")||
			navigator.userAgent.includes("Safari")||
			navigator.userAgent.includes("Edge")||
			navigator.userAgent.includes("Firefox")||
			navigator.userAgent.includes("AppleWebKit"));
setTimeout(function(){
	$("#titlepic").css("left","0");
},50);
$(window).load(function(){
	if(isIE){
		$("#titlepic").css("width","90%");
		setTimeout(function(){
			$("#loading").html(
				"<span>Please browse this webpage with another browser.<br><span class=\"preserve\">Google Chrome</span> is highly recommended.</span>");
			setTimeout(function(){
				$("#loading>span").css("opacity","1");
			},50);
		},800);
		return;
	}
	setTimeout(function(){
		resize();
		$("#titlepic").css("border-bottom","solid 10px #AAA");
		$("#titlepic").css("top","0");
	},1600);
	setTimeout(function(){
		$("body").css("overflow-y","initial");
		$("#loading").css("opacity","0");
		$("#titlepic").css("position","initial");
		resize();
	},2400);
	setTimeout(function(){
		$("#loading").css("display","none");
		resize();
	},3200);
	$(window).resize(resize);
});
function resize(){
	if($("body").innerWidth()>800)
		$("#titlepic").css("width","90%");
	else
		$("#titlepic").css("width","135%");
}
function toLecturePage(){
	$("#form").attr("src","https://goo.gl/forms/QLJzIX3xlCWUfnc92");
	$("#form").css("display","initial");
	$('#view').stop().animate({
       scrollTop: $("#form").offset().top-$("#title").offset().top
    }, 400);
}
function toClubPage(){
	$("#form").attr("src","https://goo.gl/forms/7oSZCwwI3qcTwcBW2");
	$("#form").css("display","initial");
	$('#view').stop().animate({
       scrollTop: $("#form").offset().top-$("#title").offset().top
    }, 400);
}
function toInfo(){
	if($("body").innerWidth()>800)
		target = $("#info").offset().top
	else
		target = $("#info-narrow").offset().top
	$('#view').stop().animate({
       scrollTop: target-$("#title").offset().top
    }, 400);
}
console.log(navigator.userAgent);