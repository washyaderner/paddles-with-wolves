/**
 * Page Transitions
 * Smooth transitions between pages using Astro View Transitions
 */

import { gsap } from 'gsap';

class PageTransitions {
  private isTransitioning: boolean = false;

  constructor() {
    this.init();
  }

  private init(): void {
    // Listen for Astro View Transitions events
    document.addEventListener('astro:before-preparation', this.handleBeforePreparation.bind(this));
    document.addEventListener('astro:after-preparation', this.handleAfterPreparation.bind(this));
    document.addEventListener('astro:before-swap', this.handleBeforeSwap.bind(this));
    document.addEventListener('astro:after-swap', this.handleAfterSwap.bind(this));
    document.addEventListener('astro:page-load', this.handlePageLoad.bind(this));
  }

  private handleBeforePreparation(e: Event): void {
    console.log('Page transition: preparing...');
    this.isTransitioning = true;

    // Fade out current page content
    const main = document.querySelector('main');
    if (main) {
      gsap.to(main, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }

  private handleAfterPreparation(e: Event): void {
    console.log('Page transition: preparation complete');
  }

  private handleBeforeSwap(e: Event): void {
    console.log('Page transition: swapping content...');
  }

  private handleAfterSwap(e: Event): void {
    console.log('Page transition: swap complete');

    // Scroll to top
    window.scrollTo(0, 0);

    // Animate new content in
    const main = document.querySelector('main');
    if (main) {
      gsap.fromTo(main,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }
      );
    }

    // Animate in sections with stagger
    const sections = document.querySelectorAll('section');
    gsap.fromTo(sections,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      }
    );
  }

  private handlePageLoad(e: Event): void {
    console.log('Page transition: page load complete');
    this.isTransitioning = false;

    // Add entrance animations for elements
    this.animateElements();
  }

  private animateElements(): void {
    // Fade in images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img, index) => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: index * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    });

    // Fade in cards
    const cards = document.querySelectorAll('.card, .glass, .service-card, .product-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    });

    // Animate headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach((heading, index) => {
      gsap.from(heading, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top bottom-=50',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  public isActive(): boolean {
    return this.isTransitioning;
  }
}

// Initialize
let pageTransitions: PageTransitions;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    pageTransitions = new PageTransitions();
  });
} else {
  pageTransitions = new PageTransitions();
}

export default pageTransitions;
