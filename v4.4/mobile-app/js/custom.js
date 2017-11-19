//Mb App

$(document).on("scroll", function () {
    if
            ($(document).scrollTop() > 100) {
        $("nav").addClass("shrink");
    }
    else
    {
        $("nav").removeClass("shrink");
    }
});

//smooth scroll
$(function () {
    $('.scroll-to a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function () {

    $("#owl-testi").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: true,
        singleItem: true,
        autoplay: true

                // "singleItem:true" is a shortcut for:
                // items : 1, 
                // itemsDesktop : false,
                // itemsDesktopSmall : false,
                // itemsTablet: false,
                // itemsMobile : false

    });
    $("#owl-screens").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: true,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
});
