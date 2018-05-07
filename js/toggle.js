$(document).ready(function() {
    var adjustCookie = function() {
        var tags = [];
        $('.accordion_container .hide').each(function() {
            var tag = $(this).prev('.accordion_head').data("node-tag");
            tags.push(tag.replace('#', ''));
        });

        if (tags.length) {
            Cookies.set('collapsed_Nodes', tags.join('|'), {
                expires: 7
            });
        } else {
            Cookies.remove('collapsed_Nodes');
        }
    }

    $(".accordion_head").click(function() {
        var tag = $(this).data("node-tag");
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).next(".accordion_body").addClass("hide");
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).next(".accordion_body").removeClass("hide");
            $(this).children(".plusminus").text('-');
        }
        adjustCookie();
    });

    if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
        var getCollapsed = Cookies.get('collapsed_Nodes');
        var checkCollapsed = getCollapsed.split('|');
        var arrayLength = checkCollapsed.length;
        for (var i = 0; i < arrayLength; i++) {
            $('[data-node-tag="#' + checkCollapsed[i] + '"]').next(".accordion_body").addClass("hide");
        }
    }
});