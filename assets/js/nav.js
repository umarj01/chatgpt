export function setActiveNav(){
  const links = document.querySelectorAll('.primary-nav a');
  const path = location.pathname.replace(/index\.html$/, '');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.setAttribute('aria-current','page');
  });
}