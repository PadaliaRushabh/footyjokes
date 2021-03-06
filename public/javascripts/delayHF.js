$(document).ready(function() {
	//vendor script
	$('#header')
	.hide()
	.delay(1000)
	.show(800);

	$('#footer')
	.hide()
	.delay(1000)
	.show(800);

	//blocksit define
	$(window).load( function() {
		$('#container-grid').BlocksIt({
			numOfCol: 3,
			offsetX: 8,
			offsetY: 8
		});
	});

	//window resize
	var currentWidth = 1100;
	$(window).resize(function() {
		var winWidth = $(window).width();
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
		}

		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('#container-grid').width(conWidth);
			$('#container-grid').BlocksIt({
				numOfCol: col,
				offsetX: 8,
				offsetY: 8
			});
		}
	});
});
