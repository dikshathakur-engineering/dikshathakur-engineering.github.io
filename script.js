const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('diksha-theme');
if (storedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
toggle?.setAttribute('aria-pressed', storedTheme === 'dark' ? 'true' : 'false');
toggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('diksha-theme', dark ? 'light' : 'dark');
  toggle.setAttribute('aria-pressed', dark ? 'false' : 'true');
});
