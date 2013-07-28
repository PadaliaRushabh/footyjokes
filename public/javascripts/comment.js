/*
    DESCRIPTION: jquery related to comments.
*/

$(document).ready(function() {
    $(".comment").click(function(){
        var ele_id = $(this)
                .parent(".inputs")
                .parent()
                .attr('id'); // get the parent unique id to get the box on which we have to toggle textbox
        var id = "#"+ele_id;
        $(id).toggleClass('oncommentdisplay');
        var ele_txt = "#"+ele_id + " .inputs .comment-textbox "; //get the textbox of the previously found box
        $(ele_txt).slideToggle('slow'); // on button press hide and unhide comment textbox
    });
    $('.comment-textbox').hide(); // initially hide out comment textbox

});
