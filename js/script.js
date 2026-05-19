/* =====================================================
   MY GLOBAL MENTORS - Main Script
   ===================================================== */

(function () {
  'use strict';

  /* ---------- Init AOS animation library ---------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }

  /* ---------- Set current year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Populate Destinations Slider (8 per slide, 2x4) ---------- */
  const destTrack = document.getElementById('destinationsGrid');
  const destDots  = document.getElementById('destDots');
  const destPrev  = document.getElementById('destPrev');
  const destNext  = document.getElementById('destNext');

  if (destTrack && typeof COUNTRIES !== 'undefined') {
    const PER_SLIDE = 8;
    const slides = [];
    for (let i = 0; i < COUNTRIES.length; i += PER_SLIDE) {
      slides.push(COUNTRIES.slice(i, i + PER_SLIDE));
    }

    destTrack.innerHTML = slides.map(slide => `
      <div class="dest-slide">
        ${slide.map(c => `
          <a class="dest-card" href="countries/country.html?id=${c.id}" aria-label="Study in ${c.name}">
            <div class="dest-flag">
              <img src="https://flagcdn.com/w160/${c.code}.png"
                   srcset="https://flagcdn.com/w320/${c.code}.png 2x"
                   alt="${c.name} flag" loading="lazy" />
            </div>
            <h3 class="dest-name">${c.name}</h3>
            <span class="arrow-pill" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
          </a>
        `).join('')}
      </div>
    `).join('');

    if (destDots) {
      destDots.innerHTML = slides.map((_, i) =>
        `<button class="dest-dot${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>`
      ).join('');
    }

    let current = 0;
    const total = slides.length;

    function goTo(idx) {
      current = (idx + total) % total;
      destTrack.style.transform = `translateX(-${current * 100}%)`;
      if (destDots) {
        destDots.querySelectorAll('.dest-dot').forEach((d, i) =>
          d.classList.toggle('active', i === current)
        );
      }
    }

    if (destPrev) destPrev.addEventListener('click', () => goTo(current - 1));
    if (destNext) destNext.addEventListener('click', () => goTo(current + 1));
    if (destDots) {
      destDots.addEventListener('click', e => {
        const dot = e.target.closest('.dest-dot');
        if (dot) goTo(parseInt(dot.dataset.slide, 10));
      });
    }

    // Basic touch swipe
    let touchStartX = 0;
    destTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    destTrack.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ---------- Mobile Nav Toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    if (menuToggle) menuToggle.classList.remove('open');
    if (mainNav) mainNav.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
  function openMenu() {
    if (menuToggle) menuToggle.classList.add('open');
    if (mainNav) mainNav.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('open');
      if (isOpen) closeMenu(); else openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    // Close menu on link click (mobile)
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 1024) closeMenu();
      });
    });
    // Close menu on Esc
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------- Mobile dropdown toggle ---------- */
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  /* ---------- Sticky header shadow on scroll ---------- */
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    const setScrolled = () => {
      if (window.scrollY > 8) siteHeader.classList.add('scrolled');
      else siteHeader.classList.remove('scrolled');
    };
    window.addEventListener('scroll', setScrolled, { passive: true });
    setScrolled();
  }

  /* ---------- Back to Top ---------- */
  const btnTop = document.getElementById('backToTop');
  if (btnTop) {
    const toggleTop = () => {
      if (window.scrollY > 600) btnTop.classList.add('show');
      else btnTop.classList.remove('show');
    };
    window.addEventListener('scroll', toggleTop, { passive: true });
    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    toggleTop();
  }

/* ---------- Smooth anchor scrolling (for in-page links) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }
    });
  });
})();
