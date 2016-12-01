/************************************************
** This file handles the alert boxes that pop up 
** If someone clicks NO on the mortgage up to date
** or own their home checkboxes at the top of the 
** application form.
**************************************************/
$(document).ready(init)

function init() {

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
}