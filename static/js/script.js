document.addEventListener('DOMContentLoaded', function()
{
    var scrollMultiplier = 200;
    var scrollTime = 300;

    $('#right-arrow').click(function() {
        var scrollPos = $('.categories').scrollLeft();
        $('categories').animate({scrollLeft: scrollPos + scrollMultiplier }, scrollTime);
        console.log(scrollPos + 200);
    });

    $('#left-arrow').click(function() {
        var scrollPos = $('.categories').scrollLeft();
        $('categories').animate({scrollLeft: scrollPos - scrollMultiplier }, scrollTime);
        console.log(scrollPos + 200);
    });
});

toggleSideNav = function()
{
    if ($('.sidenav').hasClass('sidenav-collapsed')) 
        $('.sidenav').removeClass('sidenav-collapsed')
    else
        $('.sidenav').addClass('sidenav-collapsed')
}
