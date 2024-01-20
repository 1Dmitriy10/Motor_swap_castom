
//подключение в gulp 
import Swiper from 'swiper/bundle';

export const swiper = new Swiper('.swiper', {
    // Стрелки
    navigation: {
        nextEl: '.slider-btn-next',
        prevEl: '.slider-btn-prev',
    },

    /*Бесконечная прокрутка*/
    loop: true,

    /*Показывать по n карточек*/
    slidesPerView: 1,
    /*Поставить карточку в центр*/
    centeredSlides: true,
    // При достижении конца, перепрыгнуть в начало
    rewind: true,
    // Автовоспроизведение
    // autoplay: {
    //     delay: 1000,
    //     //остановка при наведении
    //     pauseOnMouseEnter: true
    // },
    //скорость перелистывания
    speed: 2000,
});