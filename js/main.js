$(function(){
    $('#btn-play').on('click', function (e) {
        if ($('#elvideo').get(0).paused) {
            $('#elvideo').get(0).play();
        }
        else {
            $('#elvideo').get(0).pause();
        }
        $('.video-content').toggleClass('videoactivo');
        e.preventDefault();
    });
    $('#elvideo').bind('ended', function() {
        $('#elvideo')[0].load();
        $('#btn-play').toggleClass('en-pausa');
        $('#btn-play').find('i').toggleClass('fa-play fa-pause');
    });


    // MARCELLUS
    $('#evo-nav').click(function(){
        $(this).toggleClass('open');
        $('.menu-evolution').toggleClass('open');
    });
    $('.nav.navbar-nav .page-scroll a').click(function(){
        $('#evo-nav').toggleClass('open');
        $('.menu-evolution').toggleClass('open');
    });
});