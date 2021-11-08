document.addEventListener('DOMContentLoaded', function()
{
    var scrollMultiplier = 200;
    var scrollTime = 300;

    $('#right-arrow').click(function() {
        var scrollPos = $('.categories').scrollLeft();
        $('.categories').animate({ scrollLeft: scrollPos + scrollMultiplier }, scrollTime);
    });

    $('#left-arrow').click(function() {
        var scrollPos = $('.categories').scrollLeft();
        $('.categories').animate({ scrollLeft: scrollPos - scrollMultiplier }, scrollTime);
    });

    $('.categories').on('mousewheel DOMMouseScroll', function(event){

        var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

        $(this).stop().animate({scrollLeft: $(this).scrollLeft() - (delta * 100) }, 100);
        event.preventDefault();
    });
});

toggleSideNav = function()
{
    if ($('.sidenav').hasClass('sidenav-collapsed'))
        $('.sidenav').removeClass('sidenav-collapsed')
    else
        $('.sidenav').addClass('sidenav-collapsed')
}
