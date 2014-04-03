$(function() {
    $('section.landing-image').css('height', $(window).height() - $('nav').height());

    $('.shape').each(function(idx, elm) {
        var _elm = $(elm);
        _elm.shape();
        _elm.find('.action').on('click', function() {
            _elm.shape('flip right');
        });
    });
    
});