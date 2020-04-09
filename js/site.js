

	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

console.log('... site.js has loaded ...')



window.addEventListener('DOMContentLoaded', function (event) {
	console.log("DOM fully loaded and parsed");

});


function openNav() {
	console.log("Open Nav Clicked");
	document.getElementById("nav-menu").style.width = "100%";
}

function closeNav() {
	console.log("Close Nav Clicked");
	document.getElementById("nav-menu").style.width = "0%";
}

function resetNav() {
	console.log("Nav Reset");
	document.getElementById("nav-menu").style.width = "100%";
}



