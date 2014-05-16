function loadJSON(){

//1. Create XMLHttpRequest object
var xmlhttp = new XMLHttpRequest();

//2. Define callback function to handle the data
function handleJSON(){
	//console.log(xmlhttp.responseText);
	var jsonObj, $list, $elem_li;
	if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)){
		jsonObj = JSON.parse(xmlhttp.responseText);
		$list = $("<ul>");
		for (var card in jsonObj){
			// create a list item to hold the card
            // and append it to the list
			$elem_li = $("<li>");
			$elem_li.text(jsonObj[card].rank + " of " + jsonObj[card].suit);
			$list.append($elem_li);
		}
		// append the completed list to myDiv
		$("#myDiv").append($list);
	}
};
xmlhttp.onreadystatechange = handleJSON;


//3. Send a http Get request
xmlhttp.open("GET", "5cards.json", true);
xmlhttp.send();

}