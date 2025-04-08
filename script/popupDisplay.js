const openBtn = document.querySelector('.openPopup_btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup_btn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  popup.classList.add("active");
  document.body.classList.add("noscroll");
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popup.classList.remove("active");
  document.body.classList.remove("noscroll");
});

// Fermer si on clique en dehors de la boîte
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popup.classList.remove("active");
    document.body.classList.remove("noscroll");
  }
});