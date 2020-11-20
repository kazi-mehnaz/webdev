$(function(){

    // navbar bg
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.navbar').addClass('headerbg');
        }
        else {
           $('.navbar').removeClass('headerbg'); 
        }
    });  
    
    
     //animation scroll js
     var html_body = $('html, body');
     $('nav a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 90
                 }, 1500);
                 return false;
             }
         }
     });
    
        
    // back to top button    
    $('.back-top').click(function(){
        $('html, body').animate({scrollTop:0},1500); 
     });
    // back top button fadein fadeout / menu add class  
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
           $('.back-top').fadeIn(500);
        }
        else {
            $('.back-top').fadeOut(500);
        }
    
    });  
    
    
    
    
    });