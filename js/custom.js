/*

Template: The Zayka - Multipurpose Restaurant, Food & Cafe HTML5 Template
Author: potenzaglobalsolutions.com
Version: 1.0
Design and Developed by: potenzaglobalsolutions.com

NOTE:

*/


/*================================================
[  Table of contents  ]
================================================

:: Predefined Variables
:: Preloader
:: Mega menu
:: Back to top
:: Search
:: Parallax
:: Owl carousel
:: Counter
:: Isotope
:: Magnific Popup
:: Tabs
:: Datetimepicker
:: Burger menu
:: Accordion
:: Progressbar
:: Countdown
:: NiceScroll
:: PHP contact form

======================================
[ End table content ]
======================================*/

(function ($) {
    "use strict";

    /*************************
     Predefined Variables
     *************************/
    var POTENZA = {},
        $window = $(window),
        $document = $(document),
        $body = $('body'),
        $progressBar = $('.progress-bar'),
        $countdownTimer = $('.countdown'),
        $counter = $('.counter');

    //Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    /*************************
     Preloader
     *************************/
    POTENZA.preloader = function () {
        //$("#load").fadeOut();
        $('#loading').delay(0).fadeOut('slow');
    };

    POTENZA.menuRender = function () {
        let menu = [
            {name: 'Холодные закуски', id: 'breakfast-tab', target: '#breakfast', active: true},
            {name: 'Салаты', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Супы', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Горячие блюда', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Фирменное', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Соусы', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Десерты', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Выпечка', id: 'breakfast-tab', target: '#breakfast', active: false},
            {name: 'Напитки', id: 'breakfast-tab', target: '#breakfast', active: false},
        ]
        let html = ''
        for (let i = 0; i < menu.length; i++) {
            html += '<li class="nav-item" role="presentation">\n' +
                '              <button class="nav-link ';
            menu[i].active ? html += " active " : ""
            html += '" id="' + menu[i].id + '" data-bs-toggle="tab" data-bs-target="' + menu[i].target + '" type="button" role="tab" aria-controls="breakfast" aria-selected="true">' + menu[i].name + '</button>\n' +
                '            </li>'
        }

        $('#tabMenuHome').html(html)
    }

    POTENZA.menuCatalog = function () {
        let catalog = [
            {
                id: 1,
                category: 'coldAppetizers',
                price: 100,
                available: true,
                positionLeft: true,
                name: 'Холодное блюдо',
                description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            },
            {
                id: 2,
                category: 'coldAppetizers',
                price: 110,
                available: true,
                positionLeft: true,
                name: 'Холодное блюдо',
                description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            },
            {
                id: 3,
                category: 'coldAppetizers',
                price: 120,
                available: true,
                positionLeft: true,
                name: 'Холодное блюдо',
                description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            },
            // {
            //     id: 4,
            //     category: 'coldAppetizers',
            //     price: 130,
            //     available: true,
            //     positionLeft: true,
            //     name: 'Холодное блюдо',
            //     description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            // },
            // {
            //     id: 5,
            //     category: 'coldAppetizers',
            //     price: 140,
            //     available: true,
            //     positionLeft: true,
            //     name: 'Холодное блюдо',
            //     description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            // },
            {
                id: 6,
                category: 'coldAppetizers',
                price: 150,
                available: false,
                positionLeft: false,
                name: 'Холодное блюдо',
                description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            },
            {
                id: 7,
                category: 'coldAppetizers',
                price: 160,
                available: false,
                positionLeft: false,
                name: 'Холодное блюдо',
                description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            },
            // {
            //     id: 8,
            //     category: 'coldAppetizers',
            //     price: 170,
            //     available: false,
            //     positionLeft: false,
            //     name: 'Холодное блюдо',
            //     description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            // },
            // {
            //     id: 9,
            //     category: 'coldAppetizers',
            //     price: 180,
            //     available: false,
            //     positionLeft: false,
            //     name: 'Холодное блюдо',
            //     description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            // },
            // {
            //     id: 10,
            //     category: 'coldAppetizers',
            //     price: 190,
            //     available: false,
            //     positionLeft: false,
            //     name: 'Холодное блюдо',
            //     description: 'Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .Описание блюда . . .'
            // },
        ]
        let htmlLeft = ''
        let htmlRight = ''
        for (let i = 0; i < catalog.length; i++) {
            if (catalog[i].positionLeft) {
                htmlLeft += '<div data-param-id="' + catalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img class="img-fluid center-block" src="images/dish/01.png" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div class="menu-title clearfix">\n' +
                    '                        <h4>' + catalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + catalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + catalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            } else {
                htmlRight += '<div data-param-id="' + catalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img class="img-fluid center-block" src="images/dish/01.png" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div class="menu-title clearfix">\n' +
                    '                        <h4>' + catalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + catalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + catalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            }
        }
        $('#menuCatalogLeft').html(htmlLeft)
        $('#menuCatalogRight').html(htmlRight)

    }

    POTENZA.handleClickCatalog = function () {
        $('.menu-body').click((event)=>{
            console.log(event.target)
        })
    }

    /*************************
     Mega menu
     *************************/
    POTENZA.megaMenu = function () {
        $('#menu-1').megaMenu({
            // DESKTOP MODE SETTINGS
            logo_align: 'left',         // align the logo left or right. options (left) or (right)
            links_align: 'left',        // align the links left or right. options (left) or (right)
            socialBar_align: 'left',    // align the socialBar left or right. options (left) or (right)
            searchBar_align: 'right',   // align the search bar left or right. options (left) or (right)
            trigger: 'hover',           // show drop down using click or hover. options (hover) or (click)
            effect: 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
            effect_speed: 400,          // drop down show speed in milliseconds
            sibling: true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
            outside_click_close: true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
            top_fixed: false,           // fixed the menu top of the screen. options (true) or (false)
            sticky_header: true,       // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            menu_position: 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
            full_width: false,           // make menu full width. options (true) or (false)
            // MOBILE MODE SETTINGS
            mobile_settings: {
                collapse: true,    // collapse the menu on click. options (true) or (false)
                sibling: true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
                scrollBar: true,    // enable the scroll bar. options (true) or (false)
                scrollBar_height: 400,  // scroll bar height in px value. this option works if the scrollBar option true.
                top_fixed: false,       // fixed menu top of the screen. options (true) or (false)
                sticky_header: false,   // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            }
        });
    }

    /*************************
     Back to top
     *************************/
    POTENZA.goToTop = function () {
        var $goToTop = $('#back-to-top');
        $goToTop.hide();
        $window.scroll(function () {
            if ($window.scrollTop() > 100) $goToTop.fadeIn();
            else $goToTop.fadeOut();
        });
        $goToTop.on("click", function () {
            $('body,html').animate({scrollTop: 0}, 10);
            return false;
        });
    }

    /*************************
     Search
     *************************/
    POTENZA.searchbar = function () {
        var $searchbar = $('.overlay-search');
        if ($searchbar.exists()) {
            $('.search-btn,.search-close').on("click", function () {
                $searchbar.toggleClass("open")
                return false;
            });
        }
    }

    /*************************
     owl-carousel
     *************************/
    POTENZA.carousel = function () {
        $(".owl-carousel").each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.data('loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;
            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                    0: {items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                    480: {items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                    768: {items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                    992: {items: $this.data('md-items') ? $this.data('md-items') : 3},
                    1200: {items: $items}
                },
                dots: $navdots,
                margin: $space,
                nav: $navarrow,
                navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true
            });
        });
    }

    /*************************
     Counter
     *************************/
    POTENZA.counters = function () {
        if ($counter.exists()) {
            $counter.each(function () {
                var $elem = $(this);
                $elem.appear(function () {
                    $elem.find('.timer').countTo();
                });
            });
        }
    };

    /*************************
     Isotope
     *************************/
    POTENZA.Isotope = function () {
        var $isotope = $(".isotope"),
            $itemElement = '.grid-item',
            $filters = $('.isotope-filters');
        if ($isotope.exists()) {
            $isotope.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                    gutterWidth: 10
                }
            });
            $filters.on('click', 'button', function () {
                var $val = $(this).attr('data-filter');
                $isotope.isotope({filter: $val});
                $filters.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        }
    }

    // masonry
    POTENZA.masonry = function () {
        var $masonry = $('.masonry-main .masonry'),
            $itemElement = '.masonry-main .masonry-item';
        if ($masonry.exists()) {
            $masonry.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                    gutterWidth: 10
                }
            });
        }
    }

    /*************************
     Magnific Popup
     *************************/
    POTENZA.mediaPopups = function () {
        if ($(".popup-gallery").exists()) {
            $('.popup-gallery').magnificPopup({
                delegate: 'a.portfolio-img',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        }
        if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }

    /*************************
     datetimepicker
     *************************/
    POTENZA.caldatapicker = function () {
        var $datepicker = $("#datepicker"),
            $timepicker = $("#timepicker");
        if ($datepicker.exists()) {
            $('#datepicker').datetimepicker({
                pickTime: false
            });
            $('#timepicker').datetimepicker({
                pickDate: false
            });
        }
    };

    /*************************
     Burgermenu
     *************************/
    POTENZA.burgermenu = function () {
        if ($("#menu-4").exists()) {
            $('#menu-4').megaMenu({
                menu_position: 'vertical-right',
                effect: 'expand-right'
            });
            $('#menu-icon').on("click", function () {
                $(this).toggleClass('open');
                $('#menu,#menu-toggle,#page-content,#menu-overlay').toggleClass('open');
                $('#menu li,.submenu-toggle').removeClass('open');
            });
        }
        ;
    }

    /*************************
     Accordion
     *************************/
    POTENZA.accordion = function () {
        var $acpanel = $(".accordion .acd-group > .acd-des"),
            $acsnav = $(".accordion .acd-group > .acd-heading");

        $acpanel.hide().first().slideDown("easeOutExpo");
        $acsnav.first().addClass("acd-active");
        $acsnav.on('click', function () {
            var $this = $(this).next(".acd-des");
            $acsnav.parent().removeClass("acd-active");
            $(this).parent().addClass("acd-active");
            $acpanel.not($this).slideUp("easeInExpo");
            $(this).next().slideDown("easeOutExpo");
            return false;
        });
    }

    /*************************
     Progressbar
     *************************/
    POTENZA.progressBar = function () {

        if ($progressBar.exists()) {
            $progressBar.each(function (i, elem) {
                var $elem = $(this),
                    percent = $elem.attr('data-percent') || "100",
                    delay = $elem.attr('data-delay') || "100",
                    type = $elem.attr('data-type') || "%";

                if (!$elem.hasClass('progress-animated')) {
                    $elem.css({
                        'width': '0%'
                    });
                }
                var progressBarRun = function () {
                    $elem.animate({
                        'width': percent + '%'
                    }, 'easeInOutCirc').addClass('progress-animated');

                    $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
                };
                $(elem).appear(function () {
                    setTimeout(function () {
                        progressBarRun();
                    }, delay);
                });
            });
        }
    };

    /*************************
     Countdown
     *************************/
    POTENZA.countdownTimer = function () {
        if ($countdownTimer.exists()) {
            $countdownTimer.downCount({
                date: '10/05/2022 12:00:00',
                offset: 400
            });
        }
    };

    /*************************
     niceScroll
     *************************/
    POTENZA.niceScroll = function () {
        var $niceScrolldiv = $(".book-content");
        if ($niceScrolldiv.exists()) {
            $(".book-content").niceScroll({
                scrollspeed: 150,
                mousescrollstep: 38,
                cursorwidth: 7,
                cursorborder: 0,
                cursorcolor: '#1e2327',
                autohidemode: true,
                zindex: 999999999,
                horizrailenabled: false,
                cursorborderradius: 0
            });
        }
    };

    /*************************
     PHP contact form
     *************************/
    POTENZA.contactform = function () {
        var $contactform = $("#contactform");

        $contactform.submit(function (event) {
            $("#ajaxloader").show();
            $contactform.hide();
            // $.ajax({
            //   url:'php/contact-form.php',
            //   data:$(this).serialize(),
            //   type:'post',
            //   success:function(response){
            //     $("#ajaxloader").hide();
            //     $contactform.show();
            //     $contactform.find("input, textarea").val("");
            //     $("#formmessage").html(response).show().delay(2000).fadeOut('slow');
            //   }
            // });
            event.preventDefault();
        });
    }

//Window load functions
    window.onload = function () {
        POTENZA.goToTop(),
            POTENZA.menuRender(),
            POTENZA.menuCatalog(),
            POTENZA.handleClickCatalog(),
            POTENZA.preloader(),
            POTENZA.Isotope(),
            POTENZA.masonry(),
            POTENZA.caldatapicker(),
            POTENZA.progressBar();
    }

    //Document ready functions
    $document.ready(function () {
        POTENZA.searchbar(),
            POTENZA.megaMenu(),
            POTENZA.counters(),
            POTENZA.mediaPopups(),
            POTENZA.carousel(),
            POTENZA.burgermenu(),
            POTENZA.accordion(),
            POTENZA.countdownTimer(),
            POTENZA.contactform(),
            POTENZA.niceScroll();
    });
})(jQuery);

// Below code is not part of template
$(document).ready(function () {
    console.log('hello')
    // $.ajax({
    //   url: 'https://themes.potenzaglobalsolutions.com/top-bar-section.php',
    //   type: 'post',
    //   //dataType: 'json',
    //   data:'action=pgs_top_bar&theme=the-zayka',
    //   success: function(response){
    //     $('body').prepend(response);
    //   },
    //
    // });
});
$(document).on('click', 'a.frame-close', function (e) {
    $('.header-preview').slideUp();
});

// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/5efaefc99e5f694422918fd2/default';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
