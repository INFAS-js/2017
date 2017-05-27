function page(a){
	clear();
	document.getElementById(a).style.display = "block";
}
function clear(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("agenda").style.display = "none";
	document.getElementById("booth").style.display = "none";
	document.getElementById("trans").style.display = "none";
	document.getElementById("sponsor").style.display = "none";
	document.getElementById("history").style.display = "none";
}