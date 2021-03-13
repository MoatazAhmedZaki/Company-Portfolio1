if(innerWidth< 1000)
{
    $(".mynav").addClass("white-nav");
             $("#main-nav").addClass("navbar-shrink");
            

};


    $(window).scroll(function(){
        if(($(window).scrollTop() > $("#main-nav").height() +50) 
          && (innerWidth > 1000)
          ){
            $("#main-nav").addClass("navbar-shrink");
         

        }
        
        else if(($(window).scrollTop() < $("#main-nav").height()+50) 
               && (innerWidth > 1000)
               ){
        $("#main-nav").removeClass("navbar-shrink");
            

        }
    });


















var services =$('#services');
$('.services').click(function () {
            $('html, body').animate({
                scrollTop: services.offset().top - 50 }, 1000);

        })



var PORTFOLIO =$('#portfolio');
$('.portfolio').click(function () {
    
            $('html, body').animate({
                scrollTop: PORTFOLIO.offset().top - 50 }, 1000);

        })
var ABOUT =$('#about');
$('.about').click(function () {

            $('html, body').animate({
                scrollTop: ABOUT.offset().top - 50 }, 1000);

        })

var TEAM =$('#team');
$('.team').click(function () {

            $('html, body').animate({
                scrollTop: TEAM.offset().top  }, 1000);

        })

var contact =$('#contact');
$('.contact').click(function () {

            $('html, body').animate({
                scrollTop: contact.offset().top  }, 1000);

        })