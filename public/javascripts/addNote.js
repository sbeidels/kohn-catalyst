$(document).ready(init)

function init() {

    $('#addNote').on('click', addTheNote);
	function addTheNote() {
		//addTheNote.preventDefault();
        //submit to DB
        var note = $('#note').val();
        console.log("Adding note: " + note);
	}
}
	    

