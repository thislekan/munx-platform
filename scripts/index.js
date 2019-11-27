const hamburger = document.getElementById('hamburger');
const mobileLinksDiv = document.querySelector('.navbar__links-div');
const cancelMobileNav = document.querySelector('.cancel-div');
const chatBotDiv = document.querySelector('.chat-bot');
const chatBotHeader = document.querySelector('.chat-bot-header');
const chatBotForm = document.querySelector('.chat-bot-form');
const chatBotBtn = document.querySelector('.chat-bot .img-div');

hamburger.addEventListener('click', () =>
  mobileLinksDiv.classList.add('displayed')
);

cancelMobileNav.addEventListener('click', () =>
  mobileLinksDiv.classList.remove('displayed')
);

// chatBotDiv.addEventListener('mouseover', () => {
//   chatBotDiv.classList.contains('chat-bot-hovered')
//     ? chatBotDiv.classList.remove('chat-bot-hovered')
//     : chatBotDiv.classList.add('chat-bot-hovered');
// });

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
