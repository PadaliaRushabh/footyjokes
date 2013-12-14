$(document).ready( function(){
    $('#facebook-login').click(function(event){
       login();
    });
    
    $('.facebook-share').click(function(event){
      var ele_id = $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    
                    
                   
                    
      var title = ele_id.children('.title').html();
      var img = "footyjokes.herokuapp.com/" + ele_id.children('.imgholder').children('.img-rounded').attr('src');
      var content = ele_id.children('.content').text();
      //console.log(img);
      share(title , img , content);
      event.preventDefault()
      //share();
    });
});
