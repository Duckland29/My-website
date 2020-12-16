jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", { 
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    
    // AJAX CONTACT FORM SUBMIT
    $("#contact-form").submit(function(e) {

        e.preventDefault();
        var postdata = $(this).serialize();

        $.ajax({

            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function(json) {

                $("#contact-form input, #contact-form textarea").removeClass("error");

                setTimeout(function(){

                    if (json.nameMessage !== "") {

                        $("#contact-form-name").addClass("error");

                    }

                    if (json.emailMessage !== "") {

                        $("#contact-form-email").addClass("error");

                    }

                    if (json.messageMessage !== "") {

                        $("#contact-form-message").addClass("error");

                    }

                }, 10);

                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

                    $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
                    $('#contact-form').addClass("success");
                    $('#contact-form textarea, #contact-form input').attr("placeholder","");
                    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);

                }

            }

        });

    });

    
});
a=0
function addCode() { 
    a += 1
    console.log(a)
    if (a === 1){
        document.getElementById("list").innerHTML +=  
        "<li><h5>Hinh Healthcare<h5></li>"; 
        document.getElementById("list").innerHTML +=  
        "<li><h7>I worked on the html for the famous Hinh Healthcare site<h7></li>"; 
    }
    else if (a === 2){
        document.getElementById("list").innerHTML +=  
        "<li><h5>Fake Flappy Bird<h5></li>"; 
        document.getElementById("list").innerHTML +=  
        "<li><h7>I worked on the java script for the infamous flappy bird clone<h7></li>"; 
    }
    else{
        var title = window.prompt("Enter the company: ");
        var paragraph = window.prompt("Enter a description: ");
        document.getElementById("list").innerHTML +=  
        "<li><h5>"+ title +"<h5></li>"; 
        document.getElementById("list").innerHTML +=  
        "<li><h7>"+ paragraph +"<h7></li>"; 
    }
   
}