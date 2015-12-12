$(document).ready(function(){


function makeGrid() {
	for (i=0; i<16; i++) {
		$('#container').append('<div class = "grid"></div>')
	}
	for (j=0; j<16; j++) {
		$('.grid').append('<div class = "vert"></div>')
	}
}

makeGrid();
$('.vert').hover(function(){
	$(this).addClass('highlight')

});







});