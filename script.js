// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-ins
const faders = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
faders.forEach(el => io.observe(el));

// Back-to-top button
const toTop = document.getElementById('toTop');
const toggleTop = () => {
  if (window.scrollY > 600) toTop.classList.add('show');
  else toTop.classList.remove('show');
};
toggleTop();
window.addEventListener('scroll', toggleTop);
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navbarMenu');
navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Optional: highlight active link on scroll
const sections = [...document.querySelectorAll('section, header')];
const links = [...document.querySelectorAll('.nav-links a, #navbarMenu a')];
const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0].id;
  sections.forEach(s => {
    if (s.offsetTop <= y) current = s.id || current;
  });
  links.forEach(l => {
    const on = l.getAttribute('href') === `#${current}`;
    l.classList.toggle('active', on);
  });
};
window.addEventListener('scroll', setActive);
setActive();
