jQuery(document).ready(function($){
	$(".sliders").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false
	});

	$(".menu li").on('click', function(){
		$(".menu li").removeClass("active");
		$(this).addClass("active");
	});

});