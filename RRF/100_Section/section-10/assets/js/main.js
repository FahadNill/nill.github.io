jQuery(document).ready(function($){
	$(".homepage-sliders").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
	});
});