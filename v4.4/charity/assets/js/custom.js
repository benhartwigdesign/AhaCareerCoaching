$(document).ready(function () {
    
    //nav toggle
    $(".nav-toggle").click(function(){
    $(".side-panel").toggle();
});
    
    wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
                mobile: true
            }
    );
    wow.init();
//counters
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("fixed");
  }
  else{
    $('.navbar').removeClass("fixed");
  }
});