/*
    DESCRIPTION: jquery related to comments.
*/

$(document).ready(function() {
    $(".clickable").click(function(){
        $('.comment-textbox').toggle('slow'); // on button press hide and unhide comment textbox
    });
    $('.comment-textbox').hide(); // initially hide out comment textbox
});
