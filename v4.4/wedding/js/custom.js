       $(document).ready(function () {
                $(document).on("scroll", function () {
                    if
                            ($(document).scrollTop() > 200) {
                        $("header").addClass("shrink");
                    }
                    else
                    {
                        $("header").removeClass("shrink");
                    }


                });
                $(".menu-toggle").click(function () {
                    $(".nav-toggle").toggle();
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
                                }, 400);
                                return false;
                            }
                        }
                    });
                });
                  /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = 99 * 24 * 60 * 60 * 1000 + now.valueOf();    
    $('.timer').countdown(countTo, function(event) {
    	$(this).find('.days').text(event.offset.totalDays);
    	$(this).find('.hours').text(event.offset.hours);
    	$(this).find('.minutes').text(event.offset.minutes);
    	$(this).find('.seconds').text(event.offset.seconds);
    });
                /*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();
 $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1700);
    });
            });//document.ready


