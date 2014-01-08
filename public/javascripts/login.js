$(document).ready( function(){

    $("header#header").on("click" , "#facebook-login" , function(event){
       login();
    });
    
    //var render_flag = true;
    $("header#header").on("click" , "#google-login" , function(event){
       google_login();
    });
    /*$("div.now").on("click" , ".google-share" , function(event){
    
        
        $(this).attr('id' , 'google-active');
      var ele_id = $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                                 
      var title = ele_id.children('.title').html();
      var img = "footyjokes.herokuapp.com/" + ele_id.children('.imgholder').children('.img-rounded').attr('src');
      var content = ele_id.children('.content').text();
      
      if(render_flag){
        googleShare('google-active');
        render_flag = false;
      }
      else{
        render_flag = true;
      }
      $('google-active').trigger( "click" );
      //console.log(img);
      //share(title , img , content);
      event.preventDefault()
      //share();
    });*/
});
