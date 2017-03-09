setTimeout(function(){
	$("#titlepic").css("left","0");
},50);
$(window).load(function(){
	setTimeout(function(){
		$("#titlepic").css("width","90%");
		$("#titlepic").css("border-bottom","solid 10px #AAA");
		$("#titlepic").css("top","0");
		resize();
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
	//$("#view").css("height","calc( 100vh"));
}
resize();
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
	$('#view').stop().animate({
       scrollTop: $("#info").offset().top-$("#title").offset().top
    }, 400);
}