$('#showDescription').on('click', showDescriptionFunction);

function showDescriptionFunction() {
	if (getVal('input[name="family_labor_help"]:checked')) {
		console.log("Made It!");
	/// now show a text area with name="newArea"
	
	// create the text area 
		var x = document.createElement("TEXTAREA");
	
	// create the attributes
		var theId = document.createAttribute("id");  
		var thePlaceholder = document.createAttribute("placeholder");  
		var theCols = document.createAttribute("cols");
	
	//set the attribute values
		theId.value = "newArea";
		thePlaceholder.value = "If yes, Please enter details here.";
		theCols.value = "60";
	
	//put attributes into x (the new text area)
		x.setAttributeNode(theId); 
		x.setAttributeNode(thePlaceholder); 
		x.setAttributeNode(theCols); 
		document.body.appendChild(x);
	}
		
	
	else {
		console.log("Unchecked!"); 
	// now remove the text area by the id created above (newArea)
		
		var element = document.getElementById("newArea");
		element.parentNode.removeChild(element);
		}
}

function getVal(selector) {
		return $(selector).val();
}


/**** Notes


var theParent = document.getElementById("newArea").parentElement.nodeName;
		console.log("The Parent: " + theParent);
		console.log("The Child: " + theChild);
		theChild.removeChild(theParent.firstChild);

		if (theParent.hasChildNodes()) {
			theParent.removeChild(theParent.childNodes[0]);
		}

		var myNode = document.getElementById("foo");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}


**** End Notes */