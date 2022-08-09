//스크립트 위로 튕기는거방지
$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});


//슬라이드
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});

//영화차트 탭 메뉴
var movBtn = $(".product_title > ul > li");
var movCont = $(".product_list > div");

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  movBtn.removeClass("active");
  target.addClass("active");
  movCont.css("display", "none");
  movCont.eq(index).css("display", "flex");

});
//햄버거메뉴
$('#menu').click(function () {
  if ($('.header_sitemap').hasClass('on')) {
    $('.header_sitemap').removeClass('on'); // true
  } else {
    $('.header_sitemap').addClass('on'); // false
  }
})