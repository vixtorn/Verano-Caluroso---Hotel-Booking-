// Hero animation: fade-in & scale on first scroll
window.addEventListener('scroll', function() {
  const title = document.querySelector('.hero h1');
  if (window.scrollY > 0 && title && !title.classList.contains('show')) {
    title.classList.add('show');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  /* Features reveal: IntersectionObserver */
  const featureItems = document.querySelectorAll('.features li');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  featureItems.forEach(item => observer.observe(item));

  /* Rooms highlight on click */
  const roomCards = document.querySelectorAll('.room-card');
  roomCards.forEach(card => {
    card.addEventListener('click', () => {
      roomCards.forEach(c => c.classList.remove('highlight'));
      card.classList.add('highlight');
    });
  });

  /* Services: click to swap image */
  const buttons = document.querySelectorAll('.service-btn');
  const preview = document.querySelector('.service-image img');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      preview.src = btn.dataset.img;
      preview.alt = btn.dataset.alt;
    });
  });
  // Initialize first button as active
  if (buttons.length > 0) {
    buttons[0].classList.add('active');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const items   = document.querySelectorAll('.features-list li');
  const preview = document.querySelector('.feature-image');
  const img     = preview.querySelector('img');

  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      img.src = item.dataset.img;
      img.alt = item.textContent.trim();
      preview.classList.add('visible');
    });
    item.addEventListener('mouseout', () => {
      preview.classList.remove('visible');
      img.src = '';
    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.features li');

  // small delay to ensure initial styles (opacity:0, translateY(20px)) paint
  setTimeout(() => {
    items.forEach((li, i) => {
      // stagger them if you like:
      setTimeout(() => {
        li.classList.add('visible');
      }, i * 200);
    });
  }, 50);
});



