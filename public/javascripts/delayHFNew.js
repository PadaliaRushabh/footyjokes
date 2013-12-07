$(document).ready(function() {
var msnry = new Masonry(container);
//show header with delay
$('#header')
	.hide()
	.delay(1000)
	.show(800);

//show footer with delay
$('#footer')
	.hide()
	.delay(1000)
	.show(800);
	

$(window).load( function() {
    var container = document.querySelector('#container'); //returns the first element in the document
        var msnry = new Masonry(container);
        $(container).bind("click" , function(event){
            if(!$(event.target).hasClass('item')){
                return;
            }
            $(event.target).toggleClass('gigante');
        //var html = "<input type='text' id='myTextBox'> </input>\n<button>PRESS</button>";
        //$(event.target).append(html);
            msnry.layout();
        /*$('#container').masonry({
            itemSelector: '.item',
            columnWidth: 120,
            //"gutter": 10,
            "isFitWidth": true
        }); 
         console.log("target class");*/
        });
    
    /*$( function() {
        $('#container').masonry({
            itemSelector: '.item',
            columnWidth: 120,
            //"gutter": 10,
            "isFitWidth": true
        });
        console.log("ok");

    });*/
});
    
/*$(window).resize(function() {        
        msnry.layout();
        console.log("ok");
        $('ul .dropdown-menu').css('z-index', 3000);
     });*/
});
/*
function setContainerWidth(){
    var winWidth = $(window).width();
    console.log("Width con:" + winWidth);
    if(winWidth <= 480){
        return 295;
    }
    else if(winWidth <= 768) {
        return 440;
	} else if(winWidth < 1000) { //1000
		return 660; //660
	} else if(winWidth < 1200) { //1100
		return 880; //880
	} else {
		return 1100; //1100
	    }

}
*/

