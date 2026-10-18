document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.setAttribute('aria-pressed', String(isDark));
  document.querySelector('#status').textContent = isDark ? 'Dark theme on' : 'Light theme on';
});
