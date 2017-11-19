/* 
 * piple Minimal template
 * version - v1.0
 * created by - Codepiple
 */



//parallax-background
$(function() {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
});


//about img slider carousel

$(document).ready(function() {

    $("#about-img-slide").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        autoPlay: true
    });

});

/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
        }
);
wow.init();


$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


/*=========================*/
/*========portfolio mix====*/
/*==========================*/
$('#grid').mixitup();