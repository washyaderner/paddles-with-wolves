/**
 * Scroll Animations
 * Handles fade-in-scroll and other scroll-based animations using Intersection Observer and GSAP
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import scrollTriggerConfig from './scroll-trigger-config';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize GSAP ScrollTrigger animations for enhanced scroll effects
 */
function initGSAPAnimations() {
  // Animate headings
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach((heading, index) => {
    scrollTriggerConfig.createFadeIn(heading, {
      y: 20,
      delay: index * 0.05,
      duration: scrollTriggerConfig.durations.normal,
      ease: scrollTriggerConfig.easings.snappy,
    });
  });

  // Animate cards with stagger
  const cards = document.querySelectorAll('.card, .glass, .service-card, .product-card, .info-card');
  if (cards.length > 0) {
    scrollTriggerConfig.createStaggerAnimation(cards, {
      y: 40,
      duration: scrollTriggerConfig.durations.normal,
      stagger: scrollTriggerConfig.stagger.normal,
      ease: scrollTriggerConfig.easings.snappy,
    });
  }

  // Animate images with scale effect
  const images = document.querySelectorAll('img:not([data-no-animate])');
  images.forEach((img, index) => {
    scrollTriggerConfig.createScaleIn(img, {
      scale: 0.9,
      duration: scrollTriggerConfig.durations.slow,
      delay: index * 0.03,
      ease: scrollTriggerConfig.easings.smooth,
    });
  });

  // Animate buttons
  const buttons = document.querySelectorAll('button, .btn, [role="button"]');
  buttons.forEach((btn, index) => {
    gsap.from(btn, {
      opacity: 0,
      scale: 0.95,
      duration: scrollTriggerConfig.durations.fast,
      delay: index * 0.03,
      ease: scrollTriggerConfig.easings.bounce,
      scrollTrigger: {
        trigger: btn,
        ...scrollTriggerConfig.config.reveal,
      },
    });
  });

  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.getAttribute('data-parallax-speed') || '1');
    scrollTriggerConfig.createParallax(element, {
      y: -100,
      speed,
    });
  });
}

// Initialize scroll animations when DOM is ready
function initScrollAnimations() {
  // Initialize GSAP ScrollTrigger animations
  initGSAPAnimations();

  // Initialize Intersection Observer animations
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
