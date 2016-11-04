$(document).ready(init)


function init() {
	$('#appForm').submit(function (event) {
		event.stopPropagation();
		event.preventDefault();
		var jsonToSend = getApplicationFormJSON();  //stringified in that function
		console.log(jsonToSend);
		//$.post("/application/add", jsonToSend, "JSON");
		$.ajax({
			type : 'POST',
			url: "/application/add",
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			data: jsonToSend
			
		});
	});

	function getApplicationFormJSON() {
		var data = {};
		
		$.extend(data, getApplicationData());
		$.extend(data, getFinanceData());
		$.extend(data, getPropertyData());
		$.extend(data, getRecruitmentData());
		
		return JSON.stringify(data);
	}

	//this function figures out the Language
	function getLanguage() {
		var data;
		if (getVal('input[name="language"]:checked') == "English") {
			data = "English";
		}
		else if (getVal('input[name="language"]:checked') == "Other") {
			data = getVal('input[name="language_other"]');
		}
		return data;
	}


	//this function figures out and returns the Home Type
	function getHomeType() {
		var data = {};
		if (getVal('input[name="propertyType"]:checked') == "Other") {
			data = getVal('input[name="propertyType_other"]');
		}
		else {
			data = getVal('input[name="propertyType"]:checked');
		}
		return data;
	}


	//this function figures out and returns the Advocate data
	function getAdvocateData() {
		var data = {};
		
		var ind_bool = false;
		var npo_bool = false;
		var gov_bool = false;
		
		if (getVal('input[name="advocate"]:checked') == "adv_npo") {
			npo_bool = true;
		}
			
		if (getVal('input[name="advocate"]:checked') == "adv_gov") {
			gov_bool = true;
		}
		if (getVal('input[name="advocate"]:checked') == "adv_individual") {
			ind_bool = true;
		}
		
		data.advocate = {
			individual: ind_bool,
			npo: npo_bool,
			gov: gov_bool,
			name: getVal('input[name="advocate_name"]'),
			organization_name: getVal('input[name="advocate_npo_organization"]'),
			relationship: getVal('input[name="advocate_individual_relationship"]'),
			phone: getVal('input[name="advocate_phone"]')
		}
		return data;
	}


	//This function handles MOST of the data that goes into "application:"
	//section of the documentPackage.js (as well as status, which will send "new")
	function getApplicationData() {
		var data = {};

		data.status = getVal('input[name="status"]');
		//data.created is created on the back end
		//data.updated is created on the back end

		// Non-grouped application data
		data.application = {
			owns_home: getVal('input[name="owns_home"]:checked'),
			is_married: getVal('input[name="isMarried"]:checked'),
			spouse: getVal('input[name="spouse"]'),
			email: getVal('input[name="emailaddy"]'),
			veteran: getVal('input[name="military"]:checked'),
			language: getLanguage(),
			heard_about: jQuery("textarea#hearAboutCatalyst").val(),
			name: {
				first: getVal('input[name="firstName"]'),
				middle: getVal('input[name="middleName"]'),
				last: getVal('input[name="lastName"]'),
				preferred: getVal('input[name="preferredName"]')
			},
			phone: {
				home: getVal('input[name="hPhone"]'),
				cell: getVal('input[name="cPhone"]')
			},
			address: {
				line_1: getVal('input[name="add1"]'),
				line_2: getVal('input[name="add2"]'),
				city: getVal('input[name="city"]'),
				state: getVal('input[name="state"]'),
				zip: getVal('input[name="zip"]')
			},
			emergency_contact: {
				name: getVal('input[name="eContactName"]'),
				relationship: getVal('input[name="ecRelationship"]'),
				phone: getVal('input[name="ecPhone"]')
			},
			dob: {
				date: getVal('input[name="dob"]')
			},
			other_residents: {
				name: [
						getVal('input[name="additional_1"]'),
						getVal('input[name="additional_2"]'),
						getVal('input[name="additional_3"]'),
						getVal('input[name="additional_4"]'),
						getVal('input[name="additional_5"]')
					],
				age: [
						getVal('input[name="a1age"]'),
						getVal('input[name="a2age"]'),
						getVal('input[name="a3age"]'),
						getVal('input[name="a4age"]'),
						getVal('input[name="a5age"]')
					],
				relationship: [
						getVal('input[name="a1relationship"]'),
						getVal('input[name="a2relationship"]'),
						getVal('input[name="a3relationship"]'),
						getVal('input[name="a4relationship"]'),
						getVal('input[name="a5relationship"]')
					]
			},
			driver_license: {
				number: getVal('input[name="driversLicense"]')
			},
			special_circumstances: {
				note: jQuery("textarea#otherCircumstances").val()
			}
		}
		return data;
	}


	//This function handles MOST of the data that goes into "finance:"
	//section of the documentPackage.js
	function getFinanceData() {
		var data = {};
		data.finance = {
			mortgage: {
				payment: getVal('input[name="monthlyMortgage"]'),
				up_to_date: getVal('input[name="mortgage_up_to_date"]:checked')
			},
			income: {
				amount: getVal('input[name="annualIncome"]')
			},
			assets: {
				name: [
					getVal('input[name="assets1"]'),
					getVal('input[name="assets2"]'),
					getVal('input[name="assets3"]'),
					getVal('input[name="assets4"]'),
					getVal('input[name="assets5"]')
				],
				value: [
					getVal('input[name="assets1_value"]'),
					getVal('input[name="assets2_value"]'),
					getVal('input[name="assets3_value"]'),
					getVal('input[name="assets4_value"]'),
					getVal('input[name="assets5_value"]')
				]
			},
			client_can_contribute: {
				value: getVal('input[name="contribute"]:checked'),
				amount: getVal('input[name="contribute_amount"]')
			},
			associates_can_contribute: {
				value: getVal('input[name="relativeContribute"]:checked'),
				description: jQuery("textarea#relativeContribute_provide").val()
			},
			requested_other_help: {
				value: getVal('input[name="otherHelp"]:checked'),
				description: jQuery("textarea#otherHelp_provide").val()
			}
		}
		return data;
	}


	//This function handles MOST of the data that goes into "property:"
	//section of the documentPackage.js
	function getPropertyData() {
		var data = {};

		data.property = {
			home_type: getHomeType(),
			ownership_length: getVal('input[name="timePropertyOwned"]'),
			year_constructed: getVal('input[name="yearPropertyBuilt"]'),
			requested_repairs: jQuery("textarea#repairsNeeded").val(),
			client_can_contribute: {
				value: getVal('input[name="laborHelp"]:checked'),
				description: jQuery("textarea#laborHelp_personal").val()
			},
			associates_can_contribute: {
				value: getVal('input[name="othersLaborHelp"]:checked'),
				description: jQuery("textarea#others_laborHelp").val()
			}
		}
		return data;
	}


	//This function handles MOST of the data that goes into "recruitment:"
	//section of the documentPackage.js
	function getRecruitmentData() {
		var data = {};

		data.recruitment = {
			belong_in_faith_group: getVal('input[name="fbo"]:checked'),
			organization: {
				name: getVal('input[name="fbo_name"]'),
				willing_to_help: getVal('input[name="fbo_help"]:checked')
			}
		}
		return data;
	}
	   

	function getVal(selector) {
		return $(selector).val();
	}

}



//JSON EXTRACTION WORK PARTS	
//: getVal('input[name=""]'),
//jQuery("textarea#otherCircumstances").val()
