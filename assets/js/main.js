$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > (
            $(window).height()) / 100) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }
    });
    // Open Model
    $('.model-open').on('click', function (e) {
        e.preventDefault();
        var model = $(this).attr('data-model');
        $(model).addClass('is-open');
    });
    // Close Model
    $('.close_model').on('click', function () {
        $(this).parents('.model').removeClass('is-open');
        $('.humburgerbg').removeClass('is-open');
        $('.video_full iframe').attr('src', '');
    });

    $('.overlay').on('click', function () {
        $(this).parent('.model').removeClass('is-open');
    });

    $('.model-video').on('click', function () {
        var src = $(this).attr('data-video');
        $('.video_full iframe').attr('src', src);
    });

    //


    $('.form-control').each(function () {
        var label = $(this).parent('.form-group');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-control').on('keyup', function () {
        var label = $(this).parent('.form-group');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-group input,textarea,select').focus(function () {
        $(this).parent('.form-group').addClass('is-focus');
    });
    $('.form-group input,textarea').focusout(function () {
        var label = $(this).parent('.form-group');
        var isEmpty = $(this).val() === '';
        label.toggleClass('is-focus valid', !isEmpty);
    });
    if ($('.form-group input').val() == '') {
        $(this).parent('.form-group').addClass('valid');
    }

    $('.selectbx').change(function () {
        var isEmpty = $(this).val() === '';
        $(this).toggleClass('active', !isEmpty);
    })

    //

    $('.down-arrow img').click(function () {
        $('html, body').animate({
            scrollTop: $(".home-secA").offset().top
        }, 500);
    });

    $('.showcase-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        navText: ["<img src='assets/icons/prev.png'>", "<img src='assets/icons/next.png'>"],
        smartSpeed: 1200,
        autoplay: false,
        responsive: {
            0: {
                items: 1.3,
                margin: 20,
                nav: false,
            },
            768: {
                items: 2.3,
                margin: 20,
                nav: true,
            },
            992: {
                items: 2.5,
                margin: 10,
                nav: true,
            }
        }
    });

    $('.service-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        navText: ["<img src='assets/icons/prev.png'>", "<img src='assets/icons/next.png'>"],
        smartSpeed: 1200,
        autoplay: false,
        responsive: {
            0: {
                items: 1.3,
                margin: 20,
                nav: false,
            },
            768: {
                items: 2.3,
                margin: 10,
                nav: true,
            },
            992: {
                items: 3,
                margin: 15,
                nav: true,
            }
        }
    });

    $('.client-slider').owlCarousel({
        loop: true,
        margin: 0,
        dotsEach: true,
        nav: false,
        smartSpeed: 1200,
        autoplay: false,
        responsive: {
            0: {
                items: 1.3,
                margin: 20,
                nav: false,
            },
            768: {
                items: 2.3,
                margin: 10,
                nav: true,
            },
            992: {
                items: 1.5,
                margin: 0,
            }
        }
    });

    $('.more-blog-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ["<img src='assets/icons/prev.png'>", "<img src='assets/icons/next.png'>"],
        smartSpeed: 1200,
        autoplay: false,
        responsive: {
            0: {
                items: 1.3,
                margin: 20,
                nav: false,
            },
            768: {
                items: 2.3,
                margin: 10,
                nav: true,
            },
            992: {
                items: 3,
                margin: 15,
            }
        }
    });

});