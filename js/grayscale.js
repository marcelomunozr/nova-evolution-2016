//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(document).ready(function($) {
    
    $('.carousel').carousel({
    });

    $('.navbar-nav li.bullet').append('<span >·</span>');
    $('.navbar-nav li.bar').append('<span >|</span>');

    $('#btn-play').click(function(){
        $(this).toggleClass('en-pausa');
        $(this).find('i').toggleClass('fa-play fa-pause');
    });

});

