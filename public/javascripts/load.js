
$(document).ready(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height() ) {
            //console.log("near bottom!");
            getBoxes();
        };
    });
    
     $.ajax({
            type:"POST",
            cache:false,
            url:"Boxes",
            data:{"refresh": true},
            dataType: "html", 
            success: function(boxHTML){
                
                $(".now").append(boxHTML);
            
    
               //console.log(id)
                $.ajax({
                    type:"POST",
                    cache:false,
                    url:"LikeID",
                    dataType: "json", 
                    success: function(Objid){
                        Objid.forEach(function(id){
                            console.log(id)
    
                                $("#" + id._id).children(".inputs").children("button:first").addClass('btn-danger').removeClass('btn-success');
                            
                        
                        })
                    }
            });
        }
   });
});

var getBoxes = function(){
    
    //var count = 0;
    $.ajax({
            type:"POST",
            cache:false,
            url:"Boxes",
            dataType: "html",
            data:{"refresh":false},
            success: function(boxHTML , id){
                console.log(id)
                $(".next").append(boxHTML);
            }
    });
   
    /*$.post("Boxes", function(data){
        console.log(data);
    });   */       
};
