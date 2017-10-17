jQuery(document).ready(function($){
    $(".portfolio-list").masonry({
        itemSelector: '.single-item',
          columnWidth: '.single-item',
          percentPosition: true
    });

    $(".single-item").hover(function(){
    	$(".single-img-hover h4, .single-img-hover p").removeClass("animated fadeInUp")
    	$(this).find(".single-img-hover h4, .single-img-hover p").addClass("animated fadeInUp")
    })

    $(".offcanvas-menu ul li").on('click', function(){
    	$(".offcanvas-menu ul li").removeClass("active")
    	$(this).addClass("active")
    })

    $(".menu-collapse").on('click', function(){
    	$(".offcanvas").addClass("active2")
    	$(".offcanvas-overlay").addClass("active")
    })

    $(".close-btn, .offcanvas-overlay").on('click', function(){
    	$(".offcanvas").removeClass("active2")
    	$(".offcanvas-overlay").removeClass("active")
    })
})	