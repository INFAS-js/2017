function toInfoPage(){
	$("#lecture-form").css("pointer-events","none");
	$("#lecture-form").css("opacity","0");
	$("#club-form").css("pointer-events","none");
	$("#club-form").css("opacity","0");
	$("#title").css("top","-100vh");
	$(".item>div").css("opacity","1");
	$("#divide").css("left","calc( 50% - 5px )");
	$(".item>div").css("pointer-events","initial");
	$("#club-info").css("left","50%");
	$("#club-info").css("width","50%");
	$("#lecture-info").css("left","0");
	$("#lecture-info").css("width","50%");
	$("#back-title-button>button").css("bottom","calc( 100vh - 12px - 1em )");
	$("#back-lecture-button").css("left","100%");
	$("#back-club-button").css("right","100%");
}
function toTitlePage(){
	$("#title").css("top","0");
}
function toLecturePage(){
	$(".item>div").css("opacity","0");
	$("#club-info").css("left","100%");
	$("#lecture-info").css("width","100%");
	$("#divide").css("left","100%");
	$(".item>div").css("pointer-events","none");
	$("#back-title-button>button").css("bottom","100vh");
	$("#back-lecture-button").css("left","calc( 100% - 12px - 1em )");
	$("#lecture-form").css("pointer-events","initial");
	$("#lecture-form").css("opacity","1");
}
function toClubPage(){
	$(".item>div").css("opacity","0");
	$("#club-info").css("width","100%");
	$("#club-info").css("left","0");
	$("#lecture-info").css("left","-50%");
	$("#divide").css("left","-10px");
	$(".item>div").css("pointer-events","none");
	$("#back-title-button>button").css("bottom","100vh");
	$("#back-club-button").css("right","calc( 100% - 12px - 1em )");
	$("#club-form").css("pointer-events","initial");
	$("#club-form").css("opacity","1");
}