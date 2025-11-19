/**
 * Dynamic Sitemap Generation
 * Generates sitemap.xml for search engines
 */

import type { APIRoute } from 'astro';

// Define your site's pages with their priorities and change frequencies
const pages = [
  { url: '', priority: 1.0, changefreq: 'weekly' }, // Homepage
  { url: 'services', priority: 0.9, changefreq: 'monthly' },
  { url: 'about', priority: 0.8, changefreq: 'monthly' },
  { url: 'apothecary', priority: 0.9, changefreq: 'weekly' },
  { url: 'booking', priority: 0.9, changefreq: 'daily' },
  { url: 'contact', priority: 0.7, changefreq: 'monthly' },
];

function generateSitemap(siteUrl: string): string {
  const urlElements = pages.map(page => `
  <url>
    <loc>${siteUrl}${page.url ? `/${page.url}` : ''}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlElements}
</urlset>`;
}

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://paddleswithwolves.com';
  const sitemap = generateSitemap(siteUrl);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};
