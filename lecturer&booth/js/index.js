setTimeout(function(){
	$("#titlepic").css("left","0");
},50);
$(window).load(function(){
	setTimeout(function(){
		resize();
		$("#titlepic").css("border-bottom","solid 10px #AAA");
		$("#titlepic").css("top","0");
	},1800);
});
setTimeout(function(){
	$("body").css("overflow-y","initial");
	$("#loading").css("opacity","0");
	$("#titlepic").css("position","initial");
	resize();
},2600);
setTimeout(function(){
	$("#loading").css("display","none");
	resize();
},3400);
$(window).resize(resize);
//$("#titlepic").load(function(){})
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