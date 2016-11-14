
/************************** BEGIN SANDBOX TEST FUNCTIONALITY *******************
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



************************** END TEST FUNCTIONALITY *******************/

///The Question:
///Are you able to contribute financially to implement the project you are requesting? 

//		CHANGE ID AND FUNCTION CALLS
$('#showContribute').on('click', showTheContributeFunction);  
$('#hideContribute').on('click', hideTheContributeText);

function showTheContributeFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showContribute').attr('name');   		//CHANGE THIS ID
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_amount"; 		//CHANGE CONCATENATION
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showContribute").parentNode;  
		var child1 = parentElement.nextSibling;  
		console.log("parentElement = " + parentElement);
		console.log("child1 = " + child1);  //THIS is the one we want to insert after

		/// now to go through the rigorous process of creating a 
		/// text area show a text area with the var textAreaName string
		
		// create the number input
		var x = document.createElement("INPUT");
		
		// create the attributes
		var theId = document.createAttribute("id");
		var theClass = document.createAttribute("class");
		var theType = document.createAttribute("type");
		var theName = document.createAttribute("name");
		var thePlaceholder = document.createAttribute("placeholder");  
		
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		theClass.value = "largeField";
		theType.value = "number";
		theName.value = textAreaName;  //even though it's a number, just to be consistent
		thePlaceholder.value = "Dollar amount you can contribute...";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(theClass); 
		x.setAttributeNode(theType); 
		x.setAttributeNode(theName); 
		x.setAttributeNode(thePlaceholder); 
		
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the number area just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideTheContributeText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#showContribute').attr('name');  		//CHANGE ID HERE
	var textAreaName = elementName + "_amount";
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}


/*<input type="radio" name="relativeContribute" value="true">Yes&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name="relativeContribute" value="false">No<br>
				<!-- If yes, please describe what financial help they might provide:<br>
				<textarea rows="3" cols="60" id="relativeContribute_provide" placeholder="Help others can provide"></textarea> --> */

///The Question:
///Do you have adult children and/or other relatives who may be able to help financially?

//		CHANGE ID AND FUNCTION CALLS
$('#showRelativeContribute').on('click', showTheRelativeContributeFunction);  
$('#hideRelativeContribute').on('click', hideTheRelativeContributeText);

function showTheRelativeContributeFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showRelativeContribute').attr('name');   		//CHANGE THIS ID
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_provide";  		//CHANGE 
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showRelativeContribute").parentNode;  
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
		var theRows = document.createAttribute("rows");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		//CHANGE THIS
		thePlaceholder.value = "If yes, please describe what financial help they might provide...";  
		theCols.value = "60";
		theRows.value = "3";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideTheRelativeContributeText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#showRelativeContribute').attr('name');  		//CHANGE ID HERE
	var textAreaName = elementName + "_provide";				//CHANGE the concatenation
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}



/*
<div class="formLine">Have you already requested help from other Non-Profits, from your City, from your County, or other Organization?
			<div class="formLine">
				<input type="radio" name="otherHelp" value="true">Yes&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name="otherHelp" value="false">No<br>
				If yes, please describe what help they might provide:<br>
				<textarea rows="3" cols="60" id="otherHelp_provide" placeholder="Help you have requested from other organizations"></textarea>
			</div>
		</div>
*/

///The Question:
///Have you already requested help from other Non-Profits, from your City, from your County, or other Organization?

//		CHANGE ID AND FUNCTION CALLS
$('#showOtherHelp').on('click', showTheOtherHelpFunction);  
$('#hideOtherHelp').on('click', hideTheOtherHelpText);

function showTheOtherHelpFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showOtherHelp').attr('name');   		//CHANGE THIS ID (same below)
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_provide";  		//CHANGE 
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showOtherHelp").parentNode;  
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
		var theRows = document.createAttribute("rows");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		//CHANGE THIS
		thePlaceholder.value = "If yes, please describe what help you have requested or received...";  
		theCols.value = "60";
		theRows.value = "3";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideOtherHelpText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#showOtherHelp').attr('name');  		//CHANGE ID HERE
	var textAreaName = elementName + "_provide";				//CHANGE the concatenation
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}

/*
<div class="formLine">Are you able to provide any help (labor/materials) for these repairs?
			<div class="formLine">
				<input type="radio" name="laborHelp" value="true">Yes&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name="laborHelp" value="false">No<br>
				If yes, please describe:<br>
				<textarea rows="3" cols="60" id="laborHelp_personal" placeholder="Help you can provide"></textarea>
*/


///The Question:
///Are you able to provide any help (labor/materials) for these repairs?

//		CHANGE ID AND FUNCTION CALLS
$('#showLaborHelp').on('click', showLaborHelpFunction);  
$('#hideLaborHelp').on('click', hideLaborHelpText);

function showLaborHelpFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var elementName =  $('#showLaborHelp').attr('name');   		//CHANGE THIS ID (same below)
	
	console.log("elementName = " + elementName);
	var textAreaName = elementName + "_personal";  		//CHANGE 
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showLaborHelp").parentNode;  //CHANGE!!!!
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
		var theRows = document.createAttribute("rows");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		//CHANGE THIS
		thePlaceholder.value = "If yes, please share what help or materials you can personally provide...";  
		theCols.value = "60";
		theRows.value = "3";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideLaborHelpText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var elementName =  $('#showLaborHelp').attr('name');  		//CHANGE ID HERE (same as above)
	var textAreaName = elementName + "_personal";				//CHANGE the concatenation
	console.log("textAreaName = " + textAreaName);

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}



/*
Do you have friends or family who may be able to help Catalyst perform the work of this project?
			<div class="formLine">
				<input type="radio" name="othersLaborHelp" value="true">Yes&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name="othersLaborHelp" value="false">No<br>
				If yes, please describe:<br>
				<textarea rows="3" cols="60" id="others_laborHelp" placeholder="Help other people could provide"></textarea>
*/

///The Question:
///Do you have friends or family who may be able to help Catalyst perform the work of this project?

//		CHANGE ID AND FUNCTION CALLS
$('#showOthersLaborHelp').on('click', showOthersLaborHelpFunction);  
$('#hideOthersLaborHelp').on('click', hideOthersLaborHelpText);

function showOthersLaborHelpFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var textAreaName = "others_laborHelp";  		//CHANGE 
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showOthersLaborHelp").parentNode;  //CHANGE!!!!
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
		var theRows = document.createAttribute("rows");
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		//CHANGE THIS
		thePlaceholder.value = "If yes, please share what help or materials people you know might be able to provide...";  
		theCols.value = "60";
		theRows.value = "3";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideOthersLaborHelpText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var textAreaName = "others_laborHelp";		//CHANGE this

//FIND it (if it's there)
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null - no worries, nothing else happens
	//make sure it's there before we remove it
	if(element) {
		element.parentNode.removeChild(element);
	}
}

/*
<div class="formLine">Many of our volunteers come from faith-based organizations.  Are you connected with a faith-based community who may have volunteers willing to help?
			<div class="formLine">
				<input type="radio" name="fbo_help" value="true">Yes&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name="fbo_help" value="false">No<br>
				If yes, please give details below:
				<div class="formLine">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organization Name: <input class="largeField" type="text" name="fbo_name" placeholder="Name">
*/
///The Question:
///Many of our volunteers come from faith-based organizations.  Are you connected with a faith-based community who may have volunteers willing to help?

//		CHANGE ID AND FUNCTION CALLS
$('#showFboHelp').on('click', showFboHelpFunction);  
$('#hideFboHelp').on('click', hideFboHelpText);

function showFboHelpFunction() {
	console.log("Made It!");
	
/// First we do some setup for this ifYes Instance
	var textAreaName = "fbo_name";  		//CHANGE 
	
///then, we make sure the text area isn't already there
	var element = document.getElementById(textAreaName);
	console.log(element);  //could be null, which is okay, nothing else happens
	
///If NOT there - put it there
	if(!element) {
		//find the div we want to insert after
		var parentElement = document.getElementById("showOthersLaborHelp").parentNode;  //CHANGE!!!!
		var child1 = parentElement.nextSibling;  
		console.log("parentElement = " + parentElement);
		console.log("child1 = " + child1);  //THIS is the one we want to insert after

		/// now to go through the rigorous process of creating the input

		// create the text field input
		var x = document.createElement("INPUT");
		
		// create the attributes
		var theId = document.createAttribute("id");
		var theClass = document.createAttribute("class");
		var theType = document.createAttribute("type");
		var theName = document.createAttribute("name");
		var thePlaceholder = document.createAttribute("placeholder");  
		
		
		//set the attribute values
		theId.value = textAreaName;  //this is pulled in from above
		theClass.value = "largeField";
		theType.value = "text";
		theName.value = textAreaName;  //even though it's a text input, just to be consistent
		thePlaceholder.value = "Organization Name";
		
		//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(theClass); 
		x.setAttributeNode(theType); 
		x.setAttributeNode(theName); 
		x.setAttributeNode(thePlaceholder); 
		
		console.log("x = " + x);  //just to see it is a HTMLtextAreaElement
		
		//insert the textarea just after this div
		insertAfter(x, child1);  //uses external function insertAfter
	}
}

function hideFboHelpText() {
	console.log("I'm ready to hide");
/// do some setup to make the textAreaName
	var textAreaName = "fbo_name";		//CHANGE this

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
