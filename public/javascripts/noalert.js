$('#alertOwn').on('click', alertOwnFunction);
$('#alertMortgage').on('click', alertMortgageFunction);

function alertOwnFunction() {
	if (getVal('input[name="owns_home"]:checked')) {
		alert("We are so sorry, but Catalyst does not provide services for properties that applicants do not own.");
	}
}

function alertMortgageFunction() {
	if (getVal('input[name="mortgage_up_to_date"]:checked')) {
		alert("We are so sorry, but if you are not up to date on your mortgage payments, Catalyst cannot provide services for your property.");
	}
}

function getVal(selector) {
		return $(selector).val();
}