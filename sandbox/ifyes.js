
/************************** BEGIN SANDBOX TEST FUNCTIONALITY *******************/
//change id and function calls for each ifYes instance
$('#showRadioDescription').on('click', showDescriptionFunction);  
$('#hideRadioDescription').on('click', hideText);

function showDescriptionFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showRadioDescription').attr('name'); //change this id for each ifYes instance
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_description";
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showRadioDescription").parentNode;  //div
		var child1 = parentElement.nextSibling;  
		console.log("parentElement = " + parentElement);
		console.log("child1 = " + child1);  //THIS is the one we want to insert after

		
		/// now to go through the rigorous process of creating a 
		/// text area show a text area with the var textAreaName string

		// create the text area 
		var x = document.createElement("TEXTAREA");
		
		// create the attributes
		var theId = document.createAttribute("id");  
		var thePlaceholder = document.createAttribute("placeholder");  
		var theCols = document.createAttribute("cols");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		thePlaceholder.value = "If yes, Please enter details here.";
		theCols.value = "60";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#hideRadioDescription').attr('name');  //change id for each
	var textAreaName = elementName + "_description";
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}



/************************** END TEST FUNCTIONALITY *******************/

///The Question:
///Are you able to contribute financially to implement the project you are requesting? 

//CHANGE ID AND FUNCTION CALLS
$('#showContribute').on('click', showTheContributeFunction);  
$('#hideContribute').on('click', hideTheContributeText);

function showTheContributeFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showContribute').attr('name');   //CHANGE THIS ID
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_description";
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showRadioDescription").parentNode;  
		var child1 = parentElement.nextSibling;  
		console.log("parentElement = " + parentElement);
		console.log("child1 = " + child1);  //THIS is the one we want to insert after

		
		/// now to go through the rigorous process of creating a 
		/// text area show a text area with the var textAreaName string

		// create the text area 
		var x = document.createElement("TEXTAREA");
		
		// create the attributes
		var theId = document.createAttribute("id");  
		var thePlaceholder = document.createAttribute("placeholder");  
		var theCols = document.createAttribute("cols");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		thePlaceholder.value = "If yes, Please enter details here.";
		theCols.value = "60";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideTheContributeText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#hideContribute').attr('name');  //CHANGE ID HERE
	var textAreaName = elementName + "_description";
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}








/***********************************************
**  This next function is from 
** http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
** Karim is a genius, apparently.
*/
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
