import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperGallery = () => {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar_gallery',
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2.9,
      },
    },
  });
};

export default swiperGallery;
