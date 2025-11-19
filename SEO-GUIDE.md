# SEO Guide - Paddles with Wolves

Comprehensive SEO strategy and implementation guide for optimal search engine visibility.

## Table of Contents

1. [SEO Checklist](#seo-checklist)
2. [Meta Tags Implementation](#meta-tags-implementation)
3. [Structured Data](#structured-data)
4. [Content Optimization](#content-optimization)
5. [Performance](#performance)
6. [Local SEO](#local-seo)
7. [Analytics & Monitoring](#analytics--monitoring)
8. [SEO Best Practices](#seo-best-practices)

## SEO Checklist

### Technical SEO ✅

- [x] Sitemap.xml generated (`/sitemap.xml`)
- [x] Robots.txt configured (`/robots.txt`)
- [x] Canonical URLs on all pages
- [x] Meta descriptions (150-160 characters)
- [x] Title tags (50-60 characters)
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Mobile-responsive design
- [x] Fast page load times (< 3s)
- [x] HTTPS enabled
- [x] Image lazy loading
- [x] Image alt text
- [ ] XML sitemap submitted to Google Search Console
- [ ] XML sitemap submitted to Bing Webmaster Tools
- [ ] Google Analytics installed
- [ ] Schema.org markup for all services

### On-Page SEO

- [ ] Keyword research completed
- [ ] H1 tags on all pages (one per page)
- [ ] H2-H6 hierarchy maintained
- [ ] Internal linking strategy
- [ ] External links to authoritative sources
- [ ] Image file names optimized
- [ ] URL structure clean and descriptive
- [ ] Content length adequate (500+ words for main pages)
- [ ] Meta keywords (optional, low priority)

### Off-Page SEO

- [ ] Google Business Profile created and optimized
- [ ] Local citations (Yelp, Yellow Pages, etc.)
- [ ] Social media profiles created
- [ ] Backlink strategy developed
- [ ] Online reviews encouraged
- [ ] Content marketing plan
- [ ] Email marketing integration

## Meta Tags Implementation

### Using SEOHead Component

```astro
---
import SEOHead from '@/components/seo/SEOHead.astro';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <SEOHead
      title="Your Page Title | Paddles with Wolves"
      description="Compelling description of the page content (150-160 chars)"
      keywords="healing, wellness, massage, energy work"
      image="/og-images/page-specific-og.jpg"
      imageAlt="Alt text for OG image"
      type="website"
    />
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

### Page-Specific Examples

#### Homepage
```astro
<SEOHead
  title="Paddles with Wolves - Holistic Healing Arts & Wellness"
  description="Discover transformative healing through massage therapy, energy work, and natural apothecary in the Pacific Northwest. Book your healing session today."
  keywords="holistic healing, wellness center, massage therapy, energy healing, pacific northwest, natural remedies"
  image="/og-images/home-og.jpg"
  type="website"
/>
```

#### Services Page
```astro
<SEOHead
  title="Healing Services - Energy Work, Bodywork & Herbal Medicine"
  description="Explore our comprehensive healing services including energy healing, therapeutic bodywork, herbal consultations, and movement therapy. Each session is personalized to your needs."
  keywords="energy healing, massage therapy, bodywork, herbal medicine, holistic health"
  image="/og-images/services-og.jpg"
  type="service"
/>
```

#### Apothecary Page
```astro
<SEOHead
  title="Herbal Apothecary - Natural Remedies & Tinctures"
  description="Shop our curated collection of handcrafted herbal tinctures, balms, and natural remedies. All products made with organic, sustainably sourced ingredients."
  keywords="herbal remedies, natural tinctures, herbal apothecary, organic herbs, holistic wellness"
  image="/og-images/apothecary-og.jpg"
  type="website"
/>
```

## Structured Data

### Organization Schema

Already implemented in `SEOHead.astro`:

```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Paddles with Wolves",
  "description": "Holistic healing services",
  "url": "https://paddleswithwolves.com",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your City",
    "addressRegion": "WA",
    "addressCountry": "US"
  }
}
```

### Service Schema

Add to individual service pages:

```astro
---
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Energy Healing",
  "provider": {
    "@type": "HealthAndBeautyBusiness",
    "name": "Paddles with Wolves"
  },
  "areaServed": {
    "@type": "State",
    "name": "Washington"
  },
  "offers": {
    "@type": "Offer",
    "price": "60.00",
    "priceCurrency": "USD"
  }
};
---

<SEOHead structuredData={serviceSchema} />
```

### Product Schema

For apothecary products:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mountain Arnica Pain Relief Tincture",
  "image": "https://paddleswithwolves.com/images/products/pain-relief.jpg",
  "description": "Natural pain relief tincture",
  "offers": {
    "@type": "Offer",
    "price": "32.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### Review Schema

For testimonials:

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "HealthAndBeautyBusiness",
    "name": "Paddles with Wolves"
  },
  "author": {
    "@type": "Person",
    "name": "Customer Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Amazing healing experience..."
}
```

## Content Optimization

### Keyword Strategy

**Primary Keywords:**
- Holistic healing [location]
- Energy healing [location]
- Massage therapy [location]
- Herbal medicine [location]
- Wellness center [location]

**Long-tail Keywords:**
- "Best energy healer in Pacific Northwest"
- "Natural pain relief remedies"
- "Holistic wellness services near me"
- "Therapeutic massage for chronic pain"

### Content Guidelines

1. **Title Tags** (50-60 characters)
   - Include primary keyword
   - Include location (if local)
   - Include brand name
   - Front-load important words

2. **Meta Descriptions** (150-160 characters)
   - Compelling call-to-action
   - Include primary keyword naturally
   - Highlight unique value proposition
   - Use active voice

3. **Headings Hierarchy**
   ```html
   <h1>Primary Page Title (One per page)</h1>
     <h2>Main Section</h2>
       <h3>Subsection</h3>
         <h4>Detail</h4>
   ```

4. **Content Length**
   - Homepage: 500-800 words
   - Service pages: 800-1200 words
   - Blog posts: 1500-2500 words
   - Product pages: 300-500 words

5. **Internal Linking**
   - Link to related services
   - Link to relevant products
   - Use descriptive anchor text
   - Maintain 2-3 internal links per page

## Performance

### Core Web Vitals

Target metrics:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Techniques

1. **Image Optimization**
   - Use WebP format
   - Lazy load below-the-fold images
   - Use responsive images
   - Compress images (< 200KB)
   - Specify width/height to prevent CLS

2. **Code Optimization**
   - Minify CSS/JS
   - Use Astro's built-in optimizations
   - Defer non-critical JavaScript
   - Preload critical assets

3. **Caching Strategy**
   - Set cache headers (Vercel handles this)
   - Use CDN for static assets
   - Implement service worker (future)

4. **Font Optimization**
   - Use system fonts when possible
   - Preload custom fonts
   - Use font-display: swap

## Local SEO

### Google Business Profile

1. **Claim your listing**
   - https://business.google.com

2. **Complete all sections**
   - Business name
   - Address
   - Phone number (NAP consistency)
   - Website URL
   - Hours of operation
   - Services offered
   - Photos (minimum 10)
   - Business description

3. **Categories**
   - Primary: Holistic Medicine Practitioner
   - Secondary: Massage Therapist, Herbalist

4. **Attributes**
   - Wheelchair accessible
   - Appointment required
   - Accepts credit cards
   - Free Wi-Fi
   - Parking available

### Local Citations

Ensure NAP (Name, Address, Phone) consistency across:

- Yelp
- Yellow Pages
- Healthgrades
- Wellness.com
- MindBodyGreen directory
- Local Chamber of Commerce
- Better Business Bureau
- Facebook Business
- Instagram Business

### Local Content

- Create location-specific pages
- Write about local community involvement
- Feature local partnerships
- Use local keywords in content
- Get local backlinks (news, blogs, directories)

## Analytics & Monitoring

### Google Search Console

**Setup:**
1. Verify site ownership
2. Submit sitemap: `https://paddleswithwolves.com/sitemap.xml`
3. Monitor coverage reports
4. Check for crawl errors
5. Review search performance

**Key Metrics:**
- Total clicks
- Total impressions
- Average CTR (click-through rate)
- Average position
- Top performing queries
- Top performing pages

### Google Analytics 4

**Setup:**
```html
<!-- Add to BaseLayout.astro head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Events to Track:**
- Form submissions (contact, booking)
- Button clicks (CTA buttons)
- Product views
- Add to cart
- Checkout initiation
- Page scroll depth
- File downloads

### Monitoring Tools

1. **Google Search Console** - Search performance
2. **Google Analytics** - User behavior
3. **Google PageSpeed Insights** - Performance
4. **Ahrefs / SEMrush** - Keyword rankings (paid)
5. **Screaming Frog** - Technical SEO audits
6. **GTmetrix** - Page speed
7. **Mobile-Friendly Test** - Mobile optimization

## SEO Best Practices

### Content

✅ **DO:**
- Write for humans first, search engines second
- Use natural language and conversational tone
- Answer user questions directly
- Include multimedia (images, videos)
- Update content regularly
- Use bullet points and lists for readability
- Include call-to-actions

❌ **DON'T:**
- Keyword stuff
- Duplicate content
- Use hidden text or links
- Buy backlinks
- Use automated content
- Ignore mobile users
- Neglect meta descriptions

### Technical

✅ **DO:**
- Use HTTPS
- Have a mobile-responsive design
- Optimize page speed
- Fix broken links
- Create XML sitemap
- Use structured data
- Implement breadcrumbs
- Use descriptive URLs

❌ **DON'T:**
- Use Flash
- Have duplicate content
- Ignore redirects (301 vs 302)
- Block resources in robots.txt unnecessarily
- Use too many redirects
- Ignore canonical tags

### Link Building

✅ **DO:**
- Create valuable content people want to link to
- Guest post on relevant blogs
- Get listed in relevant directories
- Build relationships with industry influencers
- Use social media to amplify content
- Fix broken backlinks (reclamation)

❌ **DON'T:**
- Buy links
- Participate in link schemes
- Use exact-match anchor text excessively
- Get links from spammy sites
- Use automated link building tools

## Implementation Checklist

### Week 1: Foundation
- [ ] Install Google Search Console
- [ ] Install Google Analytics
- [ ] Submit sitemap to GSC
- [ ] Create Google Business Profile
- [ ] Set up social media profiles
- [ ] Conduct keyword research

### Week 2: On-Page
- [ ] Optimize all page titles
- [ ] Write compelling meta descriptions
- [ ] Add structured data to all pages
- [ ] Optimize all images
- [ ] Improve content quality (500+ words)
- [ ] Fix any broken links

### Week 3: Local SEO
- [ ] Complete Google Business Profile
- [ ] Get listed in top 10 directories
- [ ] Ensure NAP consistency
- [ ] Add location pages (if multiple locations)
- [ ] Get first 5 Google reviews

### Week 4: Content & Links
- [ ] Publish first blog post
- [ ] Share on social media
- [ ] Reach out to local businesses for partnerships
- [ ] Submit to wellness directories
- [ ] Create content calendar for next month

### Month 2-3: Growth
- [ ] Publish weekly blog content
- [ ] Build backlinks (10-15/month)
- [ ] Monitor rankings weekly
- [ ] Optimize underperforming pages
- [ ] A/B test titles and descriptions
- [ ] Analyze competitor strategies

## Resources

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Ahrefs](https://ahrefs.com) (paid)
- [SEMrush](https://www.semrush.com) (paid)
- [Moz](https://moz.com) (paid)

### Learning Resources
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Search Engine Journal](https://www.searchenginejournal.com)
- [Ahrefs Blog](https://ahrefs.com/blog)

### Testing Tools
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema Markup Validator](https://validator.schema.org)
- [OpenGraph Preview](https://www.opengraph.xyz)

---

**Last Updated:** 2025-01-19
**Version:** 1.0.0
**Maintained by:** Paddles with Wolves Development Team
