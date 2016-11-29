var pages = ["title","goal","groups","form"];
var groups = ["title","place","create","finance","agenda","sales","PR","record"];
var groupused = [0,0,0,0,0,0,0,0];
var curpage = 0;
var pageAmount = pages.length;
var space = 2;
var atUpper = 1;
var min;
var buttonPercent = 10;
var groupColor = [0,0,100,200,40,150,270,320];
function resize(){
	if (document.documentElement.clientHeight > document.documentElement.clientWidth){
		min = document.documentElement.clientWidth;
	}
	else min = document.documentElement.clientHeight;
	document.getElementById('group-title').style.fontSize = min/12+"px";
	document.getElementById('form-title').style.fontSize = min/16+"px";
	for(let i=1;i<8;i++){
		document.getElementById('group-'+groups[i]).style.fontSize = min/16+"px";
		document.getElementById(groups[i]+'-page').style.fontSize = min/40+"px";
		document.getElementById(groups[i]+'-name').style.fontSize = min/16+"px";
	}
	document.body.style.fontSize = Math.sqrt(min)/1.6+"px";
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
		(100-buttonPercent)*(atUpper)+"vh";
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
	if(a==0) {
		document.getElementById('leftbutton').style.opacity = 0;
		document.getElementById('updownbutton').style.opacity = 0;
	}
	else {
		document.getElementById('leftbutton').style.opacity = 1;
		document.getElementById('updownbutton').style.opacity = 1;
	}
	if(a==pageAmount-1) {
		document.getElementById('rightbutton').style.opacity = 0;
		document.getElementById('updownbutton').style.opacity = 0;
	}
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
	if(atUpper&&curpage>0&&curpage<3){
		verticalPosition(-100+space,space,0,1);
	}
	else{
		verticalPosition(0,100-space,1,0);
	}
})
document.addEventListener('keydown',function(){
	switch(event.key){
		case "ArrowDown":
			if(curpage>0&&curpage<3)verticalPosition(-100+space,space,0,1);
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
for(let i=1;i<8;i++){
	document.getElementById(groups[i]+'-page').style.opacity = "0";
	document.getElementById(groups[i]+'-page').style.transform = "scale(0.5)";
	document.getElementById(groups[i]+'-page').style.transition =
		"all 500ms cubic-bezier(0.17, 0.84, 0.44, 1)";
	document.getElementById(groups[i]+'-color').style.transition =
		"all 500ms cubic-bezier(0.17, 0.84, 0.44, 1), fontSize none";
	document.getElementById(groups[i]+'-color').style.backgroundColor =
		"hsla("+groupColor[i]+",100%,92%,0.85)";
	document.getElementById('group-'+groups[i]).addEventListener('click',function(){
		document.getElementById(groups[i]+'-page').style.opacity = "1";
		document.getElementById(groups[i]+'-page').style.transform = "scale(1)";
		document.getElementById(groups[i]+'-page').style.pointerEvents = "auto";
	});
	document.getElementById(groups[i]+'-page').addEventListener('click',function(){
		document.getElementById(groups[i]+'-page').style.opacity = "0";
		document.getElementById(groups[i]+'-page').style.transform = "scale(0.5)";
		document.getElementById(groups[i]+'-page').style.pointerEvents = "none";
	});
	document.getElementById('group-'+groups[i]).style.backgroundColor = 
		"hsla("+groupColor[i]+",100%,92%,0.6)";
	document.getElementById(groups[i]+'-page').style.backgroundColor = 
			"hsla("+groupColor[i]+",100%,92%,0.5)";
	document.getElementById('group-'+groups[i]).addEventListener('mouseenter',function(){
		document.getElementById('group-'+groups[i]).style.backgroundColor = 
			"hsla("+groupColor[i]+",100%,92%,1)";
	});
	document.getElementById('group-'+groups[i]).addEventListener('mouseleave',function(){
		document.getElementById('group-'+groups[i]).style.backgroundColor = 
			"hsla("+groupColor[i]+",100%,92%,0.6)";
	});
}
window.onload = function() {
	resize();
	document.getElementById("loading-page").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("loading-page").style.display = "none";
	}, 1500);
}
