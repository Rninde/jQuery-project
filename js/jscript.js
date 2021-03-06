$(document).ready(function(){

	makeGrid(16);

});

function makeGrid(size) {
	for (i=0; i<size; i++) {
		$('#container').append('<div class = "grid"></div>')
	};
	for (j=0; j<size; j++) {
		$('.grid').append('<div class = "vert"></div>')
	};
	var vertH = 800/size;
	$('.vert').css({'height':vertH, 'width': vertH});
	$('.vert').hover(function(){
		$(this).css('background-color', 'white');
});
};

function colorGrid(size) {
	for (i=0; i<size; i++) {
		$('#container').append('<div class = "grid"></div>')
	};
	for (j=0; j<size; j++) {
		$('.grid').append('<div class = "vert"></div>')
	};
	var vertH = 800/size;
	$('.vert').css({'height':vertH, 'width': vertH});
	$('.vert').hover(function(){
		$(this).css('background-color', function(){
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for (var k=0; k<6; k++) {
				color += letters[Math.floor(Math.random()*16)];
			};
			return color;
		});
});
};



$('#resize').on('click', function(){
	var gridS = prompt('What size?');
	$('.vert').remove();
	$('.grid').remove();
	makeGrid(gridS);

})

$('#rainbow').on('click', function(){
	var gridS = prompt('What size?');
	$('.vert').remove();
	$('.grid').remove();
	colorGrid(gridS);

})