jQuery(document).ready(function($){
	$(".partners-list").owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		nav: false,
		dot: false,
		margin: 30
	});

	$(".slider-area").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		nav: false,
		dot: false
	})
});