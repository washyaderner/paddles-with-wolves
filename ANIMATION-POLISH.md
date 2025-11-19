# Animation Polish Documentation

This document outlines all animation enhancements implemented for the Paddles with Wolves website.

## Overview

The site now features a comprehensive animation system including:
- Loading screen with energy particles
- Smooth page transitions
- Micro-interactions for all buttons
- Scroll progress indicator
- Polished GSAP ScrollTrigger timing
- Magnetic button effects

## Components

### 1. Loading Screen

**Location:** `src/components/ui/LoadingScreen.astro`

**Features:**
- Animated canvas with 80 energy particles
- Orbital particle motion with interconnecting lines
- Gradient progress bar with shimmer effect
- Pulsing wolf logo
- Auto-hides after 2 seconds

**Usage:**
Automatically displays on initial page load. Removed on subsequent navigations via Astro View Transitions.

```astro
<!-- Already integrated in BaseLayout.astro -->
<LoadingScreen />
```

**Customization:**
- Particle count: Line 122 (`particleCount = 80`)
- Loading duration: Line 208 (`duration = 2000`)
- Particle colors: Lines 155-159

### 2. Scroll Progress Indicator

**Location:** `src/components/ui/ScrollProgress.astro`

**Features:**
- Fixed at top of viewport (4px height)
- Gradient color scheme (purple → gold → green)
- Smooth GSAP scrubbing (scrub: 0.3)
- Animated gradient shift
- Glowing shadow effect

**Usage:**
```astro
<!-- Already integrated in BaseLayout.astro -->
<ScrollProgress />
```

**Customization:**
```css
/* Change height */
.scroll-progress-container {
  height: 4px; /* Adjust as needed */
}

/* Change gradient */
.scroll-progress-bar {
  background: linear-gradient(90deg, color1, color2, color3);
}
```

### 3. Button Micro-Interactions

**Location:** `src/styles/button-interactions.css`

**Features:**

#### Ripple Effect
- Touch/click creates expanding circle
- White semi-transparent ripple
- 0.6s expansion duration

#### Glow on Hover (Desktop)
- Animated gradient border
- 8px blur filter
- Rotates through gradient colors
- Only visible on hover

#### Transform Animations
- Hover: `translateY(-2px)` lift effect
- Active: `scale(0.98)` press effect
- Enhanced shadow on hover

#### Loading State
- Spinner animation
- Text becomes transparent
- Prevents pointer events

#### Focus States (Accessibility)
- 2px gold outline
- 4px offset
- Glowing shadow ring

**Button Variants:**

```html
<!-- Primary button with gradient -->
<button class="btn-primary">Click Me</button>

<!-- Secondary with border -->
<button class="btn-secondary">Click Me</button>

<!-- Ghost transparent -->
<button class="btn-ghost">Click Me</button>

<!-- Icon button (circular) -->
<button class="btn-icon" aria-label="Menu">☰</button>

<!-- Pulse animation (CTA) -->
<button class="btn-pulse">Book Now</button>

<!-- Shimmer effect on hover -->
<button class="btn-shimmer">Discover</button>
```

**Loading State:**
```javascript
button.classList.add('loading');
// Do async work
button.classList.remove('loading');
```

### 4. Magnetic Button Effect (Desktop)

**Location:** `src/scripts/button-magnetic.ts`

**Features:**
- Buttons subtly follow cursor on hover
- Only on desktop with hover capability
- 0.3 strength (30% of distance)
- Smooth cubic-bezier easing
- Auto-returns to center on mouse leave

**How It Works:**
1. Detects mouse position relative to button center
2. Applies transform based on delta × strength
3. Smooth transition on mouse leave

**Disable for Specific Buttons:**
```javascript
// Add data attribute
<button data-no-magnetic>No Effect</button>

// Or override in CSS
.no-magnetic:hover {
  transform: none !important;
}
```

### 5. Page Transitions

**Location:** `src/scripts/page-transitions.ts`

**Features:**
- Uses Astro View Transitions API
- GSAP-powered fade in/out
- Staggered section animations
- Auto-scroll to top on navigation
- Entrance animations for elements

**Transition Flow:**
1. **Before Preparation:** Current page fades out (opacity 0, y: -20)
2. **After Swap:** New page fades in (opacity 1, y: 0)
3. **Page Load:** Staggered section animations (0.1s stagger)

**Animations on Page Load:**
- Headings: Fade up 20px, 0.6s duration
- Cards: Fade up 40px, staggered 0.08s
- Images: Scale from 0.95, 0.6s duration
- Buttons: Scale from 0.95 with bounce easing

**Custom Animations:**
```html
<!-- Add data attribute for parallax -->
<div data-parallax data-parallax-speed="1.5">
  Background element
</div>
```

### 6. ScrollTrigger Configuration

**Location:** `src/scripts/scroll-trigger-config.ts`

**Provides:**
- Standardized scroll trigger configs
- Animation duration constants
- Easing function presets
- Stagger timing presets
- Helper functions

**Durations:**
```typescript
fast: 0.3s
normal: 0.6s
slow: 1.0s
verySlow: 1.5s
```

**Easings:**
```typescript
smooth: 'power2.out'
snappy: 'power3.out'
elastic: 'elastic.out(1, 0.5)'
bounce: 'back.out(1.7)'
linear: 'none'
```

**Stagger Timings:**
```typescript
tight: 0.05s
normal: 0.1s
loose: 0.15s
veryLoose: 0.2s
```

**Helper Functions:**

```typescript
import scrollTriggerConfig from '@/scripts/scroll-trigger-config';

// Fade in animation
scrollTriggerConfig.createFadeIn('.my-element', {
  y: 30,
  duration: 0.6,
  delay: 0.2,
});

// Scale in animation
scrollTriggerConfig.createScaleIn('.my-image', {
  scale: 0.8,
  duration: 1.0,
});

// Stagger animation
scrollTriggerConfig.createStaggerAnimation('.my-cards', {
  y: 40,
  stagger: 0.1,
});

// Parallax effect
scrollTriggerConfig.createParallax('.background', {
  y: -100,
  speed: 1.5,
});
```

**ScrollTrigger Configs:**

```typescript
// Standard fade-in
scrollTriggerConfig.config.fadeIn
// {
//   start: 'top bottom-=100',
//   end: 'top center',
//   toggleActions: 'play none none none',
//   once: true,
// }

// Parallax
scrollTriggerConfig.config.parallax
// {
//   start: 'top bottom',
//   end: 'bottom top',
//   scrub: 1,
// }

// Pinned sections
scrollTriggerConfig.config.pin
// {
//   start: 'top top',
//   end: '+=100%',
//   scrub: true,
//   pin: true,
// }
```

## Performance Optimizations

### Mobile Considerations

All animations respect mobile optimization:

1. **GSAP Mobile Optimizer** (from previous feature)
   - Reduces durations on mobile
   - Simplifies easing functions
   - Removes complex effects

2. **Touch Devices** (`@media (hover: none)`)
   - Disables hover effects
   - Enhanced active states
   - No magnetic effect

3. **Reduced Motion** (`prefers-reduced-motion: reduce`)
   - Disables all animations
   - Instant transitions
   - Opacity-only changes

### GPU Acceleration

All transforms use GPU-accelerated properties:
- `transform` instead of `top/left`
- `opacity` instead of `visibility`
- `will-change` hints for animated elements

### ScrollTrigger Optimizations

```typescript
ScrollTrigger.config({
  limitCallbacks: true,  // Limit callback frequency
  syncInterval: 150,     // Sync interval (ms)
});
```

## Integration

All animation features are automatically integrated via `BaseLayout.astro`:

```astro
---
import { ViewTransitions } from 'astro:transitions';
import LoadingScreen from '../components/ui/LoadingScreen.astro';
import ScrollProgress from '../components/ui/ScrollProgress.astro';
import '../styles/button-interactions.css';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <ViewTransitions />
  </head>
  <body>
    <LoadingScreen />
    <ScrollProgress />

    <!-- Page content -->

    <script src="../scripts/button-magnetic.ts"></script>
    <script src="../scripts/page-transitions.ts"></script>
  </body>
</html>
```

## Browser Support

- **Modern Browsers:** Full support (Chrome 90+, Firefox 85+, Safari 14+, Edge 90+)
- **View Transitions:** Chrome 111+, fallback to instant navigation
- **IntersectionObserver:** IE11+ with polyfill
- **GSAP:** All browsers (including IE9+ with polyfills)

## Accessibility

All animations are accessible:

1. **Keyboard Navigation**
   - Focus states with clear outlines
   - No animations on focus (only hover)

2. **Screen Readers**
   - ARIA labels preserved
   - Semantic HTML maintained
   - No content hidden by animations

3. **Reduced Motion**
   - Respects `prefers-reduced-motion`
   - Animations become instant
   - Opacity changes only

4. **Touch Targets**
   - 44px minimum (Apple HIG)
   - Large tap areas
   - Clear active states

## Debugging

Enable ScrollTrigger markers:

```typescript
// In scroll-trigger-config.ts
ScrollTrigger.defaults({
  markers: true, // Shows start/end markers
});
```

Check animation performance:

```javascript
// In browser console
ScrollTrigger.getAll(); // List all triggers
gsap.globalTimeline.getChildren(); // List all animations
```

## Examples

### Custom Entrance Animation

```astro
<div class="my-custom-element">
  Content
</div>

<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.from('.my-custom-element', {
    opacity: 0,
    y: 50,
    rotation: 10,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: '.my-custom-element',
      start: 'top bottom-=100',
      toggleActions: 'play none none none',
    },
  });
</script>
```

### Custom Button Effect

```html
<button class="my-special-button">
  Click Me
</button>

<style>
  .my-special-button {
    /* Inherits all base button interactions */
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  .my-special-button:hover {
    /* Additional hover effect */
    filter: hue-rotate(20deg);
  }
</style>
```

### Disable Animation for Specific Element

```html
<!-- No scroll animation -->
<img src="logo.png" data-no-animate />

<!-- No magnetic effect -->
<button data-no-magnetic>Static Button</button>

<!-- Instant transitions -->
<div class="instant-transition" style="transition: none">
  Content
</div>
```

## Best Practices

1. **Use Helper Functions**
   ```typescript
   // Good
   scrollTriggerConfig.createFadeIn('.element');

   // Avoid repetition
   // gsap.from('.element', { ... all config ... });
   ```

2. **Batch Animations**
   ```typescript
   // Good - one trigger for all cards
   gsap.from('.card', { stagger: 0.1, ... });

   // Avoid - individual triggers
   // cards.forEach(card => gsap.from(card, { ... }));
   ```

3. **Clean Up**
   ```typescript
   // On component unmount
   ScrollTrigger.getAll().forEach(st => st.kill());
   ```

4. **Performance**
   - Use `will-change` sparingly
   - Remove after animation completes
   - Prefer transform/opacity

5. **Accessibility**
   - Always test with keyboard
   - Check reduced motion
   - Ensure focus visibility

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [Web Animations Best Practices](https://web.dev/animations/)

---

**Last Updated:** 2025-01-19
**Version:** 1.0.0
**Maintained by:** Paddles with Wolves Development Team
