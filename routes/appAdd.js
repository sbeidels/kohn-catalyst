$(document).ready(init)


function init() {

    $('#testButton').on('click', getFormDataJson);

    /*

    This is a dumb/blind way to just rip through all the form's inputs and get their current values.
    This will return an object with key/value pairs where the key is the `input.name`.
    So if your form's DOM input names/structure is setup in a way that directly matches the service contract,
    you're in good shape.

    But I think this approach may not be wise, since you'll want to do things like have an `address` object
    with it's own properties, or in other words your form is complex enough that you can't do it in a dumb way.

    */
    function getFormDataJson() {
        var serialized = $('#appForm').serializeArray();
        var data = {};

        console.log('-------------------------------------');
        console.debug('Serializing form data as JSON... found %s fields in form.', serialized.length);

        serialized.forEach( function(inputData) {
            console.log('\t:: ' + inputData.name + ' = ' + inputData.value);
            data[inputData.name] = inputData.value;

        });

        var json = JSON.stringify(data);

        console.log('-------------------------------------');
        console.log('data: ', data);
        console.log('data as json: ', json);
        console.log('-------------------------------------');

		var objects = getApplicationFormJSON();
		console.log('objects: ', objects);
        return json;
    } 


    /*

    Alternate approach below, where you could start with a blank object `data`, and by
    using jQuery's `extend` method, append/add all the indvidual form sections to one master object
    that can be sent to the server as JSON.

    In this way, you can do whatever weird custom shit you may need to do for formatting/extracting data,
    but do it within the smaller/more manageable functions below.

    It also does not make sense to create individual variables for all the values. Stick that stuff
    right onto an object, if you find yourself wanting to do `var firstName = $(...)`, you're probably doing it wrong.

    */

    function getApplicationFormJSON() {
        var data = {};

        $.extend(data, getPersonalInfoData());
        $.extend(data, getFinancialInfoData());
        $.extend(data, getPropertyInfoData());

        return JSON.stringify(data);
    }

    function getPersonalInfoData() {
        var data = {};

		data.status = getVal('input[name=""]');
        // This is where you'd tack the form values in the Personal Info section onto `data`
        data.advocate = {
			individual: getVal('input[name="advocate_individual"]'),
			npogov: getVal('input[name="advocate_npogov"]'),
			name: getVal('input[name="advocate_name"]'),
			organization_name: getVal('input[name="advocate_npo_organization"]'),
			relationship: getVal('input[name="advocate_individual_relationship"]'),
			phone: getVal('input[name="advocate_phone"]'),
		}
		
		data.application = {
			owns_home: getVal('input[name=""]'),
			: getVal('input[name=""]'),
			: getVal('input[name=""]'),
			: getVal('input[name=""]'),
			: getVal('input[name=""]'),
			: getVal('input[name=""]'),
			: getVal('input[name=""]'),
		}
		
		
		
		//: getVal('input[name=""]'),
		data.firstName = getVal('input[name="firstName"]');
        data.lastName = getVal('input[name="lastName"]');
        data.address = {
            line1: getVal('input[name="add1"]'),
            line2: getVal('input[name="add2"]'),
            city: getVal('input[name="city"]'),
            state: getVal('input[name="state"]'),
            zip: getVal('input[name="zip"]')
        };

        return data;
    }

    function getFinancialInfoData() {
        var data = {};

        // This is where you'd tack the form values in the Personal Info section onto `data`

        return data;
    }

    function getPropertyInfoData() {
        var data = {};

        // This is where you'd tack the form values in the Personal Info section onto `data`

        return data;
    }

    function getVal(selector) {
        return $(selector).val();
    }

}
