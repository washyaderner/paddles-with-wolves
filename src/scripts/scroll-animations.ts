/**
 * Scroll Animations
 * Handles fade-in-scroll and other scroll-based animations using Intersection Observer
 */

// Initialize scroll animations when DOM is ready
function initScrollAnimations() {
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all elements visible immediately
    const elements = document.querySelectorAll(
      '.fade-in-scroll, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in-scale'
    );
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  // Configure Intersection Observer
  const observerOptions: IntersectionObserverInit = {
    root: null, // viewport
    rootMargin: '0px 0px -100px 0px', // trigger 100px before element enters viewport
    threshold: 0.1 // trigger when 10% of element is visible
  };

  // Callback function when elements intersect
  const observerCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'visible' class to trigger animation
        entry.target.classList.add('visible');

        // Optional: stop observing after animation (one-time animation)
        // Comment out the line below if you want animations to repeat
        observer.unobserve(entry.target);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all elements with fade-in classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-scroll, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in-scale'
  );

  // Observe each element
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  // DOM already loaded
  initScrollAnimations();
}

// Re-initialize on navigation (for SPA-like behavior with Astro View Transitions)
document.addEventListener('astro:page-load', initScrollAnimations);

// Export for manual initialization if needed
export { initScrollAnimations };
