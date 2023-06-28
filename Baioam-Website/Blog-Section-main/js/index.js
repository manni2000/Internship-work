
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  

    slidesPerView: 3,
        // loop: true,
        grabCursor : true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
            // width:50,
          },
          1200: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 3,
          },
        },
      });
    