/** @format */
// Preloader Js
let Mypreloader = document.getElementById('preloader');
function Preloader() {
  Mypreloader.style.display = 'none';
}
//On Scroll Navigation Change Color + Logo
let NavigationBar = document.querySelector('.navbar');
let scrollTopButton = document.querySelector('#scrollUp');
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 20) {
    NavigationBar.classList.add('scroll-magic');
    NavigationBar.classList.add('scroll-magic2');
    NavigationBar.classList.add('scroll-magic3');
    document.querySelector('.by').style.display = 'block';
    document.querySelector('.ok').style.display = 'none';
  } else {
    NavigationBar.classList.remove('scroll-magic');
    NavigationBar.classList.remove('scroll-magic2');
    NavigationBar.classList.remove('scroll-magic3');
    document.querySelector('.by').style.display = 'none';
    document.querySelector('.ok').style.display = 'block';
  }
  // window scroll greater tham 500, run the click to top css
  ('strick method');
  let scroll = document.documentElement.scrollTop;
  if (scroll >= 500) {
    scrollTopButton.classList.add('scrollActive');
  } else {
    scrollTopButton.classList.remove('scrollActive');
  }
};
//Swiper Js Banner Slider
var swiper = new Swiper('.ownSlider', {
  //   spaceBetween: 30,
  //   slidesPerView: 'auto',
  centeredSlides: true,
  speed: 2000,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
//Swiper Js Testimonial Slider
var swiper = new Swiper('.review', {
  slidesPerView: 1,
  fadeEffect: {
    crossFade: true,
  },
  effect: 'fade',
  loop: true,
  allowTouchMove: false,
  speed: 2500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});
//Auto Typing Js Run
const autoTyping = new Typed('.auto', {
  strings: [' Anza Muneeb Khan', 'Web Developer', 'also a Web Desinger....'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
// counter Js Run
document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  // counter("count1", 0, 10, 2000);
  // counter("count2", 100, 20, 3000);
  // counter("count3", 0, 30, 4000);
  // counter("count4", 0, 10, 2000);
  counter('count1', 0, 10, 2000);
  counter('count2', 0, 50, 3000);
  counter('count3', 0, 100, 4000);
  counter('count4', 0, 100, 4000);
});
//
let buttons = document.querySelectorAll('.filter-btn');
buttons.forEach((btn1) =>
  btn1.addEventListener('click', () => {
    buttons.forEach((btn2) => btn2.classList.remove('active'));
    btn1.classList.add('active');
    // btn1 and btn2 is a random parameters...

    let filterValue = btn1.dataset.filter;
    // this filter is a class not a property

    $('.grid').isotope({ filter: filterValue });
    // this filter is not a class is a property
  })
);

$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: '0.6s',
});
