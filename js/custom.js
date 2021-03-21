$('document').ready(function(){
        // Browse all js
        $(".images-item").slice(0, 4).show();
        $(".browse-all").on('click', function (e) {
            e.preventDefault();
            $(".images-item:hidden").slice(0, 2).slideDown(500);
            if ($(".images-item:hidden").length == 0) {
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 85
            }, 1500);
        });
    
        // Valentine Countdown Timer
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
    
        let Valentine = "Feb 14, 2022 00:00:01",
            countDown = new Date(Valentine).getTime(),
            x = setInterval(function() {    
    
                let now = new Date().getTime(),
                distance = countDown - now;
    
                document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            }, 0);
    
        // Testimonial team slider
        $('.team-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '#testimonial .right',
            nextArrow: '#testimonial .left',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,      
                    slidesToShow: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,      
                    slidesToShow: 1
                    }
                }
            ]    
        });
    
        // Window scroll function
        $(window).on('scroll', function(){
            var scrollAmount = $(this).scrollTop();
            
            // Fixed navbar 
            if(scrollAmount > 200){
                $('.navbar').addClass('fixed-top');
            }
            else{
                $('.navbar').removeClass('fixed-top');
            }
            // Back To Top btn
            if(scrollAmount > 300){
                $('.bake-btn').fadeIn();
            }
            else{
                $('.bake-btn').fadeOut();
            }
        });
        
        // Back To Top btn
        $('.bake-btn').on('click', function(){
            $('html, body').animate({scrollTop: 0}, 1500)
        });

        // Smooth section scroll code start here  
    $(".navbar ul li a").on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 2000, function () {
            // window.location.hash = target;
        });
    });

    // PreLoader Js 
    $(window).on('load', function(){
        $('.preloader').delay().fadeOut(1500);
    });
    // Aos Animation js
    AOS.init();
    
});