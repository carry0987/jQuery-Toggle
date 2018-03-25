// jQuery Toggle Script
$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        var tag = $(this).attr("node-tag");
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).next(".accordion_body").addClass("collapsed");
            Cookies.set('collapsed_Nodes', Cookies.get('collapsed_Nodes')+tag, { expires: 7, path: '' });
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).next(".accordion_body").addClass("expadned");
            $(this).children(".plusminus").text('-');
        }
    });
});