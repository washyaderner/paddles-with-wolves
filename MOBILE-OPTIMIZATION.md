# Mobile Optimization Guide

This document outlines the mobile-first responsive design optimizations implemented throughout the Paddles with Wolves website.

## Overview

The website is optimized for mobile devices with:
- Touch-friendly interactions
- Responsive layouts
- Performance-optimized animations
- Accessible navigation
- GPU-accelerated rendering

## Key Features

### 1. Mobile Navigation Drawer

**Location:** `src/components/navigation/FloatingNav.astro`

- Slides in from the right on mobile devices
- Semi-transparent overlay backdrop
- Staggered menu item animations
- Smooth GSAP-powered transitions
- Body scroll lock when open
- Close on overlay click or menu item selection

**Usage:**
- Tap the hamburger icon (☰) in the top-right corner
- Menu slides in from right
- Tap overlay or menu item to close

### 2. Touch Interactions

All interactive elements have been optimized for touch:

- **Minimum tap targets:** 44x44px (Apple HIG standard)
- **Touch feedback:** Visual scale/opacity changes on tap
- **No hover states on touch devices:** Uses `@media (hover: none)` queries
- **Fast tap response:** Reduced animation durations (0.2s)

**Example (Service Cards):**
```css
@media (hover: none) {
  .service-card:active {
    transform: scale(0.98);
  }
}
```

### 3. Mobile-First CSS

**Location:** `src/styles/mobile.css`

Comprehensive mobile utilities including:

#### Typography
- Responsive font sizes using `clamp()`
- Prevents iOS font scaling on orientation change
- Optimized line heights for readability

#### Spacing
- Reduced padding on mobile (16px vs 24px desktop)
- Compact section spacing
- Mobile-appropriate card padding

#### Performance
- Reduced animation complexity
- GPU acceleration hints
- Disabled complex filters (blur, shadows)
- Transform-based animations only

#### Forms
- 16px font size to prevent iOS zoom
- Full-width inputs
- Larger touch targets (48px height)
- Stacked button layouts

### 4. GSAP Mobile Optimizer

**Location:** `src/scripts/gsap-mobile-optimizer.ts`

Intelligent animation optimizer that detects:
- Mobile devices (screen size + user agent)
- Low power mode
- Slow connections
- Reduced motion preference

**Features:**
- Automatically reduces animation duration
- Simplifies complex easing functions
- Reduces stagger timings
- Removes blur/filter animations
- Batches animations for performance
- Lazy loads animations (viewport detection)

**Usage Example:**
```typescript
import mobileOptimizer from '@/scripts/gsap-mobile-optimizer';

// Automatically optimized for mobile
mobileOptimizer.to('.element', {
  y: 100,
  duration: 1,  // Will be reduced to 0.3s on mobile
  ease: 'elastic.out',  // Will become 'power2.out' on mobile
  stagger: 0.1  // Will become 0.05 on mobile
});

// Check if mobile
if (mobileOptimizer.getIsMobile()) {
  // Mobile-specific logic
}

// Lazy animate (only when in viewport)
mobileOptimizer.lazyAnimate(element, () => {
  gsap.to(element, { opacity: 1 });
});
```

### 5. Responsive Breakpoints

Primary breakpoint: **768px**

```css
/* Mobile-first approach */
.element {
  /* Mobile styles (default) */
  font-size: 1rem;
  padding: 1rem;
}

@media (min-width: 769px) {
  .element {
    /* Tablet/Desktop enhancements */
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}
```

### 6. iOS-Specific Optimizations

- **Safe area insets:** Respects notch and home indicator
- **Input zoom prevention:** 16px minimum font size
- **Rubber band prevention:** `overscroll-behavior: contain`
- **Smooth scrolling:** `-webkit-overflow-scrolling: touch`

```css
@supports (-webkit-touch-callout: none) {
  .page-container {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
```

### 7. Performance Best Practices

#### GPU Acceleration
```css
.animated-element {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}
```

#### Layout Containment
```css
.card {
  contain: layout style paint;
}
```

#### Reduced Motion
All animations respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component-Specific Optimizations

### Service Cards
- Touch feedback on tap
- Larger tap targets (full card is tappable)
- Simplified hover effects on mobile
- Stacked layouts for price/CTA

### Product Cards
- 3D flip disabled on small screens
- Tap to view details
- Larger product images
- Full-width "Add to Cart" buttons

### Forms
- Single column layouts
- Full-width inputs
- Large submit buttons (48px height)
- Character counters for long fields

### Hero Sections
- Reduced height in landscape mode
- Smaller icon sizes
- Condensed text spacing
- Optimized for portrait viewing

## Testing Checklist

- [ ] Test on iOS Safari (iPhone)
- [ ] Test on Android Chrome
- [ ] Test in landscape orientation
- [ ] Test with slow 3G connection
- [ ] Test with VoiceOver/TalkBack
- [ ] Verify 44px minimum tap targets
- [ ] Check form input zoom behavior
- [ ] Test navigation drawer animation
- [ ] Verify animations are smooth (60fps)
- [ ] Check safe area insets on notched devices

## Performance Metrics

Target metrics for mobile:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Mobile PageSpeed Score: > 90

## Utility Classes

```html
<!-- Show only on mobile -->
<div class="mobile-only">Mobile content</div>

<!-- Hide on mobile -->
<div class="mobile-hide">Desktop content</div>

<!-- Horizontal scroll on mobile -->
<div class="horizontal-scroll">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- GPU accelerated -->
<div class="gpu-accelerated">Animated content</div>

<!-- Touch-friendly -->
<button class="touch-target">Large button</button>
```

## Browser Support

- iOS Safari 12+
- Android Chrome 80+
- Samsung Internet 12+
- Mobile Firefox 85+

## Future Enhancements

- [ ] Add service worker for offline support
- [ ] Implement progressive image loading
- [ ] Add pull-to-refresh on mobile
- [ ] Create mobile-specific image sizes
- [ ] Implement haptic feedback for iOS
- [ ] Add swipe gestures for navigation

## Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design Touch Targets](https://material.io/design/usability/accessibility.html#layout-typography)
- [Web.dev Mobile Performance](https://web.dev/mobile/)
- [GSAP Performance Tips](https://greensock.com/performance/)

---

**Last Updated:** 2025-01-19
**Maintained by:** Paddles with Wolves Development Team
