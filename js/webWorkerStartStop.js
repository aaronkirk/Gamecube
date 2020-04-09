
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

///////////////////////////////////////////////////////////
// Task 12. Create, run and monitor a Web Worker process //
///////////////////////////////////////////////////////////

//jQuery to handle click events to start and stop the WebWorker
$(function () {
	$('#startWorker').click(startWorker);
	$('#stopWorker').click(stopWorker);
});


var w;

function startWorker() {
	if (typeof (Worker) !== "undefined") {
		console.log("Browser supports webworkers");
		if (typeof (w) == "undefined") {
			console.log("Creating Web Worker");
			w = new Worker("js/webWorkerCount.js");
			console.log("Webworker should have been created");
		}
		w.onmessage = function (event) {
			console.log(event.data);
			document.getElementById("result").innerHTML = event.data;
		};
	} else {
		document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
	}
}

//Stops the WebWorker if no WebWorker is running.
//If a user clicks the stop button when none is running, then the only action taken is to write a message to the console, this prevents a crash
function stopWorker() {

	if (typeof (w) == "undefined") {
		console.log("No Web Worker to stop");
	}
	else {
		w.terminate();
		w = undefined;
	}

}