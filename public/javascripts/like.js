

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
                var ele_id = $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                                 
                var title = ele_id.children('.title').html();
                var img = "footyjokes.herokuapp.com/" + ele_id.children('.imgholder').children('.img-rounded').attr('src');
                var content = ele_id.children('.content').text();  
       
           
                    var data = 
                    {
                        caption: 'This is my wall post example',
                        message: 'Posted using FB.api',
                        link: 'http://footyjokes.herokuapp.com',
                    }
                    FB.api('/me/feed','post' ,data , function(response){
                    
                        console.log(response) 
                    
                    
                    });
               
               
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



