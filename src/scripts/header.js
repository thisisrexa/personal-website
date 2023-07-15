document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkModeButton = document.querySelector('#toggleDarkMode');
  const logo = document.querySelector('#logo');

  function updateIcons() {
    for (const child of toggleDarkModeButton.children) {
      if (document.documentElement.classList.contains('dark')) {
        child.dataset.name === 'moon' && (child.style.display = 'block');
        child.dataset.name === 'sun' && (child.style.display = 'none');
      } else {
        child.dataset.name === 'sun' && (child.style.display = 'block');
        child.dataset.name === 'moon' && (child.style.display = 'none');
      }
    }
  }

  toggleDarkModeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
    updateIcons();
    if (document.documentElement.classList.contains('dark')) {
      logo.src = '/logo-light.svg';
    } else {
      logo.src = '/logo-dark.svg';
    }
  });
  updateIcons();

  if (document.documentElement.classList.contains('dark')) {
    logo.src = '/logo-light.svg';
  } else {
    logo.src = '/logo-dark.svg';
  }
});
