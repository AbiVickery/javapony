$(document).ready(function(){
    // do stuff
    // console.log('hello world');
    $('.hello').click(function(){
        // $('.hello').addClass('goodbye');
        $('.hello').toggleClass('goodbye');
    })
    $('.pony1').toggleClass('.pony2').toggleClass('.pony3');
});