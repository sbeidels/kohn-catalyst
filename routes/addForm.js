$("#appForm").submit(function (event) {

    // Stop form from submitting normally
    // event.preventDefault();
/* LIST OF FIELDS (*all text unless otherwise noted)
advocate *bool
advocate-name
advocate-relationship
advocate-npoPhone
advocate-npo
firstName
lastName
dob //date
driversLicense 
marriedSingle  //(text from radio - Married or Single are the two values)
spouse
hPhone
cPhone
emailaddy  //(email type, but I think that's just text with some constraints in form handling)
add1
add2
city
state
zip
eContactName
ecRelationship
ecPhone
additional-1
a1age //number
a1relationship
additional-2
a2age //number
a2relationship
additional-3
a3age //number
a3relationship
additional-4
a4age //number
a4relationship
additional-5
a5age //number
a5relationship
military //bool y/n
language (text from radio - English or Other)
language-other
hearAboutCatalyst
monthlyMortgage (number)
currentOnMortgage (bool)
annualIncome (number)
assets1
assets1-value (number)
assets2
assets2-value  (number)
assets3
assets3-value  (number)
assets4
assets4-value  (number)
assets5
assets5-value  (number)
contribute  (bool)
contribute-amount  (number)
relativeHelp (bool)
relativeHelp-provide
otherHelp  (bool)
otherHelp-provide
propertyType (text from radio)
propertyType-other
timePropertyOwned
yearPropertyBuilt (number)
repairsNeeded
help  (bool)
help-personal 
othersHelp (bool)
others-help
fbo (bool)
fbo-name
fbo-contact
fbo-phone
otherCircumstances
tac-yes (bool)
signature





*/

    // Get values from elements on the page:
	var $form = $(this),
	theownsHome = $form.find("input[name='ownsHome']").val(),
	thestatus = $form.find("input[name='status']").val(),
	theadvocate = $form.find("input[name='advocate']").val(),
	theadvocate_name = $form.find("input[name='advocate-name']").val(),
	theadvocate_relationship = $form.find("input[name='advocate-relationship']").val(),
	theadvocate_phone = $form.find("input[name='advocate-phone']").val(),
	theadvocate_npo = $form.find("input[name='advocate-npo']").val(),
	thefirstName = $form.find("input[name='firstName']").val(),
	thelastName = $form.find("input[name='lastName']").val(),
	thedob = $form.find("input[name='dob']").val(),  //date
	thedriversLicense = $form.find("input[name='driversLicense ']").val(),
	themarriedSingle = $form.find("input[name='marriedSingle']").val(), // (text from radio - Married or Single are the two values)
	thespouse = $form.find("input[name='spouse']").val(),
	thehPhone = $form.find("input[name='hPhone']").val(),
	thecPhone = $form.find("input[name='cPhone']").val(),
	theemailaddy = $form.find("input[name='emailaddy']").val(), //(email type, but I think that's just text with some constraints in form handling)
	theadd1 = $form.find("input[name='add1']").val(),
	theadd2 = $form.find("input[name='add2']").val(),
	thecity = $form.find("input[name='city']").val(),
	thestate = $form.find("input[name='state']").val(),
	thezip = $form.find("input[name='zip']").val(),
	theeContactName = $form.find("input[name='eContactName']").val(),
	theecRelationship = $form.find("input[name='ecRelationship']").val(),
	theecPhone = $form.find("input[name='ecPhone']").val(),
	theadditional1 = $form.find("input[name='additional-1']").val(),
	thea1age = $form.find("input[name='a1age']").val(),  //number
	thea1relationship = $form.find("input[name='a1relationship']").val(),
	theadditional2 = $form.find("input[name='additional-2']").val(),
	thea2age = $form.find("input[name='a2age']").val(),  //(number)
	thea2relationship = $form.find("input[name='a2relationship']").val(),
	theadditional3 = $form.find("input[name='additional-3']").val(),
	thea3age = $form.find("input[name='a3age']").val(),  //(number)
	thea3relationship = $form.find("input[name='a3relationship']").val(),
	theadditional4 = $form.find("input[name='additional-4']").val(),
	thea4age = $form.find("input[name='a4age']").val(),  //(number)
	thea4relationship = $form.find("input[name='a4relationship']").val(),
	theadditional5 = $form.find("input[name='additional-5']").val(),
	thea5age = $form.find("input[name='a5age']").val(),  //(number)
	thea5relationship = $form.find("input[name='a5relationship']").val(),
	themilitary = $form.find("input[name='military']").val(), //bool
	thelanguage = $form.find("input[name='language']").val(), //(text from radio - English or Other)
	thelanguage_other = $form.find("input[name='language-other']").val(),
	thehearAboutCatalyst = $form.find("input[name='hearAboutCatalyst']").val(),
	themonthlyMortgage = $form.find("input[name='monthlyMortgage']").val(), //(number) 
	thecurrentOnMortgage = $form.find("input[name='currentOnMortgage']").val(),  //(bool)
	theannualIncome = $form.find("input[name='annualIncome']").val(), //number)
	theassets1 = $form.find("input[name='assets1']").val(),
	theassets1_value = $form.find("input[name='assets1-value']").val(),  //(number)
	theassets2 = $form.find("input[name='assets2']").val(),
	theassets2_value = $form.find("input[name='assets2-value']").val(), //(number)
	theassets3 = $form.find("input[name='assets3']").val(),
	theassets3_value = $form.find("input[name='assets3-value']").val(),  //(number)
	theassets4 = $form.find("input[name='assets4']").val(),
	theassets4_value = $form.find("input[name='assets4-value']").val(), //(number)
	theassets5 = $form.find("input[name='assets5']").val(),
	theassets5_value = $form.find("input[name='assets5-value']").val(), //(number)
	thecontribute = $form.find("input[name='contribute']").val(),  //(bool)
	thecontribute_amount = $form.find("input[name='contribute-amount']").val(),  //(number)
	therelativeHelp = $form.find("input[name='relativeHelp']").val(),  //(bool)
	therelativeHelp_provide = $form.find("input[name='relativeHelp-provide']").val(),
	theotherHelp = $form.find("input[name='otherHelp']").val(), //(bool)
	theotherHelp_provide = $form.find("input[name='otherHelp-provide']").val(),
	thepropertyType = $form.find("input[name='propertyType']").val(), //(text from radio)
	thepropertyType_other = $form.find("input[name='propertyType-other']").val(),
	thetimePropertyOwned = $form.find("input[name='timePropertyOwned']").val(),
	theyearPropertyBuilt = $form.find("input[name='yearPropertyBuilt']").val(), //(number)
	therepairsNeeded = $form.find("input[name='repairsNeeded']").val(),
	thelaborhelp = $form.find("input[name='laborhelp']").val(), //(bool)
	thelaborhelp_personal = $form.find("input[name='laborhelp-personal']").val(),
	theotherslaborHelp = $form.find("input[name='otherslaborHelp']").val(), //(bool)
	theothers_laborhelp = $form.find("input[name='others-laborhelp']").val(),
	thefbo = $form.find("input[name='fbo']").val(),  //(bool)
	thefbo_name = $form.find("input[name='fbo-name']").val(),
	thefbo_contact = $form.find("input[name='fbo-contact']").val(),
	thefbo_phone = $form.find("input[name='fbo-phone']").val(),
	theotherCircumstances = $form.find("input[name='otherCircumstances']").val(),
	thetac_yes = $form.find("input[name='tac-yes']").val(), //(bool)
	thesignature = $form.find("input[name='signature']").val(),
	url = $form.attr("action");
	
	
	/* FIELDS ALSO TO SUBMIT ********************
	** Date of submission
	** 
	**
	*********************************************
	** NEW FIELDS FOR DATABASE/changes to make?
		advocate *bool
		advocate-name
		advocate-relationship
		advocate-npoPhone
		advocate-npo
		(The Above SUBJECT TO CHANGE)
		
		(Fields I can't find in the schemas) - feel free to name them what you want
		monthly_mortgage - number
		current_on_mortgage - bool
		List of Assets with Values  
			theassets1 - theassets5 and theassets1-value through theassets5-value
		thecontribute (bool whether or not they can contribute)
		therelativeHelp (bool if relatives can contribute)
		theotherHelp (bool whether or not they've asked for help from other Non profits)
		thelaborhelp (bool whether they can help provide labor)
		thelaborhelp-personal - text for what labor they can personally provide
		theotherslaborHelp - bool if friends or family can help provide labor
		theothers-laborhelp - text for what labor friends or family can provide
		thefbo - bool IF they are involved in a faith based organization (fbo)
		thefbo-name - text - name of fbo
		thefbo-contact - text - name of a contact at fbo
		thefbo-phone - text - fbo phone number 
		thetac-yes - bool MUST be yes...it is required they check that they understand the terms and conditions (tac)
		thesignature - text - need to save their typed "digital signature"
		
		
		FIELDS IN THE DATABASE I AM UNSURE OF...
		address_1 and address_2 instead of number street unit (or I parse, which sucks, and I don't think it is necessary)
		there are TWO id  fields in the database - not sure which one is what and what they both do... I shall ASSUME (ahem) that the back-end can handle the creation of both of these...
		property_owner: string (maybe should be bool??)
		
		
		TO DO:
		I need to figure out which ones are numbers and delete the "" around those fields
		I need to figure out how to send the "grouped stuff" like emergency contact name, relationship, and phone; and the other_residents group (which now have age and relationship)
		I have to do some data manipulation:
			Language: if Other - then send theLanguage as: thelanguage-other.val()
			Home Type: same as above:  thepropertyType
		
	*/
	
	console.log("firstName=" + thefirstName + "lastName=" + thelastName);
	
	//create the JSON block into a variable
	var jsonToPost = '[{"advocate":"' + theadvocate + 
		'","advocate_name":"' + theadvocate_name + 
		'","advocate_relationship":"' + theadvocate_relationship + 
		'","advocate_phone":"' + theadvocate_phone + 
		'","advocate_npo":"' + theadvocate_npo + 
		'","first_name":"' + thefirstName + 
		'","last_name":"' + thelastName + 
		'","dob":"' + thedob + 
		'","driver_license":"' + thedriversLicense + 
		'","marital_status":"' + themarriedSingle + 
		'","spouse":"' + thespouse + 
		'","hPhone":"' + thehPhone + 
		'","cPhone":"' + thecPhone + 
		'","email":"' + theemailaddy + 
		'","address_1":"' + theadd1 + 
		'","address_2":"' + theadd2 + 
		'","city":"' + thecity + 
		'","state":"' + thestate + 
		'","zip":"' + thezip + 
		'","emergency_contact":"' + theeContactName + 
		'","??":"' + theecRelationship + 
		'","??":"' + theecPhone + 
		'","??":"' + theadditional1 + 
		'","??":"' + thea1age + 
		'","??":"' + thea1relationship + 
		'","??":"' + theadditional2 + 
		'","??":"' + thea2age + 
		'","??":"' + thea2relationship + 
		'","??":"' + theadditional3 +  
		'","??":"' + thea3age + 
		'","??":"' + thea3relationship + 
		'","??":"' + theadditional4 + 
		'","??":"' + thea4age + 
		'","??":"' + thea4relationship + 
		'","??":"' + theadditional5 + 
		'","??":"' + thea5age + 
		'","??":"' + thea5relationship + 
		'","veteran":"' + themilitary + 
		'","language":"' + thelanguage + 
		'","other_language":"' + thelanguage_other + 
		'","heard_about_catalyst":"' + thehearAboutCatalyst + 
		'","monthly_mortgage":"' + themonthlyMortgage + 
		'","current_on_mortgage":"' + thecurrentOnMortgage + 
		'","annual_income":"' + theannualIncome + 
		'","??":"' + theassets1 + 
		'","??":"' + theassets1_value + 
		'","??":"' + theassets2 + 
		'","??":"' + theassets2_value + 
		'","??":"' + theassets3 + 
		'","??":"' + theassets3_value + 
		'","??":"' + theassets4 + 
		'","??":"' + theassets4_value + 
		'","??":"' + theassets5 + 
		'","??":"' + theassets5_value + 
		'","??":"' + thecontribute + 
		'","contribute_funds":"' + thecontribute_amount + 
		'","??":"' + therelativeHelp + 
		'","family_financial_help":"' + therelativeHelp_provide + 
		'","??":"' + theotherHelp + 
		'","other_non_profits":"' + theotherHelp_provide + 
		'","type":"' + thepropertyType + 
		'","ownership_length":"' + thetimePropertyOwned + 
		'","year_built":"' + theyearPropertyBuilt + 
		'","requested_repairs":"' + therepairsNeeded + 
		'","??":"' + thelaborhelp + 
		'","??":"' + thelaborhelp_personal + 
		'","??":"' + theotherslaborHelp + 
		'","??":"' + theothers_laborhelp + 
		'","??":"' + thefbo + 
		'","??":"' + thefbo_name + 
		'","??":"' + thefbo_contact + 
		'","??":"' + thefbo_phone + 
		'","other_notes":"' + theotherCircumstances + 
		'","??":"' + thetac_yes + 
		'","??":"' + thesignature + '"}]'
	
	
	
	
	
	


	
	
	
	
	
    // Send the data using post
    var posting = $.post(url, "name=" + jsonToPost);

	
	/*  ***** OLD CODE...not sure it is necessary...just need to route them to another page
	
    // Put the results in a div
    posting.done(function (data)
    {
        var content = JSON.parse(data);
        var stringToReturn = '<ul class="empty">';
        console.log(content);  //this is the song object returned - not an array!
        
        stringToReturn += "<li>" + content.name;
        if (content.keySig)
            stringToReturn += ", Key of " + content.keySig;
        if (content.tempo)
        {
            if (content.tempo == 1)
                stringToReturn += ", Tempo: Upbeat";
            if (content.tempo == 2)
                stringToReturn += ", Tempo: Medium";
            if (content.tempo == 3)
                stringToReturn += ", Tempo: Slower";
        }
        stringToReturn += " has been successfully added to the Database."
        console.log(stringToReturn);
        $("#songBack").empty().append(stringToReturn);
    });
    
}); */