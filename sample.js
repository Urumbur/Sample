$('document').ready(function() {

    // Smoothe scroll
    $("a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var id = "#" + e.target.hash.slice(1);
        var targetOffset = $(id).offset().top;
     
        $("html").animate({
            scrollTop: parseFloat(targetOffset-100)
        }, 800);
    });

    // Hamburger animation
    var x = $(window).width();
    if (x<1055) {
        $('.hamburger').click(function() {
            $('.hamburger').toggleClass('change');
        });
        $('.goto').click(function() {        
            if ($('.hamburger').hasClass('change')) {
                $('.hamburger').toggleClass('change');  
            }
        });
    
        $(".hamburger").click(function(){
            $(".moveMenu").animate({
                height: 'toggle'
            });
        });
        $(".goto").click(function(){
            $(".moveMenu").animate({
                height: 'toggle'
            });
        });
    }
});