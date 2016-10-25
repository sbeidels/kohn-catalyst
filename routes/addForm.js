$("#appForm").submit(function (event) {
    // Get values from elements on the page:
    var $form = $(this);
    var json = JSON.stringify( $appForm.serializeArray() );
    
    // Send the data using post
    var <variable you send to database> = $.post(url, json);
});


/*
advocate *bool
advocate-name
advocate-relationship
advocate-npoPhone
advocate-npo
firstName
middleName
lastName
preferredName
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
fbo-help (bool)
otherCircumstances
tac-yes (bool)
signature
*/