//Данная функция проверяет, может ли браузер отобразить формат webp и если может то функция добавляет к тегу body класс webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
//================END================
@@include("slick.min.js");

$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnpnext"><img src="img/arrow-right.svg" alt=""></button>',
  });

  // Start tabs
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $(".tab").removeClass("tab--active");
    $(".tabs-content").removeClass("tabs-content--active");
    
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });




  // Start Heart

  $('.product-item__favorite').on('click', function(){
    $('.product-item__favorite').toggleClass('product-item__favorite--active')
  });

});

















