(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$(".slider_area").owlCarousel({
    		loop: true,
    		items: 1,
    		nav: false,
    		dots: false,
    		autoplay: false
    	});

    	$(".slider_play_button").magnificPopup({
    		type: 'video'
    	});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	