// ============================================
// LIZ VAN GINDEREN — PORTFOLIO
// Shared JS
// ============================================

// --- Mark active nav link ---
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.includes(href.replace('../', '').replace('./', '').split('/')[0]) && href !== '#') {
      if ((path.includes('design') && href.includes('design')) ||
          (path.includes('photography') && href.includes('photography')) ||
          (path === '/' || path.endsWith('index.html')) && href.includes('index')) {
        a.classList.add('active');
      }
    }
  });

  // Lightbox setup (used on photography pages)
  setupLightbox();
});

// --- Lightbox ---
function setupLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = document.getElementById('lightbox-img');
  let images = [];
  let currentIdx = 0;

  document.querySelectorAll('.masonry-item img, .gallery-item img').forEach((img, i) => {
    images.push(img.src);
    img.parentElement.addEventListener('click', () => openLightbox(i));
  });

  function openLightbox(idx) {
    currentIdx = idx;
    lbImg.src = images[idx];
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }
  function navigate(dir) {
    currentIdx = (currentIdx + dir + images.length) % images.length;
    lbImg.src = images[currentIdx];
  }

  document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lb-prev')?.addEventListener('click', () => navigate(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => navigate(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

// --- Scroll reveal ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
