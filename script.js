/* =========================================================
   PACK DE EDIÇÃO — script.js
   ========================================================= */

// ---------------------------------------------------------
// 1. LINK DO CHECKOUT (Kiwify)
// Troque apenas esta linha quando tiver o link definitivo.
// Todos os botões marcados com [data-checkout] usam esta URL.
// ---------------------------------------------------------
const CHECKOUT_URL = "COLOCAR_LINK_DA_KIWIFY_AQUI";

document.querySelectorAll('[data-checkout]').forEach((el) => {
  el.addEventListener('click', (e) => {
    // Links internos como "#oferta" continuam funcionando normalmente
    // até você colocar o link real da Kiwify aqui.
    if (CHECKOUT_URL && CHECKOUT_URL !== "COLOCAR_LINK_DA_KIWIFY_AQUI") {
      e.preventDefault();
      window.location.href = CHECKOUT_URL;
    }
  });
});

// ---------------------------------------------------------
// 2. MENU MOBILE (hamburger)
// ---------------------------------------------------------
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------------------------------------------------------
// 3. FAQ ACCORDION
// ---------------------------------------------------------
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // fecha os outros itens do mesmo grupo
    document.querySelectorAll('.accordion__trigger').forEach((other) => {
      if (other !== trigger) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.style.maxHeight = null;
      }
    });

    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
  });
});

// ---------------------------------------------------------
// 4. REVEAL AO ROLAR A PÁGINA (uso moderado, respeita
//    prefers-reduced-motion)
// ---------------------------------------------------------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.section__title, .offer-box, .cta-final__content'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

// ---------------------------------------------------------
// 5. NAVBAR: leve sombra ao rolar (opcional, sutil)
// ---------------------------------------------------------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 8
      ? '0 8px 24px rgba(0,0,0,0.25)'
      : 'none';
  }, { passive: true });
}
