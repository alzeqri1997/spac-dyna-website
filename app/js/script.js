(function ($) {
    "use strict";

    // Header Type = Fixed
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var header = $('header').height();

        if (scroll >= header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    })

    // Menu Dropdown Toggle 
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on("click", function () {
            $(this).toggleClass('active');
            $(".header-area .nav").slideToggle();
        });
    }






    // Page loading animation

    $(window).on('load', function () {
        $('#js-preloader').addClass('loaded')
    });
})(window.jQuery);