// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== INTERSECTION OBSERVER (REVEAL ANIMATION) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .skill-card, .cert-card, .edu-card, .research-card, .contact-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.style.width;
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = window.innerWidth < 600 ? 15 : 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${Math.random() * 10 + 8}s;
    `;
    container.appendChild(p);
  }
}
createParticles();

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
});
