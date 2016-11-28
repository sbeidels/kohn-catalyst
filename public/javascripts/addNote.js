/**
 * This script handles adding and removing of vetting notes
**/

$(document).ready(init);

function init() {

    $('#addNote').on('click', addNote);
    //since delete/update buttons are dynamically added, the click listener is on the table body
    $('#notes-body').on('click', '.delete-button', deleteNote);
    $('#notes-body').on('click', '.update-button', setUpForm);
    $('#notes-body').on('click', '.submit-update-button', updateNote);
    $('#notes-body').on('click', '.cancel-button', cancelUpdate);

}

function addNote(e) {
    e.preventDefault(); //don't refresh page/POST

    //append new row with delete button
    if($('#note').val() != "") {

        var payload = {};
        payload.description = $('#note').val();
        payload.applicationId = $('#appId').val();

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
                //check if the empty notes row exists and delete if so
                var emptyNotes = $('#empty-notes');
                if(emptyNotes != null)
                {
                    emptyNotes.closest('tr').remove();
                }

                //build the new row
                var date = '<td>' + getDate() + '</td>';
                var newNote = '<td>' + $('#note').val() + '</td>';
                var hiddenNoteId = '<input type="hidden" value="' + xhr.noteId + '" name="noteId" />';
                var deleteButton = '<button type="submit" class="delete-button btn btn-danger">Delete Note</button>';
                var newRow = '<tr class="success">' + date + newNote + '<td><form>' + hiddenNoteId + deleteButton + '</form></td></tr>';
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

/**
 * Sets up the html for editing
 */
function setUpForm(e) {
    e.preventDefault();
    //the note we want will be the first child of the following search
    var note = $(this).closest("tr").find(".note-descrip");
    //make the text into a text area for editing
    note.html('<textarea id="note" class="form-control note-textarea" placeholder="Update Note Here...">' + note[0].innerText + '</textarea>');

    //change update note button to submit change button
    $(this).val("Submit Update");
    $(this).attr("class", "submit-update-button btn btn-warning");
    //change delete button to cancel button
    var cancelButton = $(this).closest("td").find(".delete-button")
    cancelButton.val("Cancel");
    cancelButton.attr("class", "cancel-button btn btn-danger");
}

function updateNote(e) {
    e.preventDefault();
    //save items for after POST
    var note = $(this).closest("tr").find(".note-descrip");
    var updateButton = $(this);
    var cancelButton = $(this).closest("td").find(".cancel-button");
    var noteId = $(this).closest("form").find("input[name='noteId']").val();
    //using .value since innerHTML and other don't get updated
    var notedDescrip = $(this).closest("tr").find(".note-textarea")[0].value;

    var payload = {};
    payload.description = notedDescrip;
    payload.id = noteId;

    //POST the data to the database
    var posting = $.ajax({
        type : 'POST',
        url: "/view/updateNote",
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(payload)
    });
    posting.done(function (xhr) {
        if(xhr.status == 200) {
            //revert form into just text
            note[0].innerHTML = notedDescrip;
            //revert buttons
            updateButton.val("Update Note");
            updateButton.attr("class", "update-button btn btn-info");
            cancelButton.val("Delete Note");
            cancelButton.attr("class", "delete-button btn btn-danger");
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

function cancelUpdate(e){
    e.preventDefault();
    var note = $(this).closest("tr").find(".note-descrip");
    var notedDescrip = $(this).closest("tr").find(".note-textarea")[0].value;
    var cancelButton = $(this);
    var updateButton = $(this).closest("td").find(".submit-update-button");

    //revert form into just text
    note[0].innerHTML = notedDescrip;
    //revert buttons
    updateButton.val("Update Note");
    updateButton.attr("class", "update-button btn btn-info");
    cancelButton.val("Delete Note");
    cancelButton.attr("class", "delete-button btn btn-danger");
}

//get date in a nice format
function getDate() {
    var date = new Date();
    var Year = date.getFullYear();
    var Day = ( "00" + date.getDate()).slice(-2);
    var Mon = ("00" + (date.getMonth()+1)).slice(-2);
    return Mon + "/" + Day + "/" + Year;
}