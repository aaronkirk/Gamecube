

	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

///////////////////////////////////////////////////////////
// Task 12. Create, run and monitor a Web Worker process //
///////////////////////////////////////////////////////////

console.log('... webWorkerCount.js has loaded ...')

//Create a variable 
var i = 0;

//Function to increment the variable by 1 after a set time, returns the variable
function timedCount() {
	i = i + 1;
	console.log("webworker before post");
	postMessage(i);
	console.log("webworker after post");
	setTimeout("timedCount()", 100 );
}

timedCount();