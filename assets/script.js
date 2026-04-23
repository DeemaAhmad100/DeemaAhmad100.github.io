// =========================================================
// Deema AL-Shboul — Portfolio
// Lightweight interactions
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // project filter
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  if (filters.length && cards.length) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(card => {
          const cats = card.dataset.cat || '';
          const show = f === 'all' || cats.split(/\s+/).includes(f);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-up');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.feature-card, .tl-item, .project-card, .edu-card, .contact-card')
    .forEach(el => io.observe(el));
});
