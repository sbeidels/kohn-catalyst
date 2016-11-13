$('#addResidentFields').on('click', addResidentFieldsFunction);

function addResidentFieldsFunction() {
	if (getVal('input[name="living"]:checked')) {
		console.log("made it!");
		
		/// COUNT the number of fields we have???
		
		///first, we make sure the text area isn't already there
		//var element = document.getElementById("newArea");
		//console.log(element);
		//if(!element) {
			/// now create 3 text areas with different names
			/// depending on a count (somehow) - maybe name=additional_0 parse the number add 1 or create an id with a number
			var count = 1;
			var elementName = "\"name_" + count + "\"";
			console.log("the element name is " + elementName);
			//var element = document.getElementById("newArea");
			var element = document.getElementById(elementName);
			console.log("the element is: " + element);
			if(element) {
				while (document.getElementById(elementName)) {
				count++;
				} //now count holds a new index for the new fields
			}
			console.log("count = " + count);
			
				
			// create the text area 
				var name = document.createElement("input");
				var age = document.createElement("input");
				var relationship = document.createElement("input");
				var lineBreak = document.createElement("br");


			// create attributes needed
			//for name
				var theNameName = document.createAttribute("name");
				var theNameId = document.createAttribute("id");
				var theNameClass = document.createAttribute("class");
				var theNameType = document.createAttribute("type");
				var theNamePlaceholder = document.createAttribute("placeholder");
				var theAgeName = document.createAttribute("name");
				var theAgeType = document.createAttribute("type");
				var theAgeClass = document.createAttribute("class");  
				var theAgePlaceholder = document.createAttribute("placeholder"); 
				var theRelationshipName = document.createAttribute("name");
				var theRelationshipType = document.createAttribute("type");
				var theRelationshipClass = document.createAttribute("class");  
				var theRelationshipPlaceholder = document.createAttribute("placeholder"); 
				
			//set the attribute values
				theNameId.value = "name_" + count;  //this will be the number we use to count
				theNameName.value = "name_" + count;
				theNameType.value = "text";
				theNameClass.value = "mediumField";
				theNamePlaceholder.value = "Name";
				theAgeName.value = "a" + count + "age";
				theAgeType.value = "number";
				theAgeClass.value = "tinyField";
				theAgePlaceholder.value = "Age";
				theRelationshipName.value = "a" + count + "relationship";
				theRelationshipType.value = "text";
				theRelationshipClass.value = "mediumField";
				theRelationshipPlaceholder.value = "Relationship";
			
			//put attribute values into the attributes
				name.setAttributeNode(theNameId);
				name.setAttributeNode(theNameName);
				name.setAttributeNode(theNameType);
				name.setAttributeNode(theNameClass);
				name.setAttributeNode(theNamePlaceholder);
				age.setAttributeNode(theAgeName);
				age.setAttributeNode(theAgeType);
				age.setAttributeNode(theAgeClass);
				age.setAttributeNode(theAgePlaceholder);
				relationship.setAttributeNode(theRelationshipName);
				relationship.setAttributeNode(theRelationshipType);
				relationship.setAttributeNode(theRelationshipClass);
				relationship.setAttributeNode(theRelationshipPlaceholder);

			//append the body with the new fields
				console.log("name = " + name);
				console.log("age = " + age);
				console.log("relationship = " + relationship);
				document.body.appendChild(name);
				document.body.appendChild(age);
				document.body.appendChild(relationship);
				
			
			//append a button to add another row of fields
				var btn = document.createElement("BUTTON");        // Create a <button> element
				var theBtnID = document.createAttribute("id");
				theBtnID.value = "addResidentFields";
				btn.setAttributeNode(theBtnID);
				var t = document.createTextNode("Add Another");       // Create a text node
				btn.appendChild(t);                                // Append the text to <button>
				document.body.appendChild(btn);                    // Append <button> to <body>
				document.body.appendChild(lineBreak);
			}
		}



function getVal(selector) {
		return $(selector).val();
}

/*

<div class="formLine">
				<input class="mediumField" type="text" name="additional_1" placeholder="Name">&nbsp;&nbsp;<input class="tinyField" type="number" name="a1age" placeholder="Age" size="3">&nbsp;&nbsp;<input class="mediumField" type="text" name="a1relationship" placeholder="Relationship">
			</div>
			
*/