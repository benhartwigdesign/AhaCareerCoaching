/*----------- Eshop// author: STW Services LLP // www.softechworld.com ---------- */
(function($) {
	"use strict";
	var Eshop={
		/*START OF ESHOP*/
		initialised: false,
		 eTabs:$('#tabs-main'),
		 eLight:$('#light'),
		 eDark:$("#dark"),
		 eHeightAdd:$("#dark"),
		 eSevariationBtn:$(".se-variation-btn"),
		 eSearchAnchor:$('.search a'),
		 eSearchClose:$('.search-close'),
		 eSpinc:$('.spinc'),
		Init:function()
		{
			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			// Call Eshop functions			
			this.SideBar();
			this.RangeSlider();
			this.InitProductImgResponsive();
			this.ResponsiveMenu();
			this.CategoriesMenu();
			this.OwlSlider();
			
		},
		ResponsiveMenu: function()	
		{
		
			var menu = $('#header').find('.menu').clone(true).removeClass('menu clearfix').addClass('responsive-menu'),
				container = $('#header').find('#responsive-menu-container');
					
			container.append(menu);
			
			
			container.find('li, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-6, .col-md-2, .col-md-3, .col-md-4, .col-md-6').each(function () {

				var $this = $(this);
				
				if ($this.hasClass('megamenu-container')) {
					$this.removeClass('megamenu-container');
				}

				$this.has('ul, .megamenu').prepend('<span class="menu-btn-wrapper"><i class="fa fa-plus"></i></span>');
				
			});
			
			$('.menu-btn-wrapper').on('click', function (e) {
				var $this= $(this);
				
				if (! $this.hasClass('active') ) {
					$(this)
					.closest('li, div')
					.addClass('open')
					.end()
					.addClass('active')
					.siblings('.sub-menu, .mega-menu')
					.slideDown('800');
				}else {
					$(this)
					.closest('li, div')
					.removeClass('open')
					.end()
					.removeClass('active')
					.siblings('.sub-menu, .mega-menu')
					.slideUp('800');
				}
				e.preventDefault();
			});
		
			$('#responsive-btn').on('click', function (e) {
				var $this = $(this),
					container = $('#responsive-menu-container');
				
				if( $this.hasClass('active')) {
					container.slideUp(300, function () {
						$this.removeClass('active');
					});
				
				}else {
					container.slideDown(300, function () {
						$this.addClass('active');
					});
				}
				e.preventDefault();
			});
		},
		CategoriesMenu:function()	
		{
		
		$('.category-contant ul li a').on('click', function (e) {
				var $this= $(this);
				
				if (! $this.hasClass('active') ) {
					$(this)
					.closest('li, div')
					.addClass('open')
					.end()
					.addClass('active')
					.siblings('.side-sub-menu, .mega-menu')
					.slideDown('800');
				}else {
					$(this)
					.closest('li, div')
					.removeClass('open')
					.end()
					.removeClass('active')
					.siblings('.side-sub-menu, .mega-menu')
					.slideUp('800');
				}
				e.preventDefault();
			});
		
		$('#categories').on('click', function (e) {
				var $this = $(this),
					container = $('#category-menu');
				
				if( $this.hasClass('active')) {
					container.slideUp(300, function () {
						$this.removeClass('active');
					});
				
				}else {
					container.slideDown(300, function () {
						$this.addClass('active');
					});
				}
				e.preventDefault();
			});
	},
		SideBar:function(){
		$('.aside > ul > li > a').on('click', function() {
			$(this).toggleClass('active');
		});
		},
	
		RangeSlider:function ()	{
	
			if ($( "#price_range" ).length > 0) {
			$( "#price_range" ).slider( {
				range: true,
				min: 0, // minimum price
				max: 1500, // maximum price
				values: [ 10, 1000 ],
				slide: function( event, ui ) {
					$( "#min_price" ).val( ui.values[ 0 ] );
					$( "#max_price" ).val( ui.values[ 1 ] );
				}
			} );
			// initialize the inputbox values with slider values
			$( "#min_price" ).val( $( "#price_range" ).slider( "values", 0 ) );
			$( "#max_price" ).val( $( "#price_range" ).slider( "values", 1 ) );
			$( "#min_price" ).change( function() {
				$( "#price_range" ).slider( "option", "values", [ $( "#min_price" ).val(), $( "#max_price" ).val() ] );
			} );
			$( "#max_price" ).change( function() {
				$( "#price_range" ).slider( "option", "values", [ $( "#min_price" ).val(), $( "#max_price" ).val() ] );
			} );
		}
	},
		
		InitProductImgResponsive:function() {
		if($('#info-img').length > 0) {
			this.infoImg = new Swiper('#info-img .top-img', {
			nextButton: '#info-img .swiper-button-next',
			prevButton: '#info-img .swiper-button-prev',
			spaceBetween: 10,
			onInit: function(swiper) {
				if( window.matchMedia( "(min-width: 1200px)" ).matches ) {
					create_elevatezoom(swiper);
				}
			},
			onTransitionStart: function(swiper) {
				destroy_elevatezoom();
			},
			onSlideChangeStart: function(swiper) {
				var $thumb_items = $('.thumb-item').removeClass('active');
				for (var i = 0; i < $thumb_items.length; i ++) {
					var $thumb_item = $( $thumb_items[i] );
					if (swiper.activeIndex == $thumb_item.data('index'))
						$thumb_item.addClass('active');
				}
			},
			onSlideChangeEnd: function(swiper) {
				if( window.matchMedia( "(min-width: 1200px)" ).matches ) {
					create_elevatezoom(swiper);
				}
			}
		});
	}
	$('.thumb-item').on('click', function() {
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');
		this.infoImg.slideTo($(this).data('index'));
	});
	},
		
		OwlSlider:function ()
		{
			$(".owl-carousel.slider").owlCarousel({
			singleItem:true,
			slideSpeed: 600,
			autoPlay: 5000,
			stopOnHover: true,
			navigation: true,
			pagination:false,
			responsive: true,
			autoHeight : true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			afterAction: function(el){
   					//remove class active
   				this
   				.$owlItems
   				.removeClass('active')

   				//add class active
   				this
   				.$owlItems //owl internal $ object containing items
   				.eq(this.currentItem + 0)
   				.addClass('active')    
    		}
		});
		
	
	
	},
	


	eHeightAdd:function(){
		$('.b_silde, .e-v4 .caption, .e-v4 .b_silde img').css('height',$(window).innerHeight()+'px');
	}
	
	/*END OF ESHOP*/	
	};
	// Load Events
	$(window).on('load', function() {
		Eshop.Init();
		Eshop.eDark.bind("click", Eshop.eDarkclick);
		Eshop.eLight.bind( "click", Eshop.eLightclick);
		Eshop.eSevariationBtn.bind( "click", Eshop.eSevariationBtnclick);
		Eshop.eSearchAnchor.bind( "click", Eshop.eSearchAnchorClick);
		Eshop.eSearchClose.bind( "click", Eshop.eSearchCloseClick);
		Eshop.eSpincCheck();
		Eshop.eHeightAdd();
		
		/************top hover******************/
		/*$( "#top-bar a" ).hover(
		function() {
			$( ".i-hover" ).slideToggle( 200 );
		});*/
		//$('#tabs-main').tabs();
	});
	
	$(window).on('resize', function()
	{
		Eshop.eHeightAdd();
	});
	
})(jQuery);

// zoom variables
infoImg = false;
$ezImg = false;

function destroy_elevatezoom()
{
		if ($ezImg != false) {
			$.removeData($ezImg, 'elevateZoom');//remove zoom instance from image
			$('.zoomContainer').remove();// remove zoom container from DOM
			$ezImg = false;
		}
}
function create_elevatezoom(swiper) 
{
		$ezImg = $(swiper.slides[swiper.activeIndex]).find('img');
		$ezImg.elevateZoom({
			zoomWindowFadeIn: 300,
			zoomWindowFadeOut: 300,
			scrollZoom: true,
			responsive: true
		});
	
} 
		
		  
		






