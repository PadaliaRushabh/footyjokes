
$(document).ready(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height() ) {
            console.log("near bottom!");
            getBoxes(0);
        };
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
            success: function(boxHTML){
                console.log(boxHTML)
                $(".next").append(boxHTML);
            }
    });
   
    /*$.post("Boxes", function(data){
        console.log(data);
    });   */       
};
