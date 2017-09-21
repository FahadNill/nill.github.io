jQuery(document).ready(function($) {
    $(".team_carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000
    });
});	 