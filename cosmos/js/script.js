$(document).ready(function(){
    $('.space-slider').slick({
      prevArrow: '<button class="prev-arrow arrow"></button>',
      nextArrow: '<button class="next-arrow arrow"></button>'
    });
});

$('.open-popup').magnificPopup({
  removalDelay: 300,
  type:'inline',
  midClick: true
});
