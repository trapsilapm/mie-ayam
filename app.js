document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('snapContainer');
  const slides = document.querySelectorAll('.snap-slide');
  const sideDots = document.getElementById('sideDots');
  const slideIndicator = document.getElementById('slideIndicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scrollHint = document.getElementById('scrollHint');
  const zoomHint = document.getElementById('zoomHint');
  const zoomToggleBtn = document.getElementById('zoomToggleBtn');
  const zoomIcon = document.getElementById('zoomIcon');
  const zoomText = document.getElementById('zoomText');
  const ambientBackdrop = document.getElementById('ambientBackdrop');

  const totalSlides = slides.length;
  let currentIndex = 0;
  let isZoomed = false;

  // Generate Navigation Dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Foto ${idx + 1}`);
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      scrollToSlide(idx);
    });
    sideDots.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  // Scroll to Specific Slide Index
  function scrollToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    
    resetZoom();
    slides[index].scrollIntoView({ behavior: 'smooth' });
  }

  // Update Active UI States & Ambient Backdrop
  function updateActiveState(index) {
    currentIndex = index;
    resetZoom();

    slideIndicator.textContent = `${index + 1} / ${totalSlides}`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    // Update Ambient Backdrop on Desktop
    const currentImg = slides[index].querySelector('img');
    if (currentImg && ambientBackdrop) {
      ambientBackdrop.style.backgroundImage = `url('${currentImg.src}')`;
    }

    // Hide hints once user scrolls
    if (index > 0 && scrollHint) {
      scrollHint.classList.add('hidden');
    }
  }

  // Zoom In / Zoom Out Handlers
  function toggleZoom(e) {
    const currentSlide = slides[currentIndex];
    const imgWrapper = currentSlide.querySelector('.image-wrapper');
    const img = currentSlide.querySelector('.zoomable-img');
    if (!imgWrapper || !img) return;

    isZoomed = !isZoomed;

    if (isZoomed) {
      // Zoom In
      if (e && e.clientX && e.clientY) {
        const rect = imgWrapper.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
      } else {
        img.style.transformOrigin = 'center center';
      }

      currentSlide.classList.add('is-zoomed-slide');
      imgWrapper.classList.add('zoomed');
      if (zoomToggleBtn) zoomToggleBtn.classList.add('is-zoomed');
      if (zoomIcon) zoomIcon.className = 'fa-solid fa-magnifying-glass-minus';
      if (zoomText) zoomText.textContent = 'Reset';
      if (zoomHint) zoomHint.classList.add('hidden');
    } else {
      // Zoom Out
      resetZoom();
    }
  }

  function resetZoom() {
    isZoomed = false;
    slides.forEach(slide => {
      slide.classList.remove('is-zoomed-slide');
      const wrap = slide.querySelector('.image-wrapper');
      const img = slide.querySelector('.zoomable-img');
      if (wrap) wrap.classList.remove('zoomed');
      if (img) {
        img.style.transformOrigin = 'center center';
      }
    });

    if (zoomToggleBtn) zoomToggleBtn.classList.remove('is-zoomed');
    if (zoomIcon) zoomIcon.className = 'fa-solid fa-magnifying-glass-plus';
    if (zoomText) zoomText.textContent = 'Zoom';
  }

  // Click & Double-tap to Zoom on Slides
  slides.forEach((slide) => {
    const wrapper = slide.querySelector('.image-wrapper');
    if (!wrapper) return;

    let lastTap = 0;
    
    // Desktop Click or Mobile Double Tap
    wrapper.addEventListener('click', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      // If desktop or double tap on mobile
      if (window.innerWidth > 768 || (tapLength < 350 && tapLength > 0)) {
        toggleZoom(e);
      } else if (isZoomed) {
        resetZoom();
      }
      lastTap = currentTime;
    });
  });

  // Top Zoom Toggle Button Listener
  if (zoomToggleBtn) {
    zoomToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleZoom();
    });
  }

  // Intersection Observer for Current Slide
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

  // Initial Ambient Backdrop
  if (slides[0]) {
    const firstImg = slides[0].querySelector('img');
    if (firstImg && ambientBackdrop) {
      ambientBackdrop.style.backgroundImage = `url('${firstImg.src}')`;
    }
  }

  // Arrow Button Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      scrollToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      scrollToSlide(currentIndex + 1);
    });
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      scrollToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      scrollToSlide(currentIndex - 1);
    } else if (e.key === 'z' || e.key === 'Z') {
      toggleZoom();
    } else if (e.key === 'Escape' && isZoomed) {
      resetZoom();
    }
  });

  // Auto-hide Zoom hint after 4 seconds
  setTimeout(() => {
    if (zoomHint) zoomHint.classList.add('hidden');
  }, 4000);
});
