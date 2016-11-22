$(document).ready(init)

function init() {

    $('#addNote').on('click', addTheNote);
	function addTheNote() {
		//addTheNote.preventDefault();
        var note = $('#note').val();
        console.log("Adding note: " + note);
		//TODO: submit to DB once DB is up and running
	}
}
	    

