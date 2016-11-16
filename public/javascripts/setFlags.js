/**
 * Created by fitz on 11/16/16.
 */

$(document).ready(function() {
    makeClickable();

    function makeClickable() {
        console.log('in makeClickable');

        $("a[data-name]").each(function(index) {
            // Save the text in the value
            var dataName = $(this).attr("data-name");

            // Log it for debugging
            console.log('dataName is: %s', dataName);

            // Reduce it to a max depth of two levels

            // Append and href to invert the current selection in the database

            // Log the invert for debugging

        })
    }
});