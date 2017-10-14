jQuery(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		autoplay: false
	});
	$(".team-carousel").owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		margin: 30
	});
	$(".team-members-list").owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		margin: 30
	});
	$(".brand-list").owlCarousel({
		items: 5,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		margin: 30
	});

	$(".circle").circleProgress({
		value: 0.9,
		size: 260,
		fill: '#088E93',
		thickness: 3
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.web-circle').html(Math.round(90 * progress) + '<i>%</i>');
  });
	$(".circle1").circleProgress({
		value: 0.95,
		size: 260,
		fill: '#088E93',
		thickness: 3
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.graphic-circle').html(Math.round(95 * progress) + '<i>%</i>');
  });
	$(".circle2").circleProgress({
		value: 0.84,
		size: 260,
		fill: '#088E93',
		thickness: 3
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.marketing-circle').html(Math.round(84 * progress) + '<i>%</i>');
  });

	$(".portfolio-menu li").on('click', function(){
		$(".portfolio-menu li").removeClass("active");
		$(this).addClass("active");

		var filterValue = $(this).attr("data-filter");

		$(".portfolio-isotope").isotope({
		filter: filterValue,
		layoutMode: 'masonry',
  		masonry: {
  			columnWidth: '.col-md-3',
  		}
	})
	})

	


	$(".portfolio-isotope").isotope({
  		layoutMode: 'masonry',
  		masonry: {
  			columnWidth: '.col-md-3',
  		}
	})

});	