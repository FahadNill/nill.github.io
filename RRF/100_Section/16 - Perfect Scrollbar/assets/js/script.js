jQuery(document).ready(function($){

	$(".portfolio-menu li").on('click', function() {

		var filterData = $(this).attr("data-filter");

		$(".portfolio-list").isotope({
			filter: filterData,
		});

		$(".portfolio-menu li").removeClass('active');
		$(this).addClass('active');

	});

	$(".portfolio-list").isotope({
		itemSelector: '.single-portfolio',
		percentPosition: true,
		masonry: {
			columnwidth: '.single-portfolio',
			horizontalOrder: true
		}
	});


	$("body").perfectScrollbar();
	$(".scrolled").perfectScrollbar({
		theme: 'green'
	});

});