jQuery(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		autoplay: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	        }
	    }

	});
    
    // SLider Animation //
    
    $(".homepage-slides").on("translate.owl.carousel", function(){
        $(".slide1-text h2, .slide1-text .img-video").removeClass("animated fadeInUp").css("opacity", "0");
        $(".slide1-text .boxed-button").removeClass("animated fadeInLeft").css("opacity", "0");
    });
    $(".homepage-slides").on("translated.owl.carousel", function(){
        $(".slide1-text h2, .slide1-text .img-video").addClass("animated fadeInUp").css("opacity", "1");
        $(".slide1-text .boxed-button").addClass("animated fadeInLeft").css("opacity", "1");
    });
    
    //SLider Animation End //
    
	$(".team-carousel").owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
		margin: 30,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});
	$(".team-members-list").owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
		margin: 30,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});
	$(".brand-list").owlCarousel({
		items: 5,
		loop: true,
		nav: false,
		dots: false,
		autoplay: false,
		margin: 30,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:5,
	        }
	    }
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
	});

		var filterValue = $(this).attr("data-filter");

		$(".portfolio-isotope").isotope({
		filter: filterValue,
		layoutMode: 'masonry',
  		masonry: {
  			columnWidth: '.col-md-3',
  		}
	});


	$(".portfolio-isotope").isotope({
  		layoutMode: 'masonry',
  		masonry: {
  			columnWidth: '.col-md-3',
  		}
	});
    
    
    $(".envato").magnificPopup({
        type: 'image'
    });
    
    
});	

jQuery(window).load(function(){
    jQuery(".preloader").fadeOut(500);
})

$(".totop").tottTop();

$("ul#navigation").slicknav({
        prependTo: ".slicknav-menu",
        allowParentLinks: true
    });

new WOW().init();



