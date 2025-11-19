/**
 * GSAP ScrollTrigger Configuration
 * Optimized timing and settings for consistent animations
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Standard ScrollTrigger configurations
 */
export const scrollTriggerConfig = {
  // Default config for fade-in animations
  fadeIn: {
    start: 'top bottom-=100',
    end: 'top center',
    toggleActions: 'play none none none',
    once: true,
    scrub: false,
  },

  // Config for parallax effects
  parallax: {
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    invalidateOnRefresh: true,
  },

  // Config for pinned sections
  pin: {
    start: 'top top',
    end: '+=100%',
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },

  // Config for snap scrolling
  snap: {
    start: 'top top',
    end: 'bottom bottom',
    snap: {
      snapTo: 1 / 4,
      duration: 0.5,
      ease: 'power2.inOut',
    },
  },

  // Config for reveal animations
  reveal: {
    start: 'top bottom-=50',
    toggleActions: 'play none none none',
    once: true,
  },

  // Config for continuous animations
  continuous: {
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1.5,
  },
};

/**
 * Standard animation durations
 */
export const animationDurations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  verySlow: 1.5,
};

/**
 * Standard easing functions
 */
export const easingFunctions = {
  smooth: 'power2.out',
  snappy: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'back.out(1.7)',
  linear: 'none',
};

/**
 * Standard stagger timings
 */
export const staggerTimings = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.15,
  veryLoose: 0.2,
};

/**
 * Helper function to create fade-in animation
 */
export function createFadeIn(
  element: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  const {
    y = 30,
    duration = animationDurations.normal,
    delay = 0,
    stagger = 0,
    ease = easingFunctions.smooth,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      ...scrollTriggerConfig.fadeIn,
    },
  });
}

/**
 * Helper function to create scale animation
 */
export function createScaleIn(
  element: gsap.TweenTarget,
  options: {
    scale?: number;
    duration?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const {
    scale = 0.8,
    duration = animationDurations.normal,
    delay = 0,
    ease = easingFunctions.snappy,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    scale,
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      ...scrollTriggerConfig.fadeIn,
    },
  });
}

/**
 * Helper function to create stagger animation
 */
export function createStaggerAnimation(
  elements: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  const {
    y = 40,
    duration = animationDurations.normal,
    stagger = staggerTimings.normal,
    ease = easingFunctions.snappy,
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: elements as gsap.DOMTarget,
      ...scrollTriggerConfig.fadeIn,
    },
  });
}

/**
 * Helper function to create parallax effect
 */
export function createParallax(
  element: gsap.TweenTarget,
  options: {
    y?: number | string;
    speed?: number;
  } = {}
) {
  const { y = -100, speed = 1 } = options;

  return gsap.to(element, {
    y,
    ease: 'none',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      ...scrollTriggerConfig.parallax,
      scrub: speed,
    },
  });
}

/**
 * Helper function to refresh all ScrollTriggers
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

/**
 * Helper function to kill all ScrollTriggers
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

/**
 * Initialize ScrollTrigger defaults
 */
export function initScrollTriggerDefaults() {
  // Set global defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
    markers: false, // Set to true for debugging
  });

  // Smooth scroll behavior
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150,
  });

  // Refresh on resize
  let resizeTimer: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });

  // Refresh on font load
  if (document.fonts) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }
}

// Initialize on module load
initScrollTriggerDefaults();

export default {
  config: scrollTriggerConfig,
  durations: animationDurations,
  easings: easingFunctions,
  stagger: staggerTimings,
  createFadeIn,
  createScaleIn,
  createStaggerAnimation,
  createParallax,
  refresh: refreshScrollTriggers,
  killAll: killAllScrollTriggers,
};
