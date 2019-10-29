$(function(){
    $('a').mouseenter(function(){
        $('.open').css({
            'display': 'none'
        });
        $('.close').css({
            'display': 'flex'
        });
    });
});