(function($){
	$(document).ready(function(){ 

		$('.about-slider').slick({
			speed: 700,
			slidesToShow: 2,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 7000,
			prevArrow: "<div class='about-slider__arrow prev'></div>",
			nextArrow: "<div class='about-slider__arrow next'></div>",
			responsive: [
		
				/*{
				  breakpoint: 768,
				  settings: {
				    slidesToShow: 2,
				    arrows: false
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
				    slidesToShow: 1,
				    arrows: false
				  }
				}*/

				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});


		/*$('.scroll-down').on('click', function(){
			$('html, body').animate({
				scrollTop: $('.navbar').offset().top
			}, 500, function(){ 
				//console.log('callback function'); 
			});
		});

		$(window).on('scroll load', function(e){
			if(pageYOffset > $('.header').outerHeight(true)){
				$('.navbar').addClass('fixed');
				$('body').addClass('navbar-fixed');
			} else {
				$('.navbar').removeClass('fixed');
				$('body').removeClass('navbar-fixed');
			}
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});*/
		
	});
})(jQuery);