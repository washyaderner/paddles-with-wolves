# Deployment Guide - Paddles with Wolves

Complete guide for deploying the Paddles with Wolves website to Vercel and other platforms.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Vercel Deployment](#vercel-deployment)
3. [Environment Variables](#environment-variables)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Continuous Deployment](#continuous-deployment)
7. [Alternative Platforms](#alternative-platforms)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Accounts

- [x] GitHub account with repository access
- [ ] Vercel account (free tier available)
- [ ] Custom domain (optional, can use Vercel subdomain)
- [ ] Cal.com account (for booking system)
- [ ] Stripe account (for e-commerce)
- [ ] Email service account (SendGrid, Resend, etc.)

### Local Development Setup

Ensure the site runs locally before deploying:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to verify everything works.

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended for First Deploy)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Repository**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Astro
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add variables from `.env.example`
   - See [Environment Variables](#environment-variables) section

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Visit your deployment URL (e.g., `your-project.vercel.app`)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 3: Deploy via Git Push (Continuous Deployment)

Once connected via dashboard:

```bash
# Push to main branch triggers production deployment
git push origin main

# Push to other branches triggers preview deployment
git push origin feature/my-feature
```

## Environment Variables

### Required Variables

Copy from `.env.example` and fill in actual values:

```bash
# Site Configuration
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_SITE_NAME="Paddles with Wolves"

# Cal.com (Booking)
PUBLIC_CAL_COM_USERNAME=your-username
PUBLIC_CAL_COM_EVENT_TYPE_ENERGY=energy-healing-session
PUBLIC_CAL_COM_EVENT_TYPE_BODYWORK=therapeutic-bodywork
PUBLIC_CAL_COM_EVENT_TYPE_HERBAL=herbal-consultation
PUBLIC_CAL_COM_EVENT_TYPE_MOVEMENT=movement-therapy

# Stripe (E-commerce)
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Email Service
EMAIL_SERVICE_API_KEY=xxxxx
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
EMAIL_TO_ADDRESS=info@yourdomain.com
EMAIL_SERVICE_PROVIDER=sendgrid

# Analytics (Optional)
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Setting Variables in Vercel

**Via Dashboard:**
1. Go to your project in Vercel
2. Click "Settings" → "Environment Variables"
3. Add each variable
4. Select environments: Production, Preview, Development
5. Click "Save"

**Via CLI:**
```bash
# Set production variable
vercel env add PUBLIC_SITE_URL production

# Set for all environments
vercel env add PUBLIC_STRIPE_PUBLISHABLE_KEY
```

**Important:**
- Variables prefixed with `PUBLIC_` are exposed to the client
- Non-prefixed variables are server-only (keep secrets here)
- Always use `STRIPE_SECRET_KEY` (without PUBLIC) for Stripe secret

## Custom Domain Setup

### Add Domain to Vercel

1. **Purchase Domain**
   - Use any registrar (Namecheap, GoDaddy, Google Domains)
   - Example: `paddleswithwolves.com`

2. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain: `paddleswithwolves.com`
   - Also add: `www.paddleswithwolves.com`

3. **Configure DNS**

   **Option A: Use Vercel Nameservers (Recommended)**
   - Copy Vercel nameservers (provided in dashboard)
   - Update at your registrar:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - Wait 24-48 hours for propagation

   **Option B: Use Custom DNS**
   - Add A record:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Enable HTTPS**
   - Vercel automatically provisions SSL certificate
   - Usually takes 1-2 minutes
   - Free via Let's Encrypt

5. **Set Redirect (Optional)**
   - Redirect `www` → non-www or vice versa
   - Configure in Vercel dashboard

### Email DNS Records (for Custom Domain Email)

If using custom email (info@paddleswithwolves.com):

```
# MX Records (example for Google Workspace)
Type: MX
Name: @
Priority: 1
Value: aspmx.l.google.com

# SPF Record
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all

# DKIM Record (provided by email service)
Type: TXT
Name: google._domainkey
Value: [provided by Google Workspace]

# DMARC Record
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:postmaster@yourdomain.com
```

## Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Verify site loads at production URL
- [ ] Test all pages (home, services, about, apothecary, booking, contact)
- [ ] Test contact form submission
- [ ] Test booking system integration
- [ ] Verify shopping cart functionality
- [ ] Test mobile responsiveness
- [ ] Check all images load correctly
- [ ] Verify analytics tracking (if enabled)
- [ ] Test 404 page
- [ ] Check console for errors (F12)

### SEO Setup (Week 1)

- [ ] Submit sitemap to Google Search Console
  - URL: `https://yourdomain.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
  - URL: `https://yourdomain.com/robots.txt`
- [ ] Create and optimize Google Business Profile
- [ ] Set up social media profiles
- [ ] Test Open Graph images (share on Facebook/Twitter)
- [ ] Install Google Analytics (if not done)
- [ ] Set up Google Tag Manager (optional)

### Security & Performance (Week 1)

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Enable Vercel Analytics (optional, paid)
- [ ] Set up monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Review Vercel security headers (already configured in vercel.json)
- [ ] Test HTTPS redirect (http → https)
- [ ] Verify CSP headers (if configured)

### Integrations (Week 2)

- [ ] Configure Cal.com booking widget
  - Get embed code from Cal.com
  - Add to `CalendarEmbed.astro`
- [ ] Set up Stripe products
  - Create products in Stripe dashboard
  - Update product IDs in `products.json`
- [ ] Configure email service
  - Set up SendGrid/Resend templates
  - Test contact form email delivery
- [ ] Set up Stripe webhook
  - URL: `https://yourdomain.com/api/webhooks/stripe`
  - Events: checkout.session.completed

### Ongoing (Monthly)

- [ ] Monitor Core Web Vitals
- [ ] Review Analytics reports
- [ ] Check for broken links
- [ ] Update content regularly
- [ ] Monitor uptime
- [ ] Review error logs
- [ ] Back up data
- [ ] Update dependencies (`npm update`)

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Production:** Pushes to `main` branch
- **Preview:** Pushes to feature branches

### Deployment Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push to GitHub (triggers preview deployment)
git push origin feature/new-feature

# 4. Review preview URL (posted in GitHub PR)

# 5. Merge to main (triggers production deployment)
git checkout main
git merge feature/new-feature
git push origin main
```

### Deployment Hooks

Create custom deployment hooks for external triggers:

1. Go to Project Settings → Git → Deploy Hooks
2. Create hook
3. Use webhook URL to trigger deployments

Example use cases:
- CMS content updates
- Scheduled rebuilds
- External API changes

## Alternative Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Cloudflare Pages

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### AWS Amplify

1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

### Self-Hosted (VPS)

```bash
# Build locally
npm run build

# Upload dist folder to server
scp -r dist/* user@server:/var/www/html/

# Or use FTP client (FileZilla, Cyberduck)
```

**Nginx config:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Troubleshooting

### Build Failures

**Error: "Module not found"**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: "Build exceeded time limit"**
- Optimize images (reduce size)
- Remove unused dependencies
- Check for infinite loops in build scripts

**Error: "Out of memory"**
```bash
# Solution: Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Issues

**Site not updating after deployment**
- Clear browser cache (Ctrl+Shift+R)
- Check if correct branch is deployed
- Verify build succeeded in Vercel dashboard

**Environment variables not working**
- Check variable names (case-sensitive)
- Ensure `PUBLIC_` prefix for client-side variables
- Redeploy after adding variables

**404 on page refresh**
- Vercel should handle this automatically
- Check `vercel.json` rewrites configuration

### Performance Issues

**Slow page load**
1. Run Lighthouse audit
2. Optimize images (WebP, compression)
3. Enable Vercel Analytics to identify bottlenecks
4. Check for large JavaScript bundles

**High CLS (Cumulative Layout Shift)**
- Add width/height to all images
- Avoid inserting content above existing content
- Use skeleton loaders

### SSL/HTTPS Issues

**Certificate not provisioning**
- Wait 24-48 hours for DNS propagation
- Check DNS configuration
- Contact Vercel support if persists

**Mixed content warnings**
- Ensure all assets use HTTPS URLs
- Update any hardcoded HTTP links

### Form Submission Issues

**Forms not submitting**
1. Check network tab (F12) for errors
2. Verify API endpoint is correct
3. Check CORS configuration
4. Verify environment variables are set

## Support Resources

### Vercel
- [Documentation](https://vercel.com/docs)
- [Community Forum](https://github.com/vercel/vercel/discussions)
- [Status Page](https://www.vercel-status.com)
- Email: support@vercel.com

### Astro
- [Documentation](https://docs.astro.build)
- [Discord Community](https://astro.build/chat)
- [GitHub Discussions](https://github.com/withastro/astro/discussions)

### General
- Check deployment logs in Vercel dashboard
- Search GitHub issues for similar problems
- Ask in Astro Discord #support channel
- Stack Overflow (tag: astro, vercel)

---

## Quick Reference

### Common Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Check for errors
npm run check

# Format code
npm run format
```

### Important URLs

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/washyaderner/paddles-with-wolves
- **Production Site:** https://paddleswithwolves.com (after domain setup)
- **Sitemap:** https://paddleswithwolves.com/sitemap.xml
- **Robots.txt:** https://paddleswithwolves.com/robots.txt

---

**Last Updated:** 2025-01-19
**Version:** 1.0.0
**Maintained by:** Paddles with Wolves Development Team
