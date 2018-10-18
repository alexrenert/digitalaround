jQuery(document).ready(function($) {
	// window.onload = function() {
	// 	jQuery('.preloader').fadeOut(400);
	// };
	jQuery('#homepage').fullpage({
		sectionSelector: '.b-section-slide',
		verticalCentered: false,
  		anchors: ['weare', 'services', 'advandtage', 'ourproj', 'feedback', 'wantwork'],
		menu: '.b-section-nav',
		scrollingSpeed: 860,
		easingcss3: 'ease',
    	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
  	});
  	jQuery('#section-up').click(function(){
		jQuery.fn.fullpage.moveSectionUp();
	});
	jQuery('#section-down').click(function(){
		jQuery.fn.fullpage.moveSectionDown();
	});

	// $.fn.parallax = function(resistance, mouse) {
	//   $el = $(this);
	//   TweenLite.to($el, 1.2, {
	//     x: -((mouse.clientX - window.innerWidth / 2) / resistance),
	//     y: -((mouse.clientY - window.innerHeight / 2) / resistance)
	//   });
	// };
	
	// $(document).mousemove(function(e) {
	//   $('.section.active .paralax-layer-b1').parallax(150, e);
	// 	$('.section.active .paralax-layer-b2').parallax(75, e);
	// 	$('.fp-section.active .b-section__title').parallax(-200, e);
	// 	$('.fp-section.active .b-section__number img').parallax(80, e);
	// 	$('.fp-section.active .b-number__desk').parallax(-70, e);
	// 	$('.fp-section.active .b-scroll-helper').parallax(-80, e);
	// });

	// jQuery(window).on('resize', function(){
	// 	(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	// });

	//mobile version - open/close navigation
	jQuery('.b-header__menu-mobile').on('click', function(event){
		event.preventDefault();
		jQuery('.b-header').toggleClass('nav-is-visible');

	});

	jQuery('.slider-js').each(function(){
		slider = jQuery(this);

		if (slider.hasClass('slider_fade')) {
			slider.slick({
					fade: true
				});
		}
		// else if (slider.hasClass('blog-slider')) {
		// 	slider.slick({
		// 			slidesToShow: 3,
  //       			slidesToScroll: 3,
  //       			rows: 1,
  //       			customPaging: 10,
  //       			responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //     }
  //   },
  //   {
  //     breakpoint: 800,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]				});
		// }
		else if (slider.hasClass('slider_vertical')) {
			slider.slick({
					vertical: true
				});
		}
		else {
			slider.slick();
		}
	});

	var x = 950/535
	jQuery('.b-section__container').height(jQuery('.b-section__container').width() / x);

	jQuery(window).resize(function(){
	    jQuery('.b-section__container').height(jQuery('.b-section__container').width() / x);
	});

	jQuery('.b-section__content').each(function(){
		var container = jQuery(this).parents('.b-section-slide'),
				container_fade = container.find('.container__fade');

		jQuery(this).on('mouseenter', function(){
			container.addClass('section__container-active');
			container_fade.addClass('container__fade_hidden');
		});
		jQuery(this).on('mouseleave', function(){
			container.removeClass('section__container-active');
			container_fade.removeClass('container__fade_hidden');
		});
	});
	jQuery('.service-tabs').lightTabs({
		tabClass: '.service-tabs__selector-container',
		arrowClass: '.service-tabs__arrow',
		containerClass: '.service-tabs__container'
	});
	jQuery('.service-tabs__arrow-next').click(function(){
		slider1 = (jQuery(this).parents().find('.def'));

		if (slider1.hasClass('service-tabs__container')) {
			slider1.removeClass('service-tabs__container').addClass('service-tabs__container-blue');
		}
		else if (slider1.hasClass('service-tabs__container-blue')) {
			slider1.removeClass('service-tabs__container-blue').addClass('service-tabs__container-braun');
		}
		else if (slider1.hasClass('service-tabs__container-braun')) {
			slider1.removeClass('service-tabs__container-braun').addClass('service-tabs__container');
		}
	});
	jQuery('.service-tabs__arrow-prev').click(function(){
		slider1 = (jQuery(this).parents().find('.def'));

		if (slider1.hasClass('service-tabs__container')) {
			slider1.removeClass('service-tabs__container').addClass('service-tabs__container-braun');
		}
		else if (slider1.hasClass('service-tabs__container-braun')) {
			slider1.removeClass('service-tabs__container-braun').addClass('service-tabs__container-blue');
		}
		else if (slider1.hasClass('service-tabs__container-blue')) {
			slider1.removeClass('service-tabs__container-blue').addClass('service-tabs__container');
		}
	});

	jQuery('.green').click(
		function(){
			jQuery(this).parents().find('.def').addClass('service-tabs__container').removeClass('service-tabs__container-blue').removeClass('service-tabs__container-braun')
		}
	);
	jQuery('.blue').click(
		function(){
			jQuery(this).parents().find('.def').addClass('service-tabs__container-blue').removeClass('service-tabs__container service-tabs__container-braun')
		}
	);
	jQuery('.braun').click(
		function(){
			jQuery(this).parents().find('.def').addClass('service-tabs__container-braun').removeClass('service-tabs__container-blue service-tabs__container')
		}
	);
		jQuery('.slide-project__graphs').click(
			function(){
				jQuery(this).siblings('.b-tabs__tab').toggleClass('tab-active tab-hidden');
				jQuery(this).toggleClass('slide-project__hidden slide-project__active').siblings('.slide-project__graphs').toggleClass('slide-project__hidden slide-project__active')
			}
		);


  //   jQuery(".b-input").focus(function () {
  //       jQuery(this).parent().addClass("focus");
  //   }).blur(function () {
  //       if (jQuery(this).val() === '') {
  //           jQuery(this).parent().removeClass("focus");
  //       }
  //   })
  //   jQuery(".b-input").on('mouseenter', function(){
		// 	jQuery(this).parent().parent().addClass("focus");
		// });
		// jQuery(".b-input").on('mouseleave', function(){
		// 	jQuery(this).parent().parent().removeClass("focus");
		// });

	// jQuery('.b-callback__button').click(function(){
	// 	jQuery('.b-modal').addClass('visible');
	// 	$.fn.fullpage.setAllowScrolling(false);
	// });

 //    jQuery('.cb-fadeout').click(function(){
	// 	jQuery('.b-modal').removeClass('visible');
	// 	$.fn.fullpage.setAllowScrolling(true);
	// });
	// jQuery('.b-modal__close').click(function(){
	// 	jQuery('.b-modal').removeClass('visible');
	// 	$.fn.fullpage.setAllowScrolling(true);
	// });

// 	var slider = jQuery('.b-manager__slider');
// 	$('.b-manager-count__total').text( slider.slick("getSlick").slideCount);
// 	$(".b-manager__slider").on('afterChange', function(event, slick, currentSlide){
// 	     $(".b-manager-count__num").text(currentSlide + 1);
// 	});
// 	var slider = jQuery('.b-team-slider__slide');
// 	$('.b-team-slider__total').text( slider.slick("getSlick").slideCount);
// 	$(".b-team-slider__slide").on('afterChange', function(event, slick, currentSlide){
// 	     $(".b-team-slider__num").text(currentSlide + 1);
// 	});
// 	jQuery('.b-team-tabs').lightTabs({
// 		tabClass: '.team-tabs__selector-container',
// 		containerClass: '.team-tabs__container'
// 	});
// 	document.addEventListener( 'wpcf7submit', function( event ) {
//     if ( '542' == event.detail.contactFormId ) {
//        jQuery('.b-modal__body .b-body__title').text('Your request has been successfully sent.');
//        jQuery('.b-modal__body .b-body__subtitle').html('<div class="b-body__subtitle">Благодарим вас за интерес к нашей компании!<br>Мы ответим на ваш запрос в течение 24 часов (в рабочие дни).</div>');
//        jQuery('#wpcf7-f542-o2').hide();
//     }
// }, false );
// 	document.addEventListener( 'wpcf7submit', function( event ) {
//     if ( '207' == event.detail.contactFormId ) {
//        jQuery('.b-modal__body .b-body__title').text('Ваш запрос успешно отправлен');
//        jQuery('.b-modal__body .b-body__subtitle').html('<div class="b-body__subtitle">Thank you for your interest in our company! <br>We will respond to your inquiry within 24 hours (on working days).</div>');
//        jQuery('#wpcf7-f542-o2').hide();
//     }
// }, false );


});

