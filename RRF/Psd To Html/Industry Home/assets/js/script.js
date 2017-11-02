(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".sliders").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true
        });

        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

$("ul#navigation").slicknav({
        prependTo: ".slicknav-menu"
    });