
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 11. Use the Web Sockets Application Programming Interface with JavaScript to send and receive real time communications data //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(function () {
	var wsUri = "wss://echo.websocket.org/";
	var output;
	console.log("JS Opened");
	init();
	// When HTML Button is clicked then activate the Web Socket Function
	$('#webSocketBtn').click(testWebSocket);

});


var wsUri = "wss://echo.websocket.org/";
var output;


function init() {
	output = document.getElementById("output");
}



function testWebSocket() {
	console.log("testWebSocket function entered");
	websocket = new WebSocket(wsUri); 	//Open a WebSocket connection by calling the WebSocket constructor
	websocket.onopen = function (evt) { onOpen(evt) }; // When the connection is open, do function
	websocket.onclose = function (evt) { onClose(evt) }; // When the connection is closed, do function
	websocket.onmessage = function (evt) { onMessage(evt) }; // When message recieved, do function
	websocket.onerror = function (evt) { onError(evt) }; 	// If there is a connection error, do function
}

//Function used when websocket is open, display message onscreen and calls another function to send a message to the server
function onOpen(evt) {
	writeToScreen('<span style="color: green;">' + "CONNECTED" + '</span>');
	doSend("GameCube: Born to Play");
}

//Function used when websocket is closed, Calls the writeToScreen function to display a message onscreen
function onClose(evt) {
	writeToScreen('<span style="color: blue;">' + "DISCONNECTED" + '</span>');
}
// Function used when a message is recieved, Calls the writeToScreen function to displays a message onscreen
function onMessage(evt) {
	writeToScreen('<span style="color: var(--color-palette-purple-1);">RESPONSE: ' + evt.data + '</span>');
	websocket.close();
}
// Function used if an error occurs, Calls the writeToScreen function to displays an error message onscreen
function onError(evt) {
	writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

// Function to send a message to the server, Displays an error message onscreen
function doSend(message) {
	writeToScreen("SENT: " + message);
	websocket.send(message);
}

// Function to allow us to write a message to the screen, we give our message as an argument
function writeToScreen(message) {
	var pre = document.createElement("p");
	pre.style.wordWrap = "break-word";
	pre.innerHTML = message;
	output.appendChild(pre);
}

window.addEventListener("load", init, false);