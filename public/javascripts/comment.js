/*
    DESCRIPTION: jquery related to comments.
*/

$(document).ready(function() {
    var ele_id;
    $(".comment").click(function(){
        ele_id = $(this)
                .parent(".inputs")
                .parent()
                .attr('id'); // get the parent unique id to get the box on which we have to toggle textbox
        $.ajax({
            type:"POST",
            cache:false,
            url:"Comment",
            data:{"id": ele_id},
            dataType: "json",
        
            success:function(res_post){
                var html = '';
                var comment = res_post.comment;
                //console.log(res_post);
                res_post.comment.forEach(function(comment){
                    html = html + "<div class='media'>"
                    html = html + "<a class='pull-left' href='#'> <img class='media-object' width='45px' height='20px' src= " + res_post.article_image  + "> </a>"
                    html = html + "<div class='media-body'> <h4 class='media-heading'>" + comment.by +   "</h4>"
                   // console.log(comment);
                    html = html + comment.comment
                    html = html + "</div> </div> <hr>"
                });
                //console.log(html);
                $('#myModal')
                    .children(".modal-body")
                    .html(html);
                    
                $('#myModal')
                    .children(".modal-header")
                    .html("<h4>" + res_post.title + "</h4>");
                    
                /*$('#myModal')
                    .children(".modal-footer")
                    .html("something");*/
                    
                $('#myModal')
                    .removeData('modal')
                    .modal('show');
            }
        });
        var id = "#"+ele_id;
        $(id).toggleClass('oncommentdisplay');
        var ele_txt = "#"+ele_id + " .inputs .comment-textbox "; //get the textbox of the previously found box
        //$(ele_txt).slideToggle('slow'); // on button press hide and unhide comment textbox       
    });
    
    $(".comment-modal").click(function(event){
    
    
        var comment = $(".comment-textarea").val();
        var html = '';
         $.ajax({
            type:"POST",
            cache:false,
            url:"InsertComment",
            data:{"id": ele_id , "comment": comment  ,"login_id": id},
            dataType: "json",
            success:function(comment){
                    html = html + "<div class='media'>"
                    html = html + "<a class='pull-left' href='#'> <img class='media-object' width='45px' height='20px' src= " + "images/me.jpg" + "> </a>"
                    html = html + "<div class='media-body'> <h4 class='media-heading'>" + comment.by +   "</h4>"
                   // console.log(comment);
                    html = html + comment.comment
                    html = html + "</div> </div> <hr>"
                    
                    $('#myModal')
                    .children(".modal-body")
                    .append(html);
                    
                    $(".comment-textarea").val("");
            }
        });
        
        
        console.log(ele_id);
   });
    $('.comment-textbox').hide(); // initially hide out comment textbox

});
