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
                {id: 1, description: 'Поздние завтраки', name: 'coldSnacks', target: 'coldSnacks', active: true},
                {id: 2, description: 'Холодные закуски', name: 'salads', target: 'salads', active: false},
                {id: 3, description: 'Супы', name: 'soups', target: 'soups', active: false},
                {id: 4, description: 'Паста', name: 'hotDishes', target: 'hotDishes', active: false},
                {id: 5, description: 'Горячее', name: 'branded', target: 'branded', active: false},
                {id: 6, description: 'Десерты', name: 'dessert', target: 'dessert', active: false},
            ],
            catalog: [
                {
                    id: 1,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Сырники с томлеными ягодами',
                    description: 'Свежайший деревенский творог, сахар, мука, яйца, щепотка ванилина. Подаются с томлеными ягодами. '
                },
                {
                    id: 10,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Блины классические',
                    description: 'Подаются с сметаной'
                },
                {
                    id: 20,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Блины с ветчиной и сыром',
                    description: 'Сытные и нежные блинчики'
                },
                {
                    id: 30,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Блины с курицей и грибами в сливочном соусе',
                    description: 'Изысканное блюдо для гурманов'
                },
                {
                    id: 40,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: true,
                    name: 'Каша овсяная на молоке',
                    description: 'Отличный вариант для завтрака: классическая овсяная каша со сливочным маслом - идеально для детей и взрослых.'
                },
                {
                    id: 50,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Каша манная на молоке',
                    description: 'Наша манная каша - нравится всем!  В меру сладкая, но не приторная. И главное - без комочков ;)'
                }, {
                    id: 60,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Малиновый кефир',
                    description: 'Смешиваем ароматные ягоды с домашним кефиром'
                }, {
                    id: 70,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Клубничный кефир',
                    description: 'Смешиваем ароматные ягоды с домашним кефиром'
                },
                {
                    id: 80,
                    category: 1,
                    price: 200,
                    available: true,
                    positionLeft: 0,
                    name: 'Блины с жареным бананом',
                    description: 'Идеально для любителей сладких блинчиков.'
                },
                {
                    id: 90,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Еврейская закуска с  уральскими корнями',
                    description: 'Сытная и вкусная закуска из простых ингредиентов Состав: смесь мелкопорезанного сыра и яйца + майонез и немного чеснока.'
                },
                {
                    id: 100,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Еврейская закуска с грибами',
                    description: 'Вариант еврейской закуски с грибами - жареные грибы, сыр, яйцо (все мелко-тертое) + майонез.'
                },
                {
                    id: 110,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Брускетта с ростбифом на тар-таре из маринованных огурцов с красным луком',
                    description: 'Популярная закуска родом из Италии: поджаренный хлеб и сочный ростбиф с маринованными огурцами и красным луком. '
                },
                {
                    id: 120,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Брускетта с лососем собств.посола,на сырном креме',
                    description: 'Поджаренный свежий хлеб и лосось собственного посола (по фирменному рецепту)в сочетании с сырным кремом'
                }, {
                    id: 130,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Буратта',
                    description: 'Итальянский сыр для гурманов, с нежным сливочным вкусом. Каждый шарик сыра - это небольшой мешочек из моцареллы, наполненный мягкой начинкой из смеси страчателлы и сливок.  '
                }, {
                    id: 140,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Цезарь на выбор:курица/креветки',
                    description: 'Популярный салат цезарь с курицей или креветками: лист салата,помидоры черри, пармезан, наш фирменный соус для цезаря.'
                }, {
                    id: 150,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: true,
                    name: 'Салат из печеных на гриле овощей, и зернистой заправкой',
                    description: 'Изысканный салат из печёных на гриле овощей с нашей авторской заправкой (горчица,оливковое масло, свежая зелень)'
                }, {
                    id: 160,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Салат овощной ',
                    description: 'На выбор заправка масло или сметана'
                }, {
                    id: 170,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Салат с ростбифом и томатами черри,с заправкой Неаполь (печеные овощи в том.соусе)',
                    description: 'Сытный и яркий салат с мясом и овощами, со знаменитым Неаполитанским соусом.'
                }, {
                    id: 180,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Сельдь под шубой',
                    description: 'Вечная классика, которая всегда в моде: морковь, свёкла, картофель, репчатый лук, филе сельди, яйцо, соль, перец. '
                }, {
                    id: 190,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Мимоза',
                    description: 'Культовый салат ещё со времён СССР! Всё как вы любите: яйца, картошка, консервированная рыба, морковь, лук, майонез.'
                }, {
                    id: 200,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Лосось домашнего посола',
                    description: 'Ничего лишнего - просто очень вкусная рыба, засоленная по нашему особенному рецепту с апельсиновым соком🍊'
                }, {
                    id: 210,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Тар-тар из лосося на подушке из авокадо с соусом апельсиновый майонез и гренками из белого хлеба',
                    description: 'Лёгкая и полезная французская закуска, с авторским апельсиновым майонезом от нашего шеф-повара! '
                }, {
                    id: 220,
                    category: 2,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Тар-тар из вырезки говядины с копченым салом и гренками из белого хлеба',
                    description: 'Классическое блюдо французской кухни! И вместе с тем необычное - так как сделано из сырого мяса, с добавлением специй и копчёного сала\n'
                },

                {
                    id: 230,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Крем суп из шампиньонов с трюф.маслом',
                    description: 'Нежный и лёгкий крем-суп с воздушной текстурой и мягким грибным вкусом. Подаётся с трюфельным маслом. '
                },
                {
                    id: 240,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Борщ',
                    description: 'Король всех супов и классика национальной кухни! Сытный, наваристый и очень аппетитный. '
                },
                {
                    id: 250,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Куриный суп',
                    description: 'Традиционный куриный суп, с наваристым золотистым бульоном, куриным мясом, овощами и яйцом. '
                },
                {
                    id: 260,
                    category: 3,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Крем суп из брокколи и шпината с сливками',
                    description: 'Нежный, лёгкий и невероятно вкусный овощной крем-суп из брокколи и шпината со сливками. '
                },
                {
                    id: 270,
                    category: 4,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Спагетти с лососем и брокколи в сливочном соусе',
                    description: 'Популярное блюдо, в котором идеально сочетается лосось, нежный сливочный соус и брокколи. Идеально для обеда или ужина. '
                }, {
                    id: 280,
                    category: 4,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Лазанья мясная',
                    description: 'Ещё один итальянский кулинарный хит, покоривший мир! Лазанья, твёрдый сыр пармезан, болоньезе с соусом бешамель. '
                }, {
                    id: 290,
                    category: 4,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Спагетти с томатным соусом и базиликом',
                    description: 'Это классика итальянской кухни, блюдо, которое любят во многих странах. Приготовлено по каноническому итальянскому рецепту. '
                }, {
                    id: 300,
                    category: 4,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Спагетти "Биск "-соус с томатами и тигровыми креветками',
                    description: 'Ещё один популярный вариант спагетти из Италии! Спагетти, средиземноморский соус "Биск",креветки,сливочно-томатный соус,лук, специи. '
                }, {
                    id: 310,
                    category: 4,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Детская паста с курочкой',
                    description: 'Мы знаем, чем накормить вашего ребёнка, особенно если ребёнок "малоежка". Нежное куриное филе в сливочно-сырном соусе с Пенне. '
                },
                {
                    id: 320,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Ребра свиные запеченные с темным пивом',
                    description: 'Настоящее сытное блюдо для гурманов - отборное сочное мясо, специи, тёмное пиво. Получается  нежнейшее мясо в пикантном пивном соусе. '
                }, {
                    id: 340,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Свинина по-французски (под сыром и помидором)',
                    description: 'Запечённое в духовке нежное и сочное свиное мясо с аппетитной румяной корочкой из сыра и помидор. '
                }, {
                    id: 350,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Медальоны из свиной вырезки под соусом демиглясс',
                    description: 'Сочные и нежные медальоны из свинины, томлённые в знаменитом французском соусе демиглясс с добавлением красного вина. '
                }, {
                    id: 360,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Бефстроганов с маринованным огурцом (СССР)',
                    description: 'Тот самый бефстроганов или "мясо по строгановски" известный ещё со времён Царской России и популярный в СССР! Нежная, сочная и ароматная говядина в соусе с маринованными огурцами. '
                }, {
                    id: 370,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Медальоны из говяжей вырезки с кисло-томатным соусом',
                    description: 'Сочные мясные медальоны из говяжьей вырезки под нашим фирменным кисло-томатным соусом,на основе огуречного рассола. '
                }, {
                    id: 380,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Цыпленок табака (СССР)',
                    description: 'Тот самый знаменитый цыплёнок табака, который готовили все в СССР! Сочный цыпленок с золотистой ароматной и хрустящей корочкой. '
                }, {
                    id: 400,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Щеки говяжьи томленые в соусе демиглясс с красным вином',
                    description: 'Изысканное блюдо для гурманов. Невероятно нежное мясо с вкуснейшим французским соусом демиглясс на основе красного вина.  '
                }, {
                    id: 410,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Стейк из лосося с лимонной корочкой',
                    description: 'Сочный и нежный стейк из лосося с румяной лимонной корочкой - приготовлен по нашему особому фирменному рецепту. '
                }, {
                    id: 420,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Морской язык в пряной панировке',
                    description: 'Нежнейшее диетическое блюдо из филе морского языка  - в пряной панировке. '
                }, {
                    id: 430,
                    category: 5,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Горбуша под маринадом из овощей (СССР)',
                    description: 'Ещё одно популярное блюдо из советского детства! Кисло-сладкий овощной маринад из пассерованных,в томатной пасте,лука и моркови-прекрасно сочетается с жареной горбушей. '
                }, {
                    id: 440,
                    category: 6,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Тирамису',
                    description: 'Воздушный, нежный итальянский десерт, с изумительным контрастом сладкого сливочного крема и горьковатого вкуса крепкого кофе.'
                },{
                    id: 450,
                    category: 6,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Шоколадный фондан',
                    description: 'Название этого популярного французского десерта, дословно переводится как «тающий шоколад» . Нежнейший шоколадный кекс с жидкой шоколадной начинкой внутри.\n'
                },{
                    id: 460,
                    category: 6,
                    price: 120,
                    available: true,
                    positionLeft: true,
                    name: 'Трубочки с белковым кремом (СССР)',
                    description: 'Вкус любимых пирожных из детства! Готовим по гостовскому советскому рецепту - именно поэтому они получаются такими вкусными.'
                },{
                    id: 470,
                    category: 6,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Шарлотка с яблоками',
                    description: 'Классический лёгкий пирог - нежная, в меру сладкая шарлотка со свежими яблоками.'
                },{
                    id: 480,
                    category: 6,
                    price: 120,
                    available: true,
                    positionLeft: 0,
                    name: 'Конверты из слоеного теста с мандарином и M&M',
                    description: 'Яркий и необычный десерт, способный удивить даже искушённых сладкоежек!'
                },
            ]
        },
        ORDER = {
            id: null,
            createOrder: null,
            dishes: [],
            customer: {
                fierstName: null,
                lastName: null,
                adress: {
                    country: 'Russia',
                    street: null,
                    floor: null,
                    description: null
                }
            },
            summ: 0
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

    FOOD.handInfoDish = function () {
        $('.btn-close-modal-food').click(() => {
            $('#modal-food').hide()
        })

        $('.menu-title-js').click((e) => {
            $('#modal-food').show()
            let id = e.currentTarget.getAttribute('data-param-id');
            let dish = FOOD.getDish(id)
            $('#modal-food').attr('data-param-id', id)
            $('.modal-title-modal-food').html(dish.name)
            $('.modal-body-modal-food').html(`
                    <p>${dish.description}</p>
                    <p>Цена: ${dish.price} Р</p>
                    `)
            $('.btn-close-modal-buy').off("click")
            $('.btn-close-modal-buy').click((e) => {
                FOOD.changeOrder(id)
            })
        })
    }

    FOOD.changeOrder = function (id) {
        let dish = FOOD.getDish(id)
        ORDER.dishes.push(dish)
        FOOD.updateOrder()
        $('.btn-modal-order').html(`Корзина | ${ORDER.dishes.length}`)
        FOOD.modalOrder()
    }

    FOOD.initEvents = function () {
        $('.btn-close-modal-order').click((e) => {
            $('.modal-order').hide()
        })

        $('.btn-modal-order').click((e) => {
            console.log('Корзина')
            $('#modal-order').show()
        })
    }

    FOOD.updateOrder = function () {
        ORDER.summ = 0;
        ORDER.dishes.forEach((item) => {
            ORDER.summ = item.price + ORDER.summ
        })
        ORDER.createOrder = new Date()
    }

    FOOD.modalOrder = function () {
        // зкорзина
        $('.modal-food').show()

    }

    FOOD.getDish = function (id) {
        // достать из каталога товар по ID
        for (let i = 0; i < FOOD.catalog.length; i++) {
            if (FOOD.catalog[i].id == id) return FOOD.catalog[i]
        }
    }

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
        FOOD.changeTabMenu()
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
                    '                      <div data-param-id="' + filterCatalog[i].id + '" class="menu-title-js menu-title clearfix">\n' +
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
                    '                      <div data-param-id="' + filterCatalog[i].id + '" class="menu-title-js menu-title clearfix">\n' +
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

    FOOD.changeTabMenu = function () {
        $('.nav-link').click((event) => {
            $('.tab-pane').removeClass('show')
            $('.tab-pane').removeClass('active')
            $('.tab-pane').addClass('fade')
            $(`#menu${FOOD.nameActiveCategory}Left`).empty();
            $(`#menu${FOOD.nameActiveCategory}Right`).empty();

            let paramId = event.target.getAttribute('id');
            let name = event.target.getAttribute('data-bs-target');
            if (paramId !== null) {
                FOOD.activeCategory = paramId
                FOOD.nameActiveCategory = name
                $(`#${FOOD.nameActiveCategory}`).removeClass('fade')
                $(`#${FOOD.nameActiveCategory}`).addClass('show active')
                FOOD.menuCatalog()
            }
            FOOD.handInfoDish()
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
            FOOD.handInfoDish(),
            FOOD.initEvents(),
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
