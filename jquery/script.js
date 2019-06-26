$(function () {
    $(document).ready(function () {
        $("#check").click(function () {
            $('html, body').animate({
                scrollTop: $(".features").offset().top
            }, 700);
        });
    });

    $(document).ready(function () {
        $(".scrollup").click(function () {
            $('html, body').animate({
                scrollTop: $("html").offset().top
            }, 700);
        });
    });

    $(window).scroll(function () {
            if ($(this).scrollTop() > 300) $(".scrollup").fadeIn();
            else $(".scrollup").fadeOut();
        }

    )
});