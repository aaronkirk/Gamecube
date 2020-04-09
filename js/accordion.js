
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

console.log('... accordion.js has loaded ...')


$(function () {
	applyAccordion();

	// jQuery to expand the top panel in the accordion on page load
	$('#first-panel').trigger('click');

});



/////////////////////////////////////////////////////////
// Task 2. Use JavaScript with HTML 5 to Handle Events //
/////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// Task 2. Use JavaScript with HTML 5 to Extend Objects //
//////////////////////////////////////////////////////////

function applyAccordion() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	//If panels in the accprdion is already open when clicked then make height value 0/nothing. If panels are not expanded then set them to their max height
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}