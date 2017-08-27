$(function() {

	$('.btn-mask').each(function() {
		$(this).append('<span class="view-all-link-mask"><span class="view-all-link-mask-text">' + $(this).html() + '</span></span>');
	});

	$(document).on('scroll', function() {
		var activeClass = 'top-line--fixed',
		ActiveID        = '.top-line',
		scrollPos       = $(this).scrollTop();

		if( scrollPos > ( $('.main-head').height() - 80 ) ) {
			$( ActiveID ).addClass( activeClass );
		} else {
			$( ActiveID ).removeClass( activeClass );
			$('.hidden-mnu').removeClass('opened');
			$('.toggle-mnu-inner').removeClass('on');
		}
	});

	$('.toggle-mnu-inner').click(function() {
		$(this).toggleClass('on');
		$('.hidden-mnu').toggleClass('opened');
		return false;
	});

	$('#main-nav').onePageNav();

	$('.projects-carousel').owlCarousel({
		items: 1,
		margin: 45,
		smartSpeed: 600
	});
	$('.review-carousel').owlCarousel({
		items: 1,
		margin: 35,
	});

    // START Services details

	$('.services-fullviews').find('.service-fullview').fadeOut(10);

	var servicesButton = $('.service-btn');
	servicesButton.on('click', function(e) {
		e.preventDefault();

		var actionId        = $(this).attr('href'),
		hideSection     = $(this).closest('.services-previews'),
		parentSection   = $(this).closest('.s-services'),
		sectionHeading  = parentSection.find('.s__header');

		hideSection.addClass('active');
		sectionHeading.addClass('active');

		setTimeout(function() {
			hideSection.fadeOut(10);
			sectionHeading.fadeOut(10);
		}, 400 );

		setTimeout(function() {

			$( actionId ).fadeIn(10);
			$( actionId ).addClass('active');

		}, 550 );

	});
	var servicesBackButton = $('.service-fullview__back-btn');
	servicesBackButton.on('click', function(el) {
		el.preventDefault();

		var actionId        = $('.services-previews'),
		hideSection     = $(this).closest('.service-fullview'),
		parentSection   = $(this).closest('.s-services'),
		sectionHeading  = parentSection.find('.s__header');

		setTimeout(function() {
			hideSection.fadeOut(10);
		}, 400 );

		hideSection.removeClass('active');

		setTimeout(function() {

			$( actionId ).fadeIn(10);
			$( actionId ).removeClass('active');

			sectionHeading.fadeIn(10);
			sectionHeading.removeClass('active');

		}, 550 );

	});

    // END Services details

    $('.project-details').on('click', function(event){
    	event.preventDefaul();
    	$('.s-projects').addClass('project-details')
    });
    $('.project-slides').on('click', function(event){
    	event.preventDefaul();
    	$('.s-projects').addClass('project-slides')
    });

  });
