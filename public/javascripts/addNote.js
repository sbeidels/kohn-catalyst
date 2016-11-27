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

        var payload = {};
        payload.description = $('#note').val();
        payload.applicationId = $('#appId').val();
        // TODO: Pass in application ObjectId somehow...
        //POST the data to the database
        var posting = $.ajax({
            type : 'POST',
            url: "/view/addNote",
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(payload)
        });
        posting.done(function (xhr) {
            if(xhr.status == 200) {
                //build the new row
                var newRow = '<tr class="success"><td>' + getDate() + '</td>' + '<td>' + $('#note').val() + '</td><td><button type="submit" class="delete-button btn btn-danger">Delete Note</button></td></tr>';
                //add new row before the very last row in the table (input form row)
                $('#notes-body tr:last').before(newRow);
                //clear value
                $('#note').val("");
            }
            else{
                console.log("Whoops, something went wrong");
            }
            // If code is not 200 forward below to .fail()
        });

        posting.fail(function (data)
        {
            console.log("Whoops, something went wrong");
            // The save failed, just do nothing and leave the form without losing their typed data
        });

    }
}

function deleteNote(e) {
    e.preventDefault();
    //TODO: submit to DB once DB is up and running
    var noteId = $(this).closest("form").find("input[name='noteId']").val();
    var noteSelected = $(this);
    var payload = {};
    payload.noteId = noteId;

    var posting = $.ajax({
        type : 'POST',
        url: "/view/delNote",
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(payload)
    });
    posting.done(function (xhr) {
        if(xhr.status == 200) {
            //remove row
            noteSelected.closest('tr').remove();
        }
        else{
            console.log("Did not receive 200 status for deleting note");
        }
    });
    posting.fail(function (data)
    {
        console.log("Whoops, something went wrong");
    });

}

//get date in a nice format
function getDate() {
    var date = new Date();
    var Year = date.getFullYear();
    var Day = ( "00" + date.getDate()).slice(-2);
    var Mon = ("00" + (date.getMonth()+1)).slice(-2);
    return Mon + "/" + Day + "/" + Year;
}