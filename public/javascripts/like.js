

$(document).ready( function(){
    $("div.now").on("click" ,".like",function(event){
        var ele_id = $(this)
                    .parent(".inputs")
                    .parent()
                    .attr("id");
        $.ajax({
            type:"POST",
            cache:false,
            url:"LikePost",
            data:{"id": ele_id , "user_id": id},
            dataType: "json",
           
            success: function(res_like){
                console.log(res_like.like_found);
                var target = $(event.target);
                var likeStatus = res_like.like_found == 1 ? true : false;
                //console.log(likeStatus);
                target.html("Like " + res_like.like);
                
                if(!likeStatus){
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



