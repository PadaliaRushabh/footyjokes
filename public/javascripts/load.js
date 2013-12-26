
$(document).ready(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height() ) {
            //console.log("near bottom!");
            getBoxes(0);
        };
    });
    
     $.ajax({
            type:"POST",
            cache:false,
            url:"Boxes",
            data:{"count": 0},
            dataType: "html", 
            success: function(boxHTML){
                $(".now").append(boxHTML);
            
    
    
                $.ajax({
                    type:"POST",
                    cache:false,
                    url:"LikeID",
                    data:{"count": 0 , "user_id":id},
                    dataType: "json", 
                    success: function(Objid){
                        Objid.forEach(function(id){
                            console.log(id)
                            if(id._id!= '' || id._id!=null) {
                                $("#" + id._id).children(".inputs").children("button:first").addClass('btn-danger').removeClass('btn-success');
                            } 
                        
                        })
                    }
            });
        }
   });
});

var getBoxes = function(count){
    
    //var count = 0;
    $.ajax({
            type:"POST",
            cache:false,
            url:"Boxes",
            data:{"count": count},
            dataType: "html",
            success: function(boxHTML , id){
                console.log(id)
                $(".next").append(boxHTML);
            }
    });
   
    /*$.post("Boxes", function(data){
        console.log(data);
    });   */       
};
