const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.textContent = open ? 'Menu' : 'Close';
  nav.classList.toggle('is-open', !open);
});

nav.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  nav.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
});
