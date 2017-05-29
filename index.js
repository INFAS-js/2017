if(!String.prototype.includes) {
	String.prototype.includes = function() {
		'use strict';
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
}
console.log(navigator.userAgent);

var isIE = !(navigator.userAgent.includes("Chrome")||
			navigator.userAgent.includes("Opera")||
			navigator.userAgent.includes("Safari")||
			navigator.userAgent.includes("Edge")||
			navigator.userAgent.includes("Firefox")||
			navigator.userAgent.includes("AppleWebKit"));
if(isIE){
	document.getElementById("DontUseIE").style.display = "block";
}
window.onload = function() {
	document.getElementById("load").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("load").style.display = "none";
	}, 400);
}

var maploaded=0;
function page(a){
	clear();
	document.getElementById(a).style.display = "block";
	if(a == "trans" && !maploaded){loadmap();maploaded = 1;}
}
function clear(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("agenda").style.display = "none";
	document.getElementById("booth").style.display = "none";
	document.getElementById("trans").style.display = "none";
	document.getElementById("sponsor").style.display = "none";
	document.getElementById("history").style.display = "none";
}

function loadmap(){
	var map = L.map('map').setView([24.7775,121.0175], 16);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	L.marker([24.77676,121.01711]).addTo(map)
	    .bindPopup('新竹市東區介壽路300號')
	    .openPopup();
}