// Enhanced Gallery Script for Service Pages - Global Functions
window.BrewstarGallery = window.BrewstarGallery || {
  currentSlides: {},
  touchStartX: 0,
  touchEndX: 0,
  isDragging: false,

  initGallery: function(serviceKey) {
    if (!this.currentSlides[serviceKey]) {
      this.currentSlides[serviceKey] = 0;
    }
    
    // Add touch events for mobile
    const galleryContainer = document.getElementById(`gallery-${serviceKey}`);
    if (galleryContainer) {
      galleryContainer.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
      galleryContainer.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
      galleryContainer.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
    }
  },

  updateGallery: function(serviceKey) {
    const slides = document.getElementById(`gallery-${serviceKey}`);
    const currentSpan = document.getElementById(`current-${serviceKey}`);
    const thumbs = slides?.closest('.bs-service-gallery')?.querySelectorAll('.bs-gallery__thumb');
    
    if (slides && currentSpan) {
      slides.style.transform = `translateX(-${this.currentSlides[serviceKey] * 100}%)`;
      currentSpan.textContent = this.currentSlides[serviceKey] + 1;
      
      thumbs?.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === this.currentSlides[serviceKey]);
      });
    }
  },

  prevSlide: function(serviceKey) {
    this.initGallery(serviceKey);
    const slides = document.getElementById(`gallery-${serviceKey}`);
    if (!slides) return;
    
    const totalSlides = slides.children.length;
    this.currentSlides[serviceKey] = this.currentSlides[serviceKey] === 0 ? totalSlides - 1 : this.currentSlides[serviceKey] - 1;
    this.updateGallery(serviceKey);
  },

  nextSlide: function(serviceKey) {
    this.initGallery(serviceKey);
    const slides = document.getElementById(`gallery-${serviceKey}`);
    if (!slides) return;
    
    const totalSlides = slides.children.length;
    this.currentSlides[serviceKey] = (this.currentSlides[serviceKey] + 1) % totalSlides;
    this.updateGallery(serviceKey);
  },

  goToSlide: function(serviceKey, index) {
    this.initGallery(serviceKey);
    this.currentSlides[serviceKey] = index;
    this.updateGallery(serviceKey);
  },

  handleTouchStart: function(e) {
    this.touchStartX = e.changedTouches[0].screenX;
    this.isDragging = true;
  },

  handleTouchMove: function(e) {
    if (!this.isDragging) return;
    this.touchEndX = e.changedTouches[0].screenX;
  },

  handleTouchEnd: function(e) {
    if (!this.isDragging) return;
    
    const gallery = e.currentTarget;
    const serviceKey = gallery.id.replace('gallery-', '');
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide(serviceKey); // Swipe left - next slide
      } else {
        this.prevSlide(serviceKey); // Swipe right - previous slide
      }
    }
    
    this.isDragging = false;
  }
};

// Global functions for onclick handlers - with safety checks
function initGallery(serviceKey) {
  if (window.BrewstarGallery) {
    window.BrewstarGallery.initGallery(serviceKey);
  }
}

function updateGallery(serviceKey) {
  if (window.BrewstarGallery) {
    window.BrewstarGallery.updateGallery(serviceKey);
  }
}

function prevSlide(serviceKey) {
  if (window.BrewstarGallery) {
    window.BrewstarGallery.prevSlide(serviceKey);
  }
}

function nextSlide(serviceKey) {
  if (window.BrewstarGallery) {
    window.BrewstarGallery.nextSlide(serviceKey);
  }
}

function goToSlide(serviceKey, index) {
  if (window.BrewstarGallery) {
    window.BrewstarGallery.goToSlide(serviceKey, index);
  }
}

function handleTouchStart(e) {
  window.BrewstarGallery.handleTouchStart(e);
}

function handleTouchMove(e) {
  window.BrewstarGallery.handleTouchMove(e);
}

function handleTouchEnd(e) {
  window.BrewstarGallery.handleTouchEnd(e);
}

// Auto-play functionality
function startAutoPlay(serviceKey, interval = 5000) {
  setInterval(() => {
    if (!document.querySelector('.bs-service-gallery.paused')) {
      nextSlide(serviceKey);
    }
  }, interval);
}

// Keyboard navigation - Only if galleries exist
document.addEventListener('keydown', function(e) {
  // Check if any galleries exist on this page
  const hasGalleries = document.querySelectorAll('[id^="gallery-"]').length > 0;
  if (!hasGalleries) return;
  
  if (e.key === 'ArrowLeft') {
    // Find active gallery or use first available
    if (window.BrewstarGallery && window.BrewstarGallery.currentSlides) {
      Object.keys(window.BrewstarGallery.currentSlides).forEach(key => {
        prevSlide(key);
      });
    }
  } else if (e.key === 'ArrowRight') {
    if (window.BrewstarGallery && window.BrewstarGallery.currentSlides) {
      Object.keys(window.BrewstarGallery.currentSlides).forEach(key => {
        nextSlide(key);
      });
    }
  }
});

// Initialize all galleries when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Find all galleries on page
  const galleries = document.querySelectorAll('[id^="gallery-"]');
  
  // Only initialize if galleries exist
  if (galleries.length > 0) {
    galleries.forEach(gallery => {
      const serviceKey = gallery.id.replace('gallery-', '');
      initGallery(serviceKey);
      
      // Optional: Auto-play for hero galleries only
      if (gallery.closest('.bs-service-hero')) {
        // startAutoPlay(serviceKey, 4000); // Uncomment to enable auto-play
      }
    });
    
    // Add hover pause functionality
    document.querySelectorAll('.bs-service-gallery').forEach(gallery => {
      gallery.addEventListener('mouseenter', () => {
        gallery.classList.add('paused');
      });
      
      gallery.addEventListener('mouseleave', () => {
        gallery.classList.remove('paused');
      });
    });
  }
});

// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
}, { rootMargin: '50px' });

// Observe all images with data-src
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
});