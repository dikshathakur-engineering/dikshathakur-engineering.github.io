const toggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
const storedTheme = localStorage.getItem('diksha-theme');
if (storedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
toggle?.setAttribute('aria-pressed', storedTheme === 'dark' ? 'true' : 'false');
toggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('diksha-theme', dark ? 'light' : 'dark');
  toggle.setAttribute('aria-pressed', dark ? 'false' : 'true');
});
menuToggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('nav-open') ?? false;
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}));
