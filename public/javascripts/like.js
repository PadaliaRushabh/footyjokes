

$(document).ready( function(){
    $(".like").click(function(event){
   
        var ele_id = $(this)
                    .parent(".inputs")
                    .parent()
                    .attr("id");
      
        $.ajax({
            type:"POST",
            cache:false,
            url:"LikePost",
            data:{"id": ele_id},
            dataType: "json",
           
            success: function(res_like){
                //console.log(res_like);
                var target = $(event.target);
                var likeStatus = res_like.like_status.toString() === "true" ? true : false;
                //console.log(likeStatus);
                target.html("Like " + res_like.like);
                
                if(likeStatus){
                    target.removeClass("btn-success").addClass("btn-danger");
                }
                else{
                    target.removeClass("btn-danger").addClass("btn-success");
                }
                
            }
       });
       event.preventDefault();
    });
});



