document.addEventListener('DOMContentLoaded', function()
{
    $('#right-arrow').click(function() {
        var scrollPos = $('.categories').scrollLeft();
        $('categories').animate({scrollLeft: scrollPos + 200 }, 300);
        console.log(scrollPos + 200);
    });
});
