$(function() {

	$("#my-menu").mmenu({
		offCanvas: {
			position: "right",
		},
		navbar: {
			title: '<a href="index.html"><img src="img/logo.svg" alt="Салон Красоты Имидж"></a>'
		},
	});
	

	var api = $("#my-menu").data("mmenu");
	api.bind("open:start", function() {
		$(".hamburger").addClass("is-active");
	}).bind("close:finish", function() {
		$(".hamburger").removeClass("is-active");
	});

	$(".tab_item").not(":first").hide();
	$(".services-tabs-wrapper .tab").click(function() {
		$(".services-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$("#phone-input").mask("+7 (999) 999-99-99");

		//OwlCarousel

		$(".salon-gallery").owlCarousel({
			items: 1,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin: 25,
			smartSpeed: 800,
			autoHeight: true,
		});

		$(".blog-preview-carousel").owlCarousel({
			smartSpeed: 700,
			margin: 35,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				},
			},
		});

		$(".brands-carousel").owlCarousel({
			loop: true,
			smartSpeed: 700,
			margin: 35,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				},
				1200: {
					items: 4
				}
			}, 
		});

		$(".reviews-carousel").owlCarousel({
			items: 1,
			margin: 35,
			smartSpeed: 1000,
			loop: true,
			nav: true,
			navContainer: '.quotes',
			navText: [',,',',,'],
			autoHeight: true,
		});

		//END OwlCarousel

		//MagnificPopup

		$("a[href='.callback-form']").magnificPopup({
			mainClass: "my-mfp-zoom-in",
		});

		//END MagnificPopup


		$("body").append('<div class="top" title="Наверх"><i class="fa fa-angle-double-up">');

		$("body").append('<a href="https://www.instagram.com/salon_imidje61/" class="insta" target="_blank" title="Инстаграм"><i class="fa fa-instagram"></i></a>');

		$("body").on("click", ".top", function() {
			$("html, body").animate({scrollTop: 0}, "slow");
		});


		// Ajax Form
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "assets/app/mail.php", //Change path/to/mail.php
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("active");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

		//Replace all SVG images with inline SVG
		$('img.img-svg').each(function(){
			var $img = $(this);
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});

		$(".flatpickr").flatpickr({
			dateFormat: "d-m-y",
			inline: true,
			locale: "ru",
			minDate: "today",
		});

		$(window).scroll(function() {
			if($(this).scrollTop() > $(this).height()) {
				$(".top").addClass("active");
			} else {
				$(".top").removeClass("active");
			}
		});

	});