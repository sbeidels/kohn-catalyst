/**
 * Description
**/
$(document).ready(function() {

    $("#addNote").click(function (e) {
        //submit to DB
        var note = $('#note').val();
        console.log("Adding note: " + note);
    });
});