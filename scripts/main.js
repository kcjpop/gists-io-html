$(function() {
    $('section.landing').css('height', $(window).height() - $('nav').height());
    $('section.subpage').css('height', $(window).height());

    $('.shape').each(function(idx, elm) {
        var _elm = $(elm);
        _elm.shape();
        _elm.find('.action').on('click', function() {
            _elm.shape('flip right');
        });
    });
    
});