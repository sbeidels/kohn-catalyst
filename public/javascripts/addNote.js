/**
 * This script handles adding and removing of vetting notes
**/

$(document).ready(init);

function init() {

    $('#addNote').on('click', addNote);
    //since delete buttons are dynamically add, the click listener is on the table body
    $('#notes-body').on('click', '.delete-button', deleteNote);

}

function addNote(e) {
    e.preventDefault();
    //TODO: submit to DB once DB is up and running
    //append new row with delete button
    if($('#note').val() != "") {
        var newRow = '<tr><td>' + getDate() + '</td>' + '<td>' + $('#note').val() + '</td><td><button type="submit" class="delete-button btn btn-danger">Delete Note</button></td></tr>';
        $('#notes-body tr:last').before(newRow);
        //clear value
        $('#note').val("");
    }
}

function deleteNote(e) {
    e.preventDefault();
    //TODO: submit to DB once DB is up and running
    //remove row
    $(this).closest('tr').remove();
}

//get date in a nice format
function getDate() {
    var date = new Date();
    var Year = date.getFullYear();
    var Day = ( "00" + date.getDate()).slice(-2);
    var Mon = ("00" + (date.getMonth()+1)).slice(-2);
    return Mon + "/" + Day + "/" + Year;
}