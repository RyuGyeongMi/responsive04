$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },
        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },

    })


});


$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resizw', function () {
        $('.header .mbtn').removeClass(on);
        $('.header .gnb').removeClass(on);
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('wheel touc', function (e) {
        e.preventDefault();
    })
})


$(function () {
    $('#bgnVideo').YTPlayer({
        videoURL: 'https://youtu.be/n9oti9orTuM',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,

    }
    );

    $('.main_movie .control .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.main_movie .control .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.main_movie .control .fullscreen').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });
})


$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

});

$(function () {
    $(function () {
        $('.main_content .best_tab_menu button').on('click', function () {
            let idx = $(this).parent().index();
            $('.main_content .best_tab_menu button').removeClass('on');
            $(this).addClass('on');
            $('.main_content .best_tab_content .con').removeClass('on');
            $('.main_content .best_tab_content .con').eq(idx).addClass('on')
        })
    })
});

$(function () {
    $('.main_product .menu_wrap a').on('mouseenter', function () {
        let idx = $(this).parent().index();
        $('.main_product .menu_wrap a').removeClass('on');
        $(this).addClass('on');
        $('.main_product').css({
            backgroundImage: `url(./images/main_product0${idx + 1}.jpg)`
        })
    })
})




