

// navbar add class

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 500) {
        $(".navbar").addClass("test");
      } else {
        $("navbar").removeClass("test");
      }
    });
  });



$(document).ready(function(){
    $('.banner-area').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
});
