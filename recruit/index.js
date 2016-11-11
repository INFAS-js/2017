var pages = ["title","goal","groups","form"];
var curpage = 0;
var pageAmount = pages.length;
var space = 2;
var atUpper = 1;
var min;
var buttonPercent = 10;
function resize(){
	if (document.documentElement.clientHeight > document.documentElement.clientWidth){
		min = document.documentElement.clientWidth;
	}
	else min = document.documentElement.clientHeight;
	document.getElementById('leftbutton').style.width = 
		min*buttonPercent/100+"px";
	document.getElementById('leftbutton').style.height = 
		min*buttonPercent/100+"px";
	document.getElementById('rightbutton').style.width = 
		min*buttonPercent/100+"px";
	document.getElementById('rightbutton').style.height = 
		min*buttonPercent/100+"px";
	document.getElementById('updownbutton').style.width = 
		min*buttonPercent/100+"px";
	document.getElementById('updownbutton').style.height = 
		min*buttonPercent/100+"px";
	document.getElementById('leftbutton').style.top = 
		"calc( 50vh - "+min*buttonPercent/200+"px )";
	document.getElementById('rightbutton').style.top = 
		"calc( 50vh - "+min*buttonPercent/200+"px )";
	document.getElementById('updownbutton').style.left = 
		"calc( 50vw - "+min*buttonPercent/200+"px )";
	document.getElementById("updownbutton").style.top = 
		"calc( 100vh - "+min*buttonPercent*(1-!atUpper)/100+"px )";
	var titleLogoHeight = 
		document.getElementById("title-logo").clientHeight;
	var titleTextHeight = 
		document.getElementById("title-text").clientHeight;
	var goalTextHeight = 
		document.getElementById("goal-text").clientHeight;
	var pageContentHeight = 
		document.getElementsByClassName("page-content")[0].clientHeight;
	var titleTextCenter = pageContentHeight-titleLogoHeight-titleTextHeight;
	var goalTextCenter = pageContentHeight-goalTextHeight;
	document.getElementById("title-text").style.marginTop = 
		"calc( ( "+titleTextCenter+"px - 20vh ) / 2 )";
	document.getElementById("goal-text").style.marginTop = 
		"calc( ( "+goalTextCenter+"px - 20vh ) / 2 )";
}
window.onresize = function(event) {
    resize();
};
function calcLeft(a,b){
	if(b<=a){
		return space*(pageAmount-1)*(a-b)/(pageAmount-b-1);
	}
	else{
		return -100+space*(pageAmount-1)*((a+1)/b+1);
	}
}
function recalcPosition(a){
	for(i=0;i<pageAmount-1;i++){
		document.getElementById(pages[i]).style.left = calcLeft(i,a)+"vw";
	}
	if(a==0) document.getElementById('leftbutton').style.opacity = 0;
	else document.getElementById('leftbutton').style.opacity = 1;
	if(a==pageAmount-1) document.getElementById('rightbutton').style.opacity = 0;
	else document.getElementById('rightbutton').style.opacity = 1;
}
document.getElementById('leftbutton').addEventListener('click',function(){
	if (curpage>0){
		curpage--;
		recalcPosition(curpage);
	}
})
document.getElementById('rightbutton').addEventListener('click',function(){
	if (curpage<pageAmount-1){
		curpage++;
		recalcPosition(curpage);
	}
})
function verticalPosition(a,b,c,d){
	if(atUpper!=c){
		document.getElementById("scrollbox").style.top = a+"vh";
		document.getElementById("photos2016").style.top = b+"vh";
		document.getElementById("updownbuttonimg").style.transform = "scaleY("+(c*2-1)+")";
		document.getElementById("updownbutton").style.top = (100-buttonPercent)*(1-d)+"vh";
		atUpper=c;
	}
}
document.getElementById('updownbutton').addEventListener('click',function(){
	if(atUpper){
		verticalPosition(-100+space,space,0,1);
	}
	else{
		verticalPosition(0,100-space,1,0);
	}
})
document.addEventListener('keydown',function(){
	switch(event.key){
		case "ArrowDown":
			verticalPosition(-100+space,space,0,1);
			break;
		case "ArrowUp":
			verticalPosition(0,100-space,1,0);
			break;
		case "ArrowLeft":
			if (curpage>0 && atUpper){
				curpage--;
				recalcPosition(curpage);
			}
			break;
		case "ArrowRight":
			if (curpage<pageAmount-1 && atUpper){
				curpage++;
				recalcPosition(curpage);
			}
			break;
	}
})
window.onload = function() {
	resize();
	document.getElementById("loading-page").style.display = "none";
}