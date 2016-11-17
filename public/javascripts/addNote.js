/**
 * Description
**/
$(document).ready(function() {

    $("#addNote").submit(function (e) {
        e.preventDefault();
        //submit to DB
        //var note = $('#note').val();
        console.log("Adding note: " + note);
    });
});