var main = function(){
    $('.dropdown-toggle').click(function(){
                                $('.dropdown-menu').toggle();
                                });
    
    $('.arrow-next').click(function(){
                           var currentSlide = $('.active-slide');
                           var nextSlide = currentSlide.next();
                           var currentDot = $('.active-dot');
                           var nextDot = currentDot.next();
                           
                           if (nextSlide.length == 0){
                           nextSlide = $('.slide').first();
                           nextDot = $('.dot').first();
                           }
                           
                           currentSlide.fadeOut(600).removeClass('active-slide');
                           nextSlide.fadeIn(600).addClass('active-slide');
                           
                           currentDot.removeClass('active-dot');
                           nextDot.addClass('active-dot');
                           
                           });
    
    $('.arrow-prev').click(function(){
                           var currentSlide = $('.active-slide');
                           var prevSlide = currentSlide.prev();
                           var currentDot = $('.active-dot');
                           var prevDot = currentDot.prev();
                           
                           if (prevSlide.length == 0){
                           prevSlide = $('.slide').last();
                           prevDot = $('.dot').last();
                           }
                           
                           currentSlide.fadeOut(600).removeClass('active-slide');
                           prevSlide.fadeIn(600).addClass('active-slide');
                           
                           currentDot.removeClass('active-dot');
                           prevDot.addClass('active-dot');
                           
                           });
    
    $('.article').click(function(){
                        $('.article').removeClass('current');
                        $('.description').hide();
                        $(this).addClass('current');
                        $(this).children('.description').show();
                        })
    
    $(document).keypress(function(event){
                         if (event.which==111){
                         $('.current').children('.description').toggle();
                         }
                         else if (event.which==110){
                         currentArticle = $('.current');
                         nextArticle = currentArticle.next();
                         currentArticle.removeClass('current');
                         nextArticle.addClass('current');
                         }
                         });
}

$(document).ready(main)