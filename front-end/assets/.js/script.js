$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
      $('#home').removeClass('navbar-scroll');
      $('#brand').removeClass('text-gradient-darkblue-cyan');
    } else {
      $('#home').addClass('navbar-scroll');
      $('#brand').addClass('text-gradient-darkblue-cyan');
    }
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    $('#backTop').addClass('show');
  } else {
    $('#backTop').removeClass('show');
  }
};