
$(document).ready(function(){
    $("div.now").on("click" , ".facebook-share" , function(event){
      
        var ele_id = $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                                 
        var title = ele_id.children('.title').html();
        var img = "footyjokes.herokuapp.com/" + ele_id.children('.imgholder').children('.img-rounded').attr('src');
        var content = ele_id.children('.content').text();  
       
        FB.api('/me', function(response) {
               
            var name = response.name + " shared FootyJokes post";
            fb_share(name , title , img , content);        
        });
    
    });
    

    
});
