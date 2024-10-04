import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function swiper (){

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
}

export default swiper
