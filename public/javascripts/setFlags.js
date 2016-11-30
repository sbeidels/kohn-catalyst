/**
 * Handles the Front end for 'highlighting' fields
 */

//global glyph values
var star = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
var empty_star = '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'


$(document).ready(init);

function init() {

    setupHlFlags();

    $('.container').on('click', '.highlight', toggleHL);
}

//find all fields that can be highlighted and initialize the pretty pictures
function setupHlFlags() {
    $(".highlight").each(function (index, obj) {
        if(obj.innerText == "true"){
            obj.innerHTML = star;
        }
        else
        {
            obj.innerHTML = empty_star;
        }
    });
}

//Checks the html for the span tag passed in and returns the opposite
function toggleHlGlyph(span) {
    if(span == star){
        span = empty_star;
    }
    else{
        span = star;
    }
    return span;
}

function toggleHL() {

    var field = $(this).attr('id');
    console.log("Value to update: " + field);
    console.log("Highlight Package ID: " + $("#hl_Id").val());

    //POST field to api route
    var payload = {};
    payload.name = field;

    //POST the data to the database
    var posting = $.ajax({
        type : 'POST',
        url: "/edit/highlight/" + $("#hl_Id").val(),
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(payload)
    });
    posting.done(function (xhr) {
        if(xhr.status == 200) {
            //on success, toggle the glyph
            $(this)[0].firstChild.outerHTML = toggleHlGlyph($(this)[0].firstChild.outerHTML);
        }
        else{
            console.log("Failed to update");
        }
        // If code is not 200 forward below to .fail()
    });

    posting.fail(function (data)
    {
        console.log("Failed to POST");
        // The save failed, just do nothing and leave the form without losing their typed data
    });
}