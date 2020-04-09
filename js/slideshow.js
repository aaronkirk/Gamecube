
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

window.addEventListener('DOMContentLoaded', function (event) {
	initSlideshow();
	getLocation();
});


// Slideshow //

var currentImg;
var imgArray;

function initSlideshow() {
	currentImg = 0;
	imgArray = getChildrenById('slide-img');
	displaySlideButtons(true);
	fadeImage(currentImg);
	setInterval(function () { plusSlides(1); }, 5000);
}


function fadeImage(x) {
	for (var i = 0; i < imgArray.length; i++) {
		imgArray[i].style.opacity = 0;
	}
	imgArray[x].style.opacity = 1;
}


function displaySlideButtons(disp) {
	var buttons = document.getElementsByClassName('slide-buttons');
	for (var i = 0; i < buttons.length; i++) {
		if (disp == true) {
			buttons[i].style.display = 'block';
		}
		else {
			buttons[i].style.display = 'none';
		}
	}
}

//Move back and forawrd through the slideshow
function plusSlides(x) {
	console.log('Move index by: ', x)
	currentImg = currentImg + x;
	if (currentImg == imgArray.length) {
		currentImg = 0;
	}
	else if (currentImg < 0) {
		currentImg = imgArray.length - 1;
	}
	console.log('Moved index to: ', currentImg)
	fadeImage(currentImg);
}


function getChildrenById(x) {
	return document.getElementById(x).children;
}

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Task 6. Include interactive pages created using HTML5 APIs to Collect user location data //
	//////////////////////////////////////////////////////////////////////////////////////////////

//Use the HTML GeoLocation API, check for error and display it 
function getLocation() {
		var x = document.getElementById("user-location");
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}

//Print the location data to the webpage HTML
	function showPosition(position) {
	var x = document.getElementById("user-location");
		x.innerHTML = "Latitude: " + position.coords.latitude +
			"<br>Longitude: " + position.coords.longitude;
		}

//Handle errors that might occur if the user denies permission for browser to acces location data, or if the broswer can not gather the information
//Displays a message to the user in these cases
	function showError(error) {
		var x = document.getElementById("user-location");
		switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		}
	}

