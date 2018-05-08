$(document).ready(function() {
    if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
        var getCollapsed = Cookies.get('collapsed_Nodes');
        var checkCollapsed = getCollapsed.split('|');
        var arrayLength = checkCollapsed.length;
        for (var i = 0; i < arrayLength; i++) {
            $('[data-node="#' + checkCollapsed[i] + '"]').next('.accordion_body').addClass('hide');
            $('[data-node="#' + checkCollapsed[i] + '"]').children('.plusminus').children('img').attr('src', './icon/plus.svg');
        }
    }

    var adjustCookie = function() {
        var tags = [];
        $('.accordion_container .hide').each(function() {
            var tag = $(this).prev('.accordion_head').data('node');
            tags.push(tag.replace('#', ''));
        });

        if (tags.length) {
            Cookies.set('collapsed_Nodes', tags.join('|'), {
                expires: 7,
                path: window.location.pathname
            });
        } else {
            Cookies.remove('collapsed_Nodes', {path: window.location.pathname});
        }
    }

    $('.accordion_head').click(function() {
        if ($(this).next('.accordion_body').is(':visible')) {
            $(this).next('.accordion_body').slideUp(300);
            $(this).next('.accordion_body').addClass('hide');
            $(this).children('.plusminus').children('img').attr('src', './icon/plus.svg');
        } else {
            $(this).next('.accordion_body').slideDown(300);
            $(this).next('.accordion_body').removeClass('hide');
            $(this).children('.plusminus').children('img').attr('src', './icon/minus.svg');
        }
        adjustCookie();
    });
});