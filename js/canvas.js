
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

// Call the fucntion once the page is loaded
window.addEventListener('DOMContentLoaded', function (event) {
	createCanvas();
});


function createCanvas() {
	console.log("In Canvas function");
	// Get the Canvas element in HTML
	var c = document.getElementById("my-canvas");
	var ctx = c.getContext("2d");

	// Create gradient
	var grd = ctx.createLinearGradient(0, 0, 400, 0);
	// Add colours
	grd.addColorStop(0, "lightgray");
	grd.addColorStop(1, "purple");

	// Fill canvas with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 1000, 1000);
}