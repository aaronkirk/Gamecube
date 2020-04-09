
	//############################
	//##                        ##
	//##       Aaron Kirk       ##
	//##                        ##
	//############################

window.addEventListener('DOMContentLoaded', function (event) {
	addCustomContainer();
	fetchJsonDataFile();
});


// JSON //

///////////////////////////////////////////////////////////////
// Task 2. Use JavaScript with HTML 5 to Manipulate HTML DOM //
///////////////////////////////////////////////////////////////

//Create a databox in HTML and attach this to the div element already coded in the HTML document
function addCustomContainer() {
	$('<div>', {
		'id': 'dataBox',
		html: 'Awaiting data download from github<br>PLEASE WAIT ...'
	}).appendTo('#json-data');
}


///////////////////////////////////////////////////////////////
//  Task 4. Use XMLHttpRequest objects to communicate data   //
///////////////////////////////////////////////////////////////

function fetchJsonDataFile() {
	console.log('About to fetch JSON Data File');
	$.getJSON('https://raw.githubusercontent.com/aaronkirk/WebDevPractice/master/JSON%20List%20of%20Games.JSON', function (data) {
		console.log(data);
		localStorage.setItem('myJson', JSON.stringify(data)); //saving and getting it from local storage

		//Push values from JSON into a table  
		var items = [];
		$.each(data, function (key, value) {
			items.push('<tr><td>' + value.GameTitle + '</td><td>' + value.Sales + '</td><td>' + value['Release Year'] + '</td></tr>');
		}); 

		//Create table in HTML and attach this to the dataBox created in the code above
		console.log(items);
		$('#dataBox').html('');
		$('<table>', {
			'border': '1px solid black',
			html: items.join('')
		}).appendTo('#dataBox');


		////////////////////////////////////////////
		//  Task 7. Support offline applications  //
		////////////////////////////////////////////

		//If JSON cannot be found online retrieve the JSON from Local storage (Will only be in local storage if the browser has previously stored it)
	}).fail(function () {
		console.log("error");
		var data = localStorage.getItem('myJson');
		console.log(data);
		data = JSON.parse(data);

		var items = [];
		$.each(data, function (key, value) {
			items.push('<tr><td>' + value.GameTitle + '</td><td>' + value.Sales + '</td><td>' + value['Release Year'] + '</td></tr>');
		}); 

		console.log(items);
		$('#dataBox').html('');
		$('<table>', {
			'border': '1px solid black',
			html: items.join('')
		}).appendTo('#dataBox');
	});
}
