const hamburger = document.getElementById('hamburger');
const mobileLinksDiv = document.querySelector('.navbar__links-div');
const cancelMobileNav = document.querySelector('.cancel-div');
const chatBotDiv = document.querySelector('.chat-bot');
const chatBotHeader = document.querySelector('.chat-bot-header');
const chatBotForm = document.querySelector('.chat-bot-form');
const chatBotBtn = document.querySelector('.chat-bot .img-div');
const slides = document.getElementsByClassName('slides');
const navbar = document.querySelector('.navbar');
const triggers = document.querySelectorAll('.dropdown-trigger');

window.onscroll = () => {
  if (window.pageYOffset > mobileLinksDiv.offsetHeight + 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

hamburger.addEventListener('click', () =>
  mobileLinksDiv.classList.add('displayed')
);

cancelMobileNav.addEventListener('click', () =>
  mobileLinksDiv.classList.remove('displayed')
);

chatBotBtn.addEventListener('click', () => {
  if (chatBotDiv.classList.contains('show-chat-bot')) {
    chatBotDiv.classList.remove('show-chat-bot');
    chatBotHeader.classList.remove('clicked');
    chatBotForm.classList.remove('show-chat-bot-form');
  } else {
    chatBotDiv.classList.add('show-chat-bot');
    chatBotHeader.classList.add('clicked');
    chatBotForm.classList.add('show-chat-bot-form');
  }
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 30000);
}

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}
function handleLeave() {
  this.classList.remove('trigger-enter');
  setTimeout(() => this.classList.remove('trigger-enter-active'), 150);
}

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
