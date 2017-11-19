$(document).ready(function() {
 
  $("#owl-product,#owl-product2,#owl-product3,#owl-product4,#owl-product5,#owl-product6").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items :3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
 pagination:false,
 navigation:true,
 navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
 
});

$(document).ready(function() {
 
  $("#half-slide2").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items :1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
 pagination:false,
 navigation:true,
 navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
 
});
$(document).ready(function() {
 
  $("#half-slide, #half-slide2").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items :1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
 pagination:false,
 navigation:true,
 navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
 
});
$(document).ready(function() {
 
  $("#p-slide").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items :1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
 pagination:false,
 navigation:true,
 navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
 
});