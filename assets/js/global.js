$(function() {
    var eventHub = {};

    $(eventHub).on('btn-write:click', function(e) {
        $('section.article-list').fadeOut(function() {
            $('#editor').removeClass('hidden');
            $('main').css({
                height: ($(window).outerHeight() - 100) + 'px'
            });
        });
    });

    $('#btn-write').on('click', function(e) {
        e.preventDefault();

        var _event = $.Event('btn-write:click');
        $(eventHub).trigger(_event);
    });
});