
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
    // Slider
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    var clique = document.getElementById("demo1");
    var percentage = document.getElementById("percentage");
    output.innerHTML = slider.value;
clique.innerHTML = slider.value;
    percentage.innerHTML = "165";
    slider.oninput = function() {
      output.innerHTML = this.value;
        clique.innerHTML = this.value;
      if (this.value == 3){
          $("#sliderimg").attr("src","img/clique03.png");
          percentage.innerHTML = "838";
      } else if (this.value == 4){
          $("#sliderimg").attr("src","img/clique04.png");
          percentage.innerHTML = "646";
      } else if (this.value == 5){
          $("#sliderimg").attr("src","img/clique05.png");
          percentage.innerHTML = "490";
      } else if (this.value == 6){
          $("#sliderimg").attr("src","img/clique06.png");
          percentage.innerHTML = "371";
      } else if (this.value == 7){
          $("#sliderimg").attr("src","img/clique07.png");
          percentage.innerHTML = "289";
      } else if (this.value == 8){
          $("#sliderimg").attr("src","img/clique08.png");
          percentage.innerHTML = "212";
      } else if (this.value == 9){
          $("#sliderimg").attr("src","img/clique09.png");
          percentage.innerHTML = "165";
      } else if (this.value == 10){
          $("#sliderimg").attr("src","img/clique10.png");
          percentage.innerHTML = "111";
      } else if (this.value == 11){
          $("#sliderimg").attr("src","img/clique11.png");
          percentage.innerHTML = "73";
      } else if (this.value == 12){
          $("#sliderimg").attr("src","img/clique12.png");
          percentage.innerHTML = "62";
      } else if (this.value == 13){
          $("#sliderimg").attr("src","img/clique13.png");
          percentage.innerHTML = "40";
      } else if (this.value == 14){
          $("#sliderimg").attr("src","img/clique14Zoomed.png");
          percentage.innerHTML = "21";
      }
        
    }
    
    
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    
    // Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items1');
        $container.isotope({
            filter: '.residential',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat1 a').click(function() {
            $('.cat1 .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
    
    

}());


}
main();
