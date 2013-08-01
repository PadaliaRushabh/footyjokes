$(document).ready(function() {

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

var currentWidth = 1100;
//blocksit define
$(window).load( function() {
    //console.log("Cols:" + setCols())
	var conWidth = setContainerWidth();
	if(conWidth != currentWidth) {
        currentWidth = conWidth;
	    $('#container-grid').width(conWidth);
    }
	$('#container-grid').BlocksIt({
		numOfCol: setCols(),
		offsetX: 8,
		offsetY: 8,
		blockElement: '.grid'
	});

});

//on window resize
    $(window).resize(function() {
	    /*var winWidth = $(window).width();
	    var conWidth;
	    if(winWidth < 660) {
		    conWidth = 440;
		    col = 2
	    } else if(winWidth < 880) {
		    conWidth = 660;
		    col = 3
	    } else if(winWidth < 1100) {
		    conWidth = 880;
		    col = 4;
	    } else {
		    conWidth = 1100;
		    col = 5;
	    }*/

        var conWidth = setContainerWidth();
	    if(conWidth != currentWidth) {
		    currentWidth = conWidth;
		    $('#container-grid').width(conWidth);
		    /*$('#container-grid').BlocksIt({
			    numOfCol: setCols(),
			    offsetX: 8,
			    offsetY: 8,
			    blockElement: '.grid'
		    });*/
	    }
	    //console.log("Cols:" + setCols())
        $('#container-grid').BlocksIt({
		    numOfCol: setCols(),
		    offsetX: 8,
		    offsetY: 8,
		    blockElement: '.grid'
	    });
    });
});


function setCols(){
     var winWidth = $(window).width();
    console.log("Width:" + winWidth);
     if(winWidth >= 1200)
        return 3;
     else if(winWidth > 768 && winWidth < 1200 )
        return 2;
     else
        return 1;
}

function setContainerWidth(){
    var winWidth = $(window).width();
    console.log("Width con:" + winWidth);
    if(winWidth <= 768) {
		    return 440;
	    } else if(winWidth < 1000) { //1000
		    return 660; //660
	    } else if(winWidth < 1200) { //1100
		    return 880; //880
	    } else {
		    return 1100; //1100
	    }

}
