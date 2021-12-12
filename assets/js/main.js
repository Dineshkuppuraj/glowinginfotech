/*global jQuery */
(function ($) {
    "use strict";

    // Sticky menu 
    var $window = $(window);
    $window.on('scroll', function () {
        var scroll = $window.scrollTop();
        if (scroll < 300) {
            $(".sticky").removeClass("is-fixed");
        } else {
            $(".sticky").addClass("is-fixed");
        }
    });


    // Background Image JS
    var bgSelector = $(".bg-img");
    bgSelector.each(function (index, elem) {
        var element = $(elem),
            bgSource = element.data('bg');
        element.css('background-image', 'url(' + bgSource + ')');
    });


    // Hero main slider active js
    $('.hero-slider-active').slick({
        autoplay: false,
        infinite: true,
        fade: true,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icofont-dotted-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icofont-dotted-right"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
            }
		}]
    });

    // project slider active js
    $('.project-slider-active').slick({
        autoplay: false,
        infinite: true,
        fade: false,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i></button>',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
			},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
			}
		]
    });


    // product details vertical slider active
    $('.feature-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: false,
        asNavFor: '.feature-slider-active'
    });


    // product details vertical slider nav active
    $('.feature-slider-active').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.feature-img-slider',
        arrows: true,
        centerPadding: 0,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i></button>',
    });


    // project slider active js
    $('.testimonial-slider').slick({
        autoplay: false,
        infinite: true,
        fade: false,
        dots: false,
        speed: 1000,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i></button>',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
			},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
			}
		]
    });
    
    
    // nice select active js
	$('select').niceSelect();
    

    // Counter To Up JS
    $('.odometer').each(function () {
        $(this).appear(function () {
            var $this = $(this),
                $dataValue = $this.data('count');

            setTimeout(function () {
                $this.html($dataValue);
            }, 1000);
        })
    });


    // scroll to top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').removeClass('not-visible');
        } else {
            $('.scroll-top').addClass('not-visible');
        }
    });
    $('.scroll-top').on('click', function (event) {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    
    
    //offcanvas serch box active
    $('.menu-btn').on('click',function() {
        $('.offcanvas-menu-wrapper').addClass('show');
        $('body').addClass('hidden');
    })
    
    $('.header-search-btn button').on('click',function() {
        $('.offcanvas-wrapper').addClass('show');
        $('body').addClass('hidden');
    })
    
    $('.direction-btn').on('click',function() {
        $('.offcanvas-contact-wrapper').addClass('show');
        $('body').addClass('hidden');
    })
    
    $('.offcanvas-close').on('click',function() {
        $('.offcanvas-wrapper, .offcanvas-menu-wrapper, .offcanvas-contact-wrapper').removeClass('show');
        $('body').removeClass('hidden');
    })
    
    
    // responsive menu js
    $('#menu').slicknav({
        prependTo: '.offcanvas-menu-inner',
        closedSymbol: '+',
        openedSymbol: '-',
        removeClasses: true
    });
    
    
    //language list active js
    $(".lng-btn").on("click", function (event) {
		event.stopPropagation();
        $(".lng-list").slideToggle();
    });
    
    $("body:not(.lng-btn)").on("click", function () {
		$(".lng-list").slideUp("slow");
	});
    
    // preloader active
    $(window).on('load', function(){
        $('.preloader').fadeOut('slow');
    })
    
    // google map
    var map_id = $('#map_content');
    if (map_id.length > 0) {
        var $lat = map_id.data('lat'),
            $lng = map_id.data('lng'),
            $zoom = map_id.data('zoom'),
            $maptitle = map_id.data('maptitle'),
            $mapaddress = map_id.data('mapaddress'),
            mymap = L.map('map_content').setView([$lat, $lng], $zoom);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map',
            maxZoom: 18,
            id: 'mapbox.streets',
            scrollWheelZoom: false,
            accessToken: 'pk.eyJ1Ijoic2hha2lsYWhtbWVlZCIsImEiOiJjamk4anF6NDgwMGd5M3BwM2c4eHU5dmIzIn0.yBLGUAB8kV1I1yGGonxzzg'
        }).addTo(mymap);

        var marker = L.marker([$lat, $lng]).addTo(mymap);
        marker.bindPopup('<b>' + $maptitle + '</b><br>' + $mapaddress).openPopup();
        mymap.scrollWheelZoom.disable();
    }
      

}(jQuery));
