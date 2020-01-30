$(document).ready(function(){
    $('.our-team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});

const aboutEl = document.querySelector('#about-us-link');
const servicingEl = document.querySelector('#servicing-link');
const portfolioEl = document.querySelector('#portfolio-link');
const blogEl = document.querySelector('#blog-link');
const contactEl = document.querySelector('#contact-us-link');
const aboutEl2 = document.querySelector('#about-us-link2');
const servicingEl2 = document.querySelector('#servicing-link2');

const aboutus = (e) => {
  e.preventDefault();
  document.querySelector('#about-us-section').scrollIntoView();
}
const servicing = (e) => {
  e.preventDefault();
  document.querySelector('#servicing-section').scrollIntoView();
}
aboutEl.onclick = aboutus;
servicingEl.onclick = servicing;
aboutEl2.onclick = aboutus;
servicingEl2.onclick = servicing;

portfolioEl.onclick = function(e){
  e.preventDefault();
  document.querySelector('#portfolio-section').scrollIntoView();
}
blogEl.onclick = function(e){
  e.preventDefault();
  document.querySelector('#blog-section').scrollIntoView();
}
contactEl.onclick = function(e){
  e.preventDefault();
  document.querySelector('#contact-us-section').scrollIntoView();
}