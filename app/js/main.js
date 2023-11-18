$(function () {
  $(".slider-gallery__inner").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth: true,
  });

  $(".adv-block__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    appendArrows:'.slick-arrows',
    prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
  });
});

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");
const bodyLock = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active");
    if (mobileMenu.classList.contains("menu--active")) {
      burger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });
});

document.addEventListener("click", function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove("burger--active");
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  }
});
