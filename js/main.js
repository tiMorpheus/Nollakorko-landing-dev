$(function () {
   $('.video-carousel-block').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.arrows'),
      prevArrow: '<button id="prev" type="button" class="btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
      nextArrow: '<button id="next" type="button" class=" btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
   });
});