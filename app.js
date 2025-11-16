
  const btn = document.querySelector('nav button');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('max-h-0');
    menu.classList.toggle('max-h-[500px]'); // adjust as needed
  });

