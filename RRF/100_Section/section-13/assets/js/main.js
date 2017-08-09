jQuery(document).ready(function($){

	var homepageSlides = $(".homepage-slides");
	homepageSlides.owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
	});

	homepageSlides.on('translate.owl.carousel', function(event) {
	   $(".bg-text h6").removeClass("animated bounceIn");
	   $(".bg-text h1").removeClass("animated jackInTheBox");
});

	homepageSlides.on('translated.owl.carousel', function(event) {
	   $(".bg-text h6").addClass("animated bounceIn");
	   $(".bg-text h1").addClass("animated jackInTheBox");
});

}); 