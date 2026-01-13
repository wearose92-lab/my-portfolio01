function initUI() {

  /* =====================
     MOBILE OPEN
  ===================== */
  $('.menu-toggle').on('click', function () {
    $('.M_menuWrap').addClass('open');
    $('.dim').addClass('show');
    $('body').addClass('menu-open');
  });

  /* =====================
     MOBILE CLOSE
  ===================== */
  $('.btn-close, .dim').on('click', function () {
    $('.M_menuWrap').removeClass('open');
    $('.dim').removeClass('show');
    $('body').removeClass('menu-open');
  });

  /* =====================
     MOBILE SUB MENU
  ===================== */
  $('.M_gnb > li > a').on('click', function (e) {
    const $li = $(this).parent();
    const $sub = $(this).next('.gnb_list02');

    if ($sub.length) {
      e.preventDefault();

      $li.toggleClass('open');
      $sub.stop().slideToggle();

      $li.siblings()
        .removeClass('open')
        .find('.gnb_list02')
        .slideUp();
    }
  });

  /* =====================
     PC GNB (hover + focus)
  ===================== */
  $('.gnb > li > a')
    .on('mouseenter focus', function () {
      $(this).next('.gnb_list02').stop().slideDown(200);
    });

  $('.gnb > li')
    .on('mouseleave', function () {
      $(this).find('.gnb_list02').stop().slideUp(200);
    });

  $('.gnb > li > a')
    .on('blur', function () {
      $(this).next('.gnb_list02').stop().slideUp(200);
    });

}


/* DOM 로드 후 실행 */
document.addEventListener('DOMContentLoaded', function () {
  initUI();

  new Swiper('.mainVisualSwiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    allowTouchMove: false
  });
});
