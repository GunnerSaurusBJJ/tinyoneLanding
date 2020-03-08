$(document).ready(function() {
  $(".scrdown").click(function() {
    let scrollName = $(this).attr("data-scroll"),
      scrollElem = $(scrollName),
      scrollTop = scrollElem.offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollTop
      },
      300
    );
  });
  $(".header-menu").click(function() {
    $(".header-menu").toggleClass("header-menu__cross");
  });
});
// const burger = document.querySelector(".header-menu");
// burger.addEventListener("click", () => {
//   burger.classList.toggle("header-menu__cross");
// });
