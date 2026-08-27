document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('snapContainer');
  const slides = document.querySelectorAll('.snap-slide');
  const sideDots = document.getElementById('sideDots');
  const slideIndicator = document.getElementById('slideIndicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scrollHint = document.getElementById('scrollHint');

  const totalSlides = slides.length;
  let currentIndex = 0;

  // Generate Navigation Dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Pindah ke slide ${idx + 1}`);
    dot.addEventListener('click', () => scrollToSlide(idx));
    sideDots.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  // Scroll to Specific Slide Index
  function scrollToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    
    slides[index].scrollIntoView({ behavior: 'smooth' });
  }

  // Update Active UI States
  function updateActiveState(index) {
    currentIndex = index;
    slideIndicator.textContent = `${index + 1} / ${totalSlides}`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    // Hide scroll hint once user scrolls past first slide
    if (index > 0 && scrollHint) {
      scrollHint.classList.add('hidden');
    }
  }

  // Intersection Observer to detect current visible slide
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slideIndex = parseInt(entry.target.getAttribute('data-index'), 10) - 1;
        updateActiveState(slideIndex);
      }
    });
  }, {
    root: container,
    threshold: 0.6
  });

  slides.forEach(slide => observer.observe(slide));

  // Button Arrow Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollToSlide(currentIndex + 1);
    });
  }

  // Keyboard Navigation (Arrow Up, Arrow Down, Space, PageUp, PageDown)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      scrollToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      scrollToSlide(currentIndex - 1);
    }
  });
});
