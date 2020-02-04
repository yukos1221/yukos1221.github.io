const aboutEl = document.querySelectorAll('.about-us-link');
const servicingEl = document.querySelectorAll('.servicing-link');
const portfolioEl = document.querySelectorAll('.portfolio-link');
const blogEl = document.querySelectorAll('.blog-link');
const contactEl = document.querySelectorAll('.contact-us-link');
const servicingButtons = document.querySelectorAll('.ourservbtn');
const servicingPage = document.querySelector('.servicing-modal');
const modalImgElem = document.querySelector('#modal-img')
const modalTitleElem = document.querySelector('#modal-title')

aboutEl.forEach((item) => {
  item.addEventListener('click', (item) => {
    item.preventDefault();
    document.querySelector('#about-us-section').scrollIntoView();
  })
})
servicingEl.forEach((item) => {
  item.addEventListener('click', (item) => {
    item.preventDefault();
    document.querySelector('#servicing-section').scrollIntoView();
  })
})
portfolioEl.forEach((item) => {
  item.addEventListener('click', (item) => {
    item.preventDefault();
    document.querySelector('#portfolio-section').scrollIntoView();
  })
})
blogEl.forEach((item) => {
  item.addEventListener('click', (item) => {
    item.preventDefault();
    document.querySelector('#blog-section').scrollIntoView();
  })
})
contactEl.forEach((item) => {
  item.addEventListener('click', (item) => {
    item.preventDefault();
    document.querySelector('#contact-us-section').scrollIntoView();
  })
})

const closeServicingPage = (e) => {
  const target = e.target.classList;
  if (target == 'servicing-modal' || 
    target =='exitbtn' ||
    target == 'far fa-times-circle') {
      modalImgElem.classList.remove('fa-search', 'fa-folder-open',
        'fa-headset', 'fa-book', 'fa-lightbulb', 'fa-palette');
      servicingPage.style.display = "none";
    }
}

const showServicingPage = (e) => {
  const name = e.target.name;
  let title;
  let symbol;
  switch (name) {
    case 'btn1':
      title = 'Research';
      symbol = 'fa-search';
      break;
    case 'btn2':
      title = 'Portfolio';
      symbol = 'fa-folder-open';
      break;
    case 'btn3':
      title = 'Support';
      symbol = 'fa-headset';
      break;
    case 'btn4':
      title = 'Documentation';
      symbol = 'fa-book';
      break;
    case 'btn5':
      title = 'Development';
      symbol = 'fa-lightbulb';
      break;
    case 'btn6':
      title = 'Design';
      symbol = 'fa-palette';
      break;
  }
  modalImgElem.classList.add(symbol);
  modalTitleElem.textContent = title;

  servicingPage.style.display = 'flex';
}

servicingButtons.forEach( item => {
  item.addEventListener('click', showServicingPage);
});
servicingPage.addEventListener('click', closeServicingPage);

$(document).ready(function(){
  $('.our-team-slider').slick({
      prevArrow: '<button class="prev-arrow arrow"></button>',
      nextArrow: '<button class="next-arrow arrow"></button>',
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
            breakpoint: 576,
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
