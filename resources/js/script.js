$(document).ready(function(){

        // this is for sticky nav
        var waypoint = new Waypoint({
            element: $('.js-section-features'),
            handler: function(direction) {
              if (direction=="down"){
                  $('nav').addClass("sticky");
              }else{
                  $('nav').removeClass("sticky")
              }
            },
            offset:"60px"
          });

// --------------top button animate------------------------------- 

$('.js-scroll-to-plans').click(function(){
    // console.log("this is very good");
    $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},800)
   
});

$('.js-scroll-to-start').click(function(){
    console.log("this is very good");
    $('html,body').animate({scrollTop:$('.js-section-features').offset().top},800)
});

////////////////////////// navigation animation /////////////////


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ..................Animation on scroll . ........

var waypoint = new Waypoint({
    element: $('.js-wp-1'),
    handler: function(direction) {
            $('.js-wp-1').addClass('animated animate__fadeIn')
    },
            offset:"50%"
});


var waypoint = new Waypoint({
    element: $('.js-wp-2'),
    handler: function(direction) {
            $('.js-wp-2').addClass('animated animate__fadeInUp')
    },
            offset:"90%"
});


var waypoint = new Waypoint({
    element: $('.js-wp-3'),
    handler: function(direction) {
            $('.js-wp-3').addClass('animated animate__fadeIn')
    },
            offset:"60%"
});

var waypoint = new Waypoint({
    element: $('.js-wp-4'),
    handler: function(direction) {
            $('.js-wp-4').addClass('animated animate__pulse')
    },
            offset:"70%"
});

console.log("Santosh");
// $('js-wp-1').waypoint(function(direction){
//     $('.js-wp-1').addClass('animated fadeIn');
// },{offset:'50%'});

// .... mobile navigation ........... 
$('.js-nav-icon').click(function () {
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');
    nav.slideToggle(200);
    console.log("before if");
    if (icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round')
      console.log("in if");
      icon.removeClass('ion-navicon-round')
    }else{
      icon.addClass('ion-navicon-round')
      icon.removeClass('ion-close-round')
      console.log("else");
    }
  });



});