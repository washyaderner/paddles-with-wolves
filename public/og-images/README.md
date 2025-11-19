# Open Graph Images

This directory contains Open Graph (OG) images for social media sharing.

## Image Requirements

### Facebook / Open Graph
- **Dimensions:** 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format:** JPG or PNG
- **File Size:** < 8 MB (ideally < 300 KB)
- **Safe Area:** Keep important content within 1200 x 600 pixels (centered)

### Twitter Cards
- **Dimensions:** 1200 x 628 pixels (or 1200 x 630)
- **Format:** JPG, PNG, WEBP, or GIF
- **File Size:** < 5 MB
- **Aspect Ratio:** 1.91:1 or 1:1 for summary cards

### LinkedIn
- **Dimensions:** 1200 x 627 pixels
- **Format:** JPG or PNG
- **File Size:** < 5 MB

## Required Images

### Default Image
- **Filename:** `default-og.jpg`
- **Description:** Default image for pages without specific OG images
- **Content:** Paddles with Wolves branding, mystical theme

### Page-Specific Images

1. **Homepage** - `home-og.jpg`
   - Showcase main services and healing theme
   - Include wolf logo and mystical elements

2. **Services** - `services-og.jpg`
   - Highlight healing modalities
   - Energy healing, bodywork, herbal medicine icons

3. **About** - `about-og.jpg`
   - Practitioner photo or philosophy imagery
   - Testimonials or trust indicators

4. **Apothecary** - `apothecary-og.jpg`
   - Herbal products display
   - Tinctures, balms, natural remedies

5. **Booking** - `booking-og.jpg`
   - Call-to-action for appointments
   - Calendar or scheduling theme

6. **Contact** - `contact-og.jpg`
   - Map or location theme
   - Contact information highlights

## Design Guidelines

### Color Palette
- Mystic Purple: `#6B46C1`
- Sunset Gold: `#FDB462`
- Forest Green: `#588157`
- Dusk Lavender: `#C8B6FF`

### Typography
- Headings: Playfair Display or similar serif
- Body: Inter or similar sans-serif
- Ensure text is readable at small sizes (mobile previews)

### Content Guidelines
- **Logo:** Include Paddles with Wolves logo
- **Title:** Large, readable text (50-60px)
- **Tagline:** Supporting text (24-30px)
- **Imagery:** Nature-inspired, healing-focused
- **Contrast:** High contrast for readability
- **Branding:** Consistent visual style across all images

## Image Optimization

Before adding images to this directory:

1. **Compress:** Use tools like TinyPNG or Squoosh
2. **Format:** JPG for photos, PNG for graphics with transparency
3. **Naming:** Use lowercase, kebab-case (e.g., `about-tony-og.jpg`)
4. **Alt Text:** Always provide in page meta tags

## Tools for Creating OG Images

- **Canva:** Easy drag-and-drop templates
- **Figma:** Professional design tool
- **Adobe Photoshop:** Advanced editing
- **Bannerbear:** Automated OG image generation
- **Vercel OG:** Dynamic OG images (requires serverless functions)

## Testing

Test your OG images using these tools:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Social Share Preview](https://socialsharepreview.com/)

## Current Images

- `default-og.jpg` - Default fallback image (to be created)

## Future Images

- Product-specific images for apothecary items
- Service-specific images for each healing modality
- Blog post images (when blog is implemented)
- Event/workshop images (when events are added)

## Dynamic OG Images

For advanced use cases, consider implementing dynamic OG images:

```typescript
// Example: pages/og/[page].png.ts
export async function get({ params }) {
  // Generate image based on page content
  // Return as PNG response
}
```

This allows automated generation of OG images for dynamic content like blog posts or products.

---

**Last Updated:** 2025-01-19
**Maintained by:** Paddles with Wolves Development Team
