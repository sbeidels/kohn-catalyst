/**
 * Created by fitz on 11/16/16.
 */

$(document).ready(function() {

    // var count = 0;
    makeClickable();

    function makeClickable() {
        console.log('in makeClickable');

        $("a[data-name]").each(function(index) {
            // Save the text in the value
            var dataName = $(this).attr("data-name");

            // Log it for debugging
            // console.log('dataName is: %s', dataName);

            // Reduce it to a max depth of two levels
            var cutAfter = dataName.indexOf('.', dataName.indexOf('.')+1);
            if (cutAfter > 0) {
                dataName = dataName.slice(0, cutAfter);
            }

            console.log('new dataName: %s', dataName);

            // Select the <td> cell to put/remove flag
            $(this).prev().prev()

            // Append an href to invert the current selection in the database

            // Log the invert for debugging

        })
    }
});

var str = 'this.those.that',
    delimiter = '.',
    start = 1,
    tokens = str.split(delimiter).slice(start),
    result = tokens.join(delimiter); // those.that