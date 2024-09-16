import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 4.5,
    spaceBetween: 24,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import tagline from './modules/tagline.js';
tagline();