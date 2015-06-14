$(function(){
    $('#skip_nav').bind('click', function(){
        $(this).toggleClass('open');
        $('#primary_nav').toggleClass('open');
    });
});
