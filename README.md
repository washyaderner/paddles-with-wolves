# Paddles With Wolves

Mystical healing arts website for Pacific Northwest energy worker - Qi Gong, massage, herbal medicine

## Overview

A modern, responsive web presence for a holistic healing practice in the Pacific Northwest, showcasing energy work, massage therapy, and herbal medicine services.

## Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI components and state management
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions

### Backend & Infrastructure
- **Vercel** - Hosting and deployment
- **Next.js API Routes** - Backend API endpoints
- **Node.js** - Runtime environment

### Content & CMS (Optional)
- **Markdown** - Service descriptions and blog posts
- **Contentful/Sanity** - Headless CMS options for easy content updates

### Forms & Communication
- **React Hook Form** - Form validation
- **Resend/SendGrid** - Email service for contact forms
- **Zod** - Schema validation

## Features

### Core Features
- 🌿 **Service Pages** - Qi Gong, massage therapy, herbal consultations
- 📅 **Online Booking** - Integration with scheduling platform
- 📧 **Contact Forms** - Get in touch with validation
- 📱 **Mobile Responsive** - Optimized for all devices
- ♿ **Accessibility** - WCAG 2.1 AA compliant

### User Experience
- 🎨 **Nature-Inspired Design** - Calming Pacific Northwest aesthetic
- ⚡ **Fast Loading** - Optimized images and lazy loading
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- 🌙 **Dark Mode** (Optional) - Reduced eye strain

### Content Sections
- **About** - Practitioner bio and philosophy
- **Services** - Detailed service offerings and pricing
- **Testimonials** - Client reviews and success stories
- **Blog** (Optional) - Wellness tips and healing insights
- **Resources** - Helpful links and educational materials

### Technical Features
- ✨ **Animation Effects** - Smooth scroll animations
- 🖼️ **Image Gallery** - Treatment space photos
- 📍 **Location Map** - Embedded Google Maps
- 🔒 **Privacy Focused** - HIPAA-compliant contact handling

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/washyaderner/paddles-with-wolves.git

# Navigate to project directory
cd paddles-with-wolves

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Project Structure

```
paddles-with-wolves/
├── app/              # Next.js app directory
├── components/       # React components
├── public/           # Static assets
├── styles/           # Global styles
├── lib/              # Utility functions
└── types/            # TypeScript definitions
```

## Deployment

Deployment is automated through Vercel:

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_BOOKING_URL=your_booking_url
```

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contact

For inquiries about services, please visit the contact page on the website.
