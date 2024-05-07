jQuery(window).on('load', function() {
      
    
    $(".preloader").addClass("preloader-hidden");

    setTimeout(function(){

        $(".hero .animation-container").each(function(){

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 900 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    $(window).on('load', function() {
        
    
        $(".preloader").addClass("preloader-hidden");
        
        
        setTimeout(function(){
            
            $(".hero .animation-container").each(function(){

                var e = $(this);

                setTimeout(function(){
                    
                    e.addClass("run-animation");
                    
                }, e.data("animation-delay") );

            });
            
        }, 900 );
        
    });
    
    
    
    $(".hero .background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });
    
    
    
    $(".open-popup").click(function(){
        
        $(".popup").addClass("show");
        $(".popup").append('<div class="close-popup backface"></div>');
        
    });

    
    $(document).on('click', '.close-popup', function(){ 
        
        $(".popup").removeClass("show");
        $(".popup .backface").remove();
        
    });
    
    
    
    $('.subscribe-form').submit(function() {

        var postdata = $('.subscribe-form').serialize();

        $.ajax({

            type: 'POST',
            url: 'assets/php/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {

                $('.subscribe-form').removeClass("form-error");

                if(json.valid === 0) {
                    
                    $('.subscribe-form').addClass("form-error");
                    
                } else {

                    $('.subscribe-form').addClass("form-success");
                    $('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
                    
                }
                
            }

        });

        return false;

    });
    
    
});