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
			var elementName = "name_" + count;
			console.log("the element name is " + elementName);
			var element = document.getElementByID(elementName);
			console.log("the element is: " + element);
			if(element) {
				while (document.getElementByID(elementName)) {
				count++;
				} //now count holds a new index for the new fields
			}
			
				
			// create the text area 
				var name = document.createElement("Text");
				var age = document.createElement("Number");
				var relationship = document.createElement("Text");
			
			// create attributes needed
			//for name
				var theNameId = document.createAttribute("id");
				var theNameClass = document.createAttribute("class");
				var theNameName = document.createAttribute("name");
				var theNamePlaceholder = document.createAttribute("placeholder");
				var theAgeClass = document.createAttribute("class");  
				var theAgePlaceholder = document.createAttribute("placeholder"); 
				var theRelationshipClass = document.createAttribute("class");  
				var theRelationshipPlaceholder = document.createAttribute("placeholder"); 
				
			//set the attribute values
				theNameId.value = "name_" + count;  //this will be the number we use to count
				theNameName.value = "name_" + count;
				theNameClass.value = "mediumField";
				theNamePlaceholder.value = "Name";
				theAgeName.value = "a" + count + "age";
				theAgeClass.value = "tinyField";
				theAgePlaceholder.value = "Age";
				theRelationshipName.value = "a" + count + "relationship"
				theRelationshipClass.value = "mediumField";
				theRelationshipPlaceholder.value = "Relationship";
			
			//put attribute values into the attributes
				name.setAttributeNode(theNameId);
				name.setAttributeNode(theNameName);
				name.setAttibuteNode(theNameClass);
				name.setAttibuteNode(theNamePlaceholder);
				age.setAttibuteNode(theAgeName);
				age.setAttibuteNode(theAgeClass);
				age.setAttibuteNode(theAgePlaceholder);
				relationship.setAttibuteNode(theRelationshipName);
				relationship.setAttibuteNode(theRelationshipClass);
				relationship.setAttibuteNode(theRelationshipPlaceholder);

			//append the body with the new fields
				console.log("name = " + name);
				console.log("age = " + age);
				console.log("relationship = " + relationship);
				document.body.appendChild(name);
				document.body.appendChild(age);
				document.body.appendChild(relationship);
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