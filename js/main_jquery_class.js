$(document).ready(function () {
    $(function () {
        $("#back-top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#back-top").fadeIn();
            } else {
                $("#back-top").fadeOut();
            }
        });
        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
    });


    $(function () {
        var jqBar = $('.skillsArea');
        var jqBarStatus = true;
        $(window).scroll(function () {
            var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height() + 250));
            if (scrollEvent && jqBarStatus) {
                jqBarStatus = false;
                (function ($) {
                    $('.first.circleValue').circleProgress({
                        startAngle: -Math.PI * 1 / 2,
                        value: 0.65,
                    }).on('circle-animation-progress',
                        function (event, progress) {
                            $(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
                        });
                    $('.second.circleValue').circleProgress({
                        startAngle: -Math.PI * 1 / 2,
                        value: 0.77,
                    }).on('circle-animation-progress',
                        function (event, progress) {
                            $(this).find('strong').html(Math.round(77 * progress) + '<i>%</i>');
                        });
                    $('.third.circleValue').circleProgress({
                        startAngle: -Math.PI * 1 / 2,
                        value: 0.45,
                    }).on('circle-animation-progress',
                        function (event, progress) {
                            $(this).find('strong').html(Math.round(45 * progress) + '<i>%</i>');
                        });
                    $('.forth.circleValue').circleProgress({
                        startAngle: -Math.PI * 1 / 2,
                        value: 0.70,
                    }).on('circle-animation-progress',
                        function (event, progress) {
                            $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
                        });
                })(jQuery);
            }
        });
    });
    $(".item").magnificPopup({type: 'image'});
    $(".sidebar a").mPageScroll2id();
});
