// ── CONSTANTES ──
const WA_NUMBER = '526145468144';
const WA_PRUEBA = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20mi%20prueba%20gratis%20de%20KONVERTO`;

// ── AÑO DINÁMICO EN FOOTER ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── CUSTOM CURSOR (solo escritorio) ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
const isTouchDevice = window.matchMedia('(hover: none)').matches;

if (cursor && ring && !isTouchDevice) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 5 + 'px';
    cursor.style.top  = my - 5 + 'px';
  });

  function animateRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      ring.style.width = '56px'; ring.style.height = '56px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.width = '36px'; ring.style.height = '36px';
    });
  });
}

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  const isOpen = mobileMenu.classList.contains('active');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', e => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    closeMenu();
  }
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    // Cerrar todos
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Abrir el clickeado si estaba cerrado
    if (!wasActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── REVEAL ON SCROLL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── SERVICE WORKER ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // no-op: evita romper la experiencia si SW falla
    });
  });
}
