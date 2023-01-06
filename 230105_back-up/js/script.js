$(document).ready(function () {
  // 리사이징 할때마다 새로고침
  //     var lastWidth = $(window).width();
  //     $(window).resize(function () {
  //       if ($(window).width() != lastWidth) {
  //           location.reload();
  //           lastWidth = $(window).width();
  //           return false;
  //       }
  //   });

  // ====== Nav ===== //

  $(".hd-nav").hover(
    function () {
      $(".hover-bg").stop().show();

      //   $(".nav-bg").stop().show();
      $(".nav-bg").stop().slideDown();
    },
    function () {
      $(".hover-bg").stop().hide();

      $(".nav-bg").stop().hide();
      //   $(".nav-bg").stop().slideUp();
    }
  );

  $(".nav-bg").hover(
    function () {
      $(".hover-bg").stop().show();

      $(".nav-bg").stop().show();
    },
    function () {
      // $(".nav-bg").stop().hide();
      $(".hover-bg").stop().hide();

      $(".nav-bg").stop().hide();

      // $(".nav-bg").stop().slideUp();
    }
  );

  // ====== Notice Swiper ===== //

  var swiper01 = new Swiper(".mySwiper.nt-sd", {
    direction: "vertical",

    navigation: {
      nextEl: ".swiper-button-down",
      prevEl: ".swiper-button-up",
    },
    //   autoplay: {
    //     delay: 1000,
    //   },
  });

  var swiper02 = new Swiper(".mySwiper.vs-sd", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });


  var swiper03 = new Swiper(".mySwiper.lt-sd-n", {
    navigation: {
      nextEl: ".swiper-button-next.n-btn-r",
      prevEl: ".swiper-button-prev.n-btn-l",
    },

  });

  var swiper04 = new Swiper(".mySwiper.lt-sd-p", {
    navigation: {
      nextEl: ".swiper-button-next.p-btn-r",
      prevEl: ".swiper-button-prev.p-btn-l",
    },

  });


}); //ready end
