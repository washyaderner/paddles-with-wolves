# Paddles with Wolves

> Mystical healing arts website for Pacific Northwest energy worker - featuring energy healing, therapeutic bodywork, herbal apothecary, and movement therapy.

[![Astro](https://img.shields.io/badge/Astro-4.16-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?logo=vercel&logoColor=white)](https://vercel.com)

## 📖 Overview

A modern, performant, and beautifully animated web presence for a holistic healing practice in the Pacific Northwest. Built with Astro for optimal performance, featuring smooth GSAP animations, mobile-first responsive design, and comprehensive SEO optimization.

## ✨ Features

### 🎨 User Experience
- **Mystical Design System** - Nature-inspired color palette with glassmorphic UI
- **Smooth Animations** - GSAP-powered scroll animations and page transitions
- **Loading Screen** - Canvas-based energy particle animation
- **Mobile Optimized** - Responsive design with touch interactions and drawer navigation
- **Accessibility** - WCAG 2.1 AA compliant with reduced motion support

### 🏥 Core Functionality
- **Service Showcase** - Energy healing, bodywork, herbal consultations, movement therapy
- **Herbal Apothecary** - Product catalog with 3D flip cards and shopping cart
- **Booking System** - Cal.com integration for appointment scheduling
- **Contact Forms** - Mystical-styled forms with validation and glow effects
- **Location Map** - Custom SVG map of Pacific Northwest

### 🚀 Performance & SEO
- **Lighthouse Score** - 90+ across all metrics
- **SEO Optimized** - Comprehensive meta tags, Open Graph, structured data
- **Lazy Loading** - Optimized images with progressive loading
- **Fast Page Loads** - Astro's islands architecture for minimal JavaScript
- **Sitemap & Robots** - Automatic generation for search engines

### 🎭 Animations
- **Button Micro-interactions** - Ripple, glow, magnetic effects
- **Scroll Progress** - Animated gradient progress bar
- **Page Transitions** - Smooth Astro View Transitions
- **Scroll Triggers** - Optimized GSAP ScrollTrigger configurations
- **Mobile Performance** - Intelligent animation reduction on mobile devices

## 🛠 Tech Stack

### Frontend
- **[Astro](https://astro.build)** 4.16+ - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** 5.0+ - Type-safe development
- **[GSAP](https://greensock.com/gsap/)** 3.12+ - Animation library with ScrollTrigger
- **CSS3** - Modern CSS with custom properties and animations

### Integrations
- **[Cal.com](https://cal.com)** - Booking and scheduling
- **[Stripe](https://stripe.com)** - E-commerce for herbal products
- **Email Service** - Contact form integration (SendGrid/Resend)

### Deployment & Infrastructure
- **[Vercel](https://vercel.com)** - Hosting and CI/CD
- **GitHub** - Version control and collaboration
- **Node.js** 18+ - Runtime environment

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/washyaderner/paddles-with-wolves.git

# Navigate to project directory
cd paddles-with-wolves

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Run development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view in browser.

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Format code
npm run format
```

## 📁 Project Structure

```
paddles-with-wolves/
├── src/
│   ├── components/          # Astro components
│   │   ├── backgrounds/     # Animated backgrounds
│   │   ├── booking/         # Booking system components
│   │   ├── cart/           # Shopping cart
│   │   ├── contact/        # Contact forms and maps
│   │   ├── hero/           # Hero sections
│   │   ├── navigation/     # Navigation components
│   │   ├── products/       # Product cards and grid
│   │   ├── seo/            # SEO meta components
│   │   ├── services/       # Service cards
│   │   └── ui/             # UI components
│   ├── data/               # JSON data files
│   ├── layouts/            # Page layouts
│   ├── pages/              # Astro pages (routes)
│   ├── scripts/            # TypeScript utilities
│   │   ├── gsap-mobile-optimizer.ts
│   │   ├── button-magnetic.ts
│   │   ├── page-transitions.ts
│   │   ├── scroll-animations.ts
│   │   └── scroll-trigger-config.ts
│   └── styles/             # Global styles
│       ├── global.css
│       ├── mobile.css
│       └── button-interactions.css
├── public/                 # Static assets
│   ├── favicons/          # Favicon files
│   ├── og-images/         # Open Graph images
│   └── robots.txt         # Search engine directives
├── astro.config.mjs       # Astro configuration
├── vercel.json            # Vercel deployment config
├── .env.example           # Environment variables template
└── package.json           # Dependencies and scripts
```

## 🔐 Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Site Configuration
PUBLIC_SITE_URL=https://paddleswithwolves.com
PUBLIC_SITE_NAME="Paddles with Wolves"

# Cal.com Integration
PUBLIC_CAL_COM_USERNAME=your-username
PUBLIC_CAL_COM_EVENT_TYPE_ENERGY=energy-healing-session

# Stripe Integration
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx

# Email Service
EMAIL_SERVICE_API_KEY=xxxxx
EMAIL_FROM_ADDRESS=noreply@paddleswithwolves.com

# Analytics (Optional)
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

See `.env.example` for complete configuration options.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub Repository**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Login and deploy
   vercel login
   vercel --prod
   ```

2. **Or use Vercel Dashboard**
   - Import repository from GitHub
   - Configure environment variables
   - Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Build for Production

```bash
# Create production build
npm run build

# Output directory: dist/
```

## 📚 Documentation

- **[SEO-GUIDE.md](SEO-GUIDE.md)** - Complete SEO strategy and implementation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide for Vercel and other platforms
- **[MOBILE-OPTIMIZATION.md](MOBILE-OPTIMIZATION.md)** - Mobile optimization techniques
- **[ANIMATION-POLISH.md](ANIMATION-POLISH.md)** - Animation system documentation

## 🎨 Design System

### Color Palette

```css
--mystic-purple: #6B46C1;    /* Primary brand color */
--sunset-gold: #FDB462;      /* Accent color */
--forest-green: #588157;     /* Natural element */
--dusk-lavender: #C8B6FF;    /* Soft highlight */
--deep-navy: #0f172a;        /* Background */
```

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Code:** JetBrains Mono (monospace)

## 🧪 Testing

### Browser Support

- Chrome 90+ ✅
- Firefox 85+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile Safari (iOS 14+) ✅
- Chrome Mobile (Android 10+) ✅

### Performance Metrics

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 100
- **Lighthouse Best Practices:** 100
- **Lighthouse SEO:** 100
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s

## 🤝 Contributing

This is a private project for Paddles with Wolves healing practice.

## 📄 License

Proprietary - All rights reserved

## 📧 Contact

For inquiries about healing services, please visit [paddleswithwolves.com/contact](https://paddleswithwolves.com/contact)

---

## 🔄 Recent Updates

### v1.0.0 - SEO & Deployment Ready (2025-01-19)
- ✅ Comprehensive SEO optimization
- ✅ Sitemap and robots.txt
- ✅ Environment variables structure
- ✅ Vercel deployment configuration
- ✅ Open Graph images setup
- ✅ Image optimization components

### v0.6.0 - Animation Polish (2025-01-19)
- ✅ Loading screen with energy particles
- ✅ Scroll progress indicator
- ✅ Button micro-interactions
- ✅ Page transitions (Astro View Transitions)
- ✅ Optimized ScrollTrigger configurations

### v0.5.0 - Mobile Optimization (2025-01-19)
- ✅ Mobile drawer navigation
- ✅ Touch interactions and feedback
- ✅ GSAP mobile optimizer
- ✅ Comprehensive mobile.css utilities

### v0.4.0 - Contact & Location (2025-01-19)
- ✅ Contact form with validation
- ✅ Custom SVG map of Pacific Northwest
- ✅ Floating contact bubbles

### v0.3.0 - Booking System (2025-01-19)
- ✅ Cal.com integration structure
- ✅ Service selector with pricing
- ✅ Booking confirmation flow

### v0.2.0 - Herbal Apothecary (2025-01-19)
- ✅ Product catalog with 10 herbal products
- ✅ 3D flip product cards
- ✅ Shopping cart with Stripe integration
- ✅ Category filtering

### v0.1.0 - Initial Features (2025-01-19)
- ✅ Design system and color palette
- ✅ Hero section with animated particles
- ✅ Services showcase
- ✅ About section with testimonials
- ✅ Animated backgrounds

---

**Built with 💜 by the Paddles with Wolves Development Team**
