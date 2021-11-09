$(document).ready(() =>
{
    var scrollMultiplier = 200;
    var scrollTime = 300;

    var categories = $('.categories');

    $('#right-arrow').click(() => {
        var scrollPos = categories.scrollLeft();
        categories.animate({ scrollLeft: scrollPos + scrollMultiplier }, scrollTime);
    });

    $('#left-arrow').click(() => {
        var scrollPos = categories.scrollLeft();
        categories.animate({ scrollLeft: scrollPos - scrollMultiplier }, scrollTime);
    });

    /* NOTE: jquery.hscroll.min.js is still imported. Do things with it later */

});

function toggleSideNav()
{
    var sidenav = $('.sidenav');

    if (sidenav.hasClass('sidenav-collapsed'))
        sidenav.removeClass('sidenav-collapsed')
    else
        sidenav.addClass('sidenav-collapsed')
}
