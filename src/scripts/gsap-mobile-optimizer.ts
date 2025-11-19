/**
 * GSAP Mobile Performance Optimizer
 * Reduces animation complexity on mobile devices for better performance
 */

import { gsap } from 'gsap';

interface MobileOptimizationConfig {
  reducedDuration: boolean;
  simplifiedEasing: boolean;
  disableComplexAnimations: boolean;
  reducedStagger: boolean;
}

class GSAPMobileOptimizer {
  private isMobile: boolean;
  private isLowPowerMode: boolean;
  private config: MobileOptimizationConfig;

  constructor() {
    this.isMobile = this.detectMobile();
    this.isLowPowerMode = this.detectLowPowerMode();
    this.config = {
      reducedDuration: this.isMobile,
      simplifiedEasing: this.isMobile,
      disableComplexAnimations: this.isLowPowerMode,
      reducedStagger: this.isMobile
    };

    this.init();
  }

  /**
   * Detect if device is mobile
   */
  private detectMobile(): boolean {
    // Check screen width
    const isMobileWidth = window.innerWidth <= 768;

    // Check user agent
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // Check touch support
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    return isMobileWidth || (isMobileUA && isTouchDevice);
  }

  /**
   * Detect if device is in low power mode (iOS)
   */
  private detectLowPowerMode(): boolean {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Check for connection type (throttled = likely low power)
    const connection = (navigator as any).connection;
    const isSlowConnection = connection?.effectiveType === '2g' || connection?.saveData;

    return prefersReducedMotion || isSlowConnection || false;
  }

  /**
   * Initialize mobile optimizations
   */
  private init(): void {
    if (!this.isMobile && !this.isLowPowerMode) {
      return; // No optimizations needed
    }

    // Set GSAP defaults for mobile
    gsap.defaults({
      duration: this.config.reducedDuration ? 0.3 : undefined,
      ease: this.config.simplifiedEasing ? 'power2.out' : undefined,
    });

    // Listen for visibility changes to pause animations
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.resume();
      }
    });
  }

  /**
   * Optimize animation parameters for mobile
   */
  public optimizeAnimation(params: gsap.TweenVars): gsap.TweenVars {
    if (!this.isMobile && !this.isLowPowerMode) {
      return params;
    }

    const optimized = { ...params };

    // Reduce duration
    if (this.config.reducedDuration && optimized.duration) {
      optimized.duration = Math.min(optimized.duration as number, 0.5);
    }

    // Simplify easing
    if (this.config.simplifiedEasing) {
      if (typeof optimized.ease === 'string' && optimized.ease.includes('elastic')) {
        optimized.ease = 'power2.out';
      }
      if (typeof optimized.ease === 'string' && optimized.ease.includes('back')) {
        optimized.ease = 'power2.out';
      }
    }

    // Reduce stagger
    if (this.config.reducedStagger && optimized.stagger) {
      if (typeof optimized.stagger === 'number') {
        optimized.stagger = optimized.stagger * 0.5;
      } else if (typeof optimized.stagger === 'object') {
        optimized.stagger = {
          ...optimized.stagger,
          amount: (optimized.stagger.amount as number) * 0.5
        };
      }
    }

    // Remove blur and complex filters
    if (this.config.disableComplexAnimations) {
      delete optimized.filter;
      delete optimized.backdropFilter;

      // Simplify transformations
      if (optimized.rotation || optimized.rotationX || optimized.rotationY) {
        delete optimized.rotation;
        delete optimized.rotationX;
        delete optimized.rotationY;
      }
    }

    return optimized;
  }

  /**
   * Create an optimized GSAP animation
   */
  public to(
    target: gsap.TweenTarget,
    vars: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.to(target, this.optimizeAnimation(vars));
  }

  /**
   * Create an optimized GSAP from animation
   */
  public from(
    target: gsap.TweenTarget,
    vars: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.from(target, this.optimizeAnimation(vars));
  }

  /**
   * Create an optimized GSAP fromTo animation
   */
  public fromTo(
    target: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.fromTo(
      target,
      this.optimizeAnimation(fromVars),
      this.optimizeAnimation(toVars)
    );
  }

  /**
   * Check if current device is mobile
   */
  public getIsMobile(): boolean {
    return this.isMobile;
  }

  /**
   * Check if low power mode is active
   */
  public getIsLowPowerMode(): boolean {
    return this.isLowPowerMode;
  }

  /**
   * Disable animations entirely (for accessibility)
   */
  public disableAnimations(): void {
    gsap.globalTimeline.clear();
    gsap.set('*', { clearProps: 'all' });
  }

  /**
   * Use GPU-accelerated properties only
   */
  public useGPUAcceleration(element: HTMLElement | string): void {
    gsap.set(element, {
      force3D: true,
      z: 0.01,
      backfaceVisibility: 'hidden',
      perspective: 1000
    });
  }

  /**
   * Batch multiple animations for better performance
   */
  public batchAnimate(
    elements: Element[],
    animation: (element: Element, index: number) => void,
    batchSize: number = 10
  ): void {
    let index = 0;

    const processBatch = () => {
      const end = Math.min(index + batchSize, elements.length);

      for (let i = index; i < end; i++) {
        animation(elements[i], i);
      }

      index = end;

      if (index < elements.length) {
        requestAnimationFrame(processBatch);
      }
    };

    requestAnimationFrame(processBatch);
  }

  /**
   * Lazy load animations (only animate when in viewport)
   */
  public lazyAnimate(
    element: HTMLElement,
    animation: () => void
  ): void {
    if (!('IntersectionObserver' in window)) {
      // Fallback: animate immediately
      animation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);
  }
}

// Create singleton instance
const mobileOptimizer = new GSAPMobileOptimizer();

// Export for use in components
export default mobileOptimizer;

// Also export for direct function usage
export const {
  to: optimizedTo,
  from: optimizedFrom,
  fromTo: optimizedFromTo,
  getIsMobile,
  getIsLowPowerMode,
  disableAnimations,
  useGPUAcceleration,
  batchAnimate,
  lazyAnimate
} = mobileOptimizer;
