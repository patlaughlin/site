$('.arrow-down').animate({opacity: 1, top: 50 + '%'}, 'slow');

$('.arrow-right').animate({opacity: 1, left: 50 + '%'}, 'slow', function() {
	$('h1').fadeTo('slow', 1);
});
