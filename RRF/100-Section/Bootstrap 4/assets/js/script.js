(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".sliders").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true
        });

        $(".logo_carousel").owlCarousel({
        	items: 5,
        	loop: true,
        	nav: false,
        	dots: false,
        	autoplay: false,
            margin: 30
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	