function page(a){
	clear();
	document.getElementById(a).style.display = "block";
	if(a == "trans"){loadmap();}
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
}