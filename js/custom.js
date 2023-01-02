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
    var FOOD = {
            activeCategory: 1,
            nameActiveCategory: 'coldSnacks',
            menu: [
                {id: 1, description: 'Холодные закуски', name: 'coldSnacks', target: 'coldSnacks', active: true},
                {id: 2, description: 'Салаты', name: 'salads', target: 'salads', active: false},
                {id: 3, description: 'Супы', name: 'soups', target: 'soups', active: false},
                {id: 4, description: 'Горячие блюда', name: 'hotDishes', target: 'hotDishes', active: false},
                {id: 5, description: 'Фирменное', name: 'branded', target: 'branded', active: false},
                {id: 6, description: 'Соусы', name: 'sauces', target: 'sauces', active: false},
                {id: 7, description: 'Десерты', name: 'dessert', target: 'dessert', active: false},
                {id: 8, description: 'Выпечка', name: 'bakery', target: 'bakery', active: false},
                {id: 9, description: 'Напитки', name: 'drinks', target: 'drinks', active: false},
            ],
            catalog: [
                {
                    id: 1,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Холодец Холодное блюдо',
                    description: 'Сытное блюдо из сгустившегося до желеобразной массы от охлаждения мясного бульона с кусочками мяса. Известен с XVI века[1]. В русской кухне является популярной холодной закуской на праздничном столе'
                },
                {
                    id: 10,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Холодец Холодное блюдо',
                    description: 'Сытное блюдо из сгустившегося до желеобразной массы от охлаждения мясного бульона с кусочками мяса. Известен с XVI века[1]. В русской кухне является популярной холодной закуской на праздничном столе'
                },
                {
                    id: 20,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Холодец Холодное блюдо',
                    description: 'Сытное блюдо из сгустившегося до желеобразной массы от охлаждения мясного бульона с кусочками мяса. Известен с XVI века[1]. В русской кухне является популярной холодной закуской на праздничном столе'
                },
                {
                    id: 30,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Холодец Холодное блюдо',
                    description: 'Сытное блюдо из сгустившегося до желеобразной массы от охлаждения мясного бульона с кусочками мяса. Известен с XVI века[1]. В русской кухне является популярной холодной закуской на праздничном столе'
                },
                {
                    id: 40,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Холодец Холодное блюдо',
                    description: 'Сытное блюдо из сгустившегося до желеобразной массы от охлаждения мясного бульона с кусочками мяса. Известен с XVI века[1]. В русской кухне является популярной холодной закуской на праздничном столе'
                },
                {
                    id: 50,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Цезарь',
                    description: 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было. '
                },
                {
                    id: 60,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Цезарь',
                    description: 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было. '
                },
                {
                    id: 70,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Цезарь',
                    description: 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было. '
                },
                {
                    id: 80,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Цезарь',
                    description: 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было. '
                },
                {
                    id: 90,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Борщ',
                    description: 'Горячий заправочный суп на основе свёклы, которая придаёт ему характерный красный цвет. '
                },
                {
                    id: 100,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Борщ',
                    description: 'Горячий заправочный суп на основе свёклы, которая придаёт ему характерный красный цвет. '
                },
                {
                    id: 110,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Борщ',
                    description: 'Горячий заправочный суп на основе свёклы, которая придаёт ему характерный красный цвет. '
                },
                {
                    id: 120,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Борщ',
                    description: 'Горячий заправочный суп на основе свёклы, которая придаёт ему характерный красный цвет. '
                },
            ]
        },
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
    FOOD.preloader = function () {
        //$("#load").fadeOut();
        $('#loading').delay(0).fadeOut('slow');
    };

    FOOD.menuRender = function () {
        let html = ''
        let tab = ''
        for (let i = 0; i < FOOD.menu.length; i++) {
            let active = FOOD.activeCategory === FOOD.menu[i].id ? ' active show ' : ' fade ';
            html += '<li class="nav-item" role="presentation">\n' +
                '              <button class="nav-link ';
            FOOD.activeCategory === FOOD.menu[i].id ? html += " active " : ""
            html += '" id="' + FOOD.menu[i].id + '" data-bs-toggle="tab" data-bs-target="' + FOOD.menu[i].target + '" type="button" role="tab" aria-controls="breakfast" aria-selected="true">' + FOOD.menu[i].description + '</button>\n' +
                '            </li>'

            tab +=
                '<div class="tab-pane ' + active + '" id="' + FOOD.menu[i].name + '" role="tabpanel" aria-labelledby="' + FOOD.menu[i].name + '">'
                + '<div class="row">'
                + '<div id="menu' + FOOD.menu[i].name + 'Left" class="col-lg-6 col-md-6"></div>'
                + '<div id="menu' + FOOD.menu[i].name + 'Right" class="col-lg-6 col-md-6"></div>'
                + '</div></div>'

        }

        $('#tabMenuHome').html(html)
        $('#tab-content-menu').html(tab)
        FOOD.handleClickCatalog()
    }

    FOOD.menuCatalog = function () {
        // рендер позиций меню
        let htmlLeft = ''
        let htmlRight = ''
        let filterCatalog = FOOD.catalog.filter(el => el.category == FOOD.activeCategory)
        for (let i = 0; i < filterCatalog.length; i++) {
            if (filterCatalog[i].positionLeft) {
                htmlLeft += '<div data-param-id="' + filterCatalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img class="img-fluid center-block" src="images/dish/01.png" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div class="menu-title clearfix">\n' +
                    '                        <h4>' + filterCatalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + filterCatalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + filterCatalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            } else {
                htmlRight += '<div data-param-id="' + filterCatalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img class="img-fluid center-block" src="images/dish/01.png" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div class="menu-title clearfix">\n' +
                    '                        <h4>' + filterCatalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + filterCatalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + filterCatalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            }
        }
        $(`#menu${FOOD.nameActiveCategory}Left`).html(htmlLeft)
        $(`#menu${FOOD.nameActiveCategory}Right`).html(htmlRight)

    }

    FOOD.handleClickCatalog = function () {
        $('.nav-link').click((event) => {
            $('.tab-pane').removeClass('show')
            $('.tab-pane').removeClass('active')
            $('.tab-pane').addClass('fade')
            let paramId = event.target.getAttribute('id');
            let name = event.target.getAttribute('data-bs-target');
            if (paramId !== null) {
                FOOD.activeCategory = paramId
                FOOD.nameActiveCategory = name
                $(`#${FOOD.nameActiveCategory}`).removeClass('fade')
                $(`#${FOOD.nameActiveCategory}`).addClass('show active')
                FOOD.menuCatalog()
            }
            console.log(FOOD)
        })
    }

    /*************************
     Mega menu
     *************************/
    FOOD.megaMenu = function () {
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
    FOOD.goToTop = function () {
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
    FOOD.searchbar = function () {
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
    FOOD.carousel = function () {
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
    FOOD.counters = function () {
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
    FOOD.Isotope = function () {
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
    FOOD.masonry = function () {
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
    FOOD.mediaPopups = function () {
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
    FOOD.caldatapicker = function () {
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
    FOOD.burgermenu = function () {
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
    FOOD.accordion = function () {
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
    FOOD.progressBar = function () {

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
    FOOD.countdownTimer = function () {
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
    FOOD.niceScroll = function () {
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
    FOOD.contactform = function () {
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
        FOOD.goToTop(),
            FOOD.menuRender(),
            FOOD.menuCatalog(),
            // FOOD.handleClickCatalog(),
            FOOD.preloader(),
            FOOD.Isotope(),
            FOOD.masonry(),
            FOOD.caldatapicker(),
            FOOD.progressBar();
    }

    //Document ready functions
    $document.ready(function () {
        FOOD.searchbar(),
            FOOD.megaMenu(),
            FOOD.counters(),
            FOOD.mediaPopups(),
            FOOD.carousel(),
            FOOD.burgermenu(),
            FOOD.accordion(),
            FOOD.countdownTimer(),
            FOOD.contactform(),
            FOOD.niceScroll();
    });
})(jQuery);

// Below code is not part of template
$(document).ready(function () {
    console.log('hello')
    // $.ajax({
    //   url: '',
    //   type: 'post',
    //   //dataType: 'json',
    //   data:'',
    //   success: function(response){
    //console.log(response)
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
