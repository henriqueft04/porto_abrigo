# Custom Domain Deployment Guide

This guide will help you deploy your Astro project to a custom domain using various hosting platforms.

## Prerequisites

1. A custom domain (purchased from any domain registrar like Namecheap, GoDaddy, etc.)
2. Your project pushed to a Git repository (GitHub, GitLab, etc.)
3. Node.js 18+ installed locally

## Platform Options

### 1. Netlify (Recommended - Easiest)

**Pros:**
- Free tier with custom domains
- Automatic deployments from Git
- Global CDN for fast loading
- Automatic SSL certificates
- Form handling capabilities
- Easy drag-and-drop deployment

**Steps:**

1. **Prepare your repository:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Connect your GitHub/GitLab account
   - Select your `porto_abrigo` repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `18` (add in Environment variables)

3. **Add Custom Domain:**
   - In Netlify dashboard, go to your site
   - Click "Domain settings" → "Add custom domain"
   - Enter your domain (e.g., `yourdomain.com`)
   - Netlify will provide DNS instructions

4. **Configure DNS:**
   - Add the provided Netlify DNS records to your domain registrar
   - Wait for DNS propagation (up to 24 hours)

### 2. Vercel

**Pros:**
- Excellent performance with Edge Network
- Automatic deployments
- Great developer experience
- Free tier with custom domains

**Steps:**

1. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Astro projects
   - Click "Deploy"

2. **Add Custom Domain:**
   - In project dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### 3. Railway

**Pros:**
- Docker support
- Good for full-stack applications
- Simple deployment process

**Steps:**

1. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app) and sign up
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will detect the Dockerfile and deploy automatically

2. **Add Custom Domain:**
   - In your project dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Configure DNS as instructed

### 4. Render

**Pros:**
- Free tier available
- Automatic deployments
- Good performance

**Steps:**

1. **Deploy to Render:**
   - Go to [render.com](https://render.com) and sign up
   - Click "New" → "Static Site"
   - Connect your GitHub repository
   - Build settings:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`

2. **Add Custom Domain:**
   - In your service dashboard, go to "Settings" → "Custom Domains"
   - Add your domain and configure DNS

## Domain Configuration

### DNS Records

For most platforms, you'll need to add these DNS records:

**For root domain (yourdomain.com):**
```
Type: A
Name: @
Value: [Platform IP address]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourdomain.com
```

### Platform-Specific DNS

Each platform will provide specific DNS instructions:

- **Netlify**: Provides custom nameservers or A/CNAME records
- **Vercel**: Provides A records pointing to Vercel IPs
- **Railway**: Provides CNAME records
- **Render**: Provides A records

## Post-Deployment Steps

1. **Update Astro Configuration:**
   ```typescript
   // astro.config.ts
   export default defineConfig({
     site: 'https://yourdomain.com', // Update with your actual domain
     // ... rest of config
   });
   ```

2. **Test Your Site:**
   - Visit your custom domain
   - Check all pages load correctly
   - Verify images and assets load properly
   - Test on mobile devices

3. **SSL Certificate:**
   - Most platforms provide automatic SSL certificates
   - Ensure your site loads with HTTPS

## Troubleshooting

### Common Issues

1. **Domain not loading:**
   - Check DNS propagation (can take up to 24 hours)
   - Verify DNS records are correct
   - Clear your browser cache

2. **Assets not loading:**
   - Check if the `site` URL in `astro.config.ts` matches your domain
   - Verify build output in the `dist` folder

3. **404 errors:**
   - Ensure your platform is configured to serve from the `dist` directory
   - Check if your build process completed successfully

### DNS Propagation Check

Use these tools to check DNS propagation:
- [whatsmydns.net](https://whatsmydns.net)
- [dnschecker.org](https://dnschecker.org)

## Environment Variables

If your site needs environment variables:

1. **Netlify**: Go to Site settings → Environment variables
2. **Vercel**: Go to Project settings → Environment variables
3. **Railway**: Go to Variables tab in your project
4. **Render**: Go to Environment tab in your service

## Performance Optimization

After deployment:

1. **Enable Compression**: Most platforms enable this automatically
2. **CDN**: All recommended platforms include global CDN
3. **Caching**: Configure appropriate cache headers
4. **Images**: Optimize images and use modern formats (WebP)

## Monitoring

Set up monitoring for your site:

1. **Uptime monitoring**: Use services like UptimeRobot
2. **Analytics**: Add Google Analytics or similar
3. **Error tracking**: Consider Sentry for error monitoring

## Backup Strategy

1. **Code**: Your code is backed up in Git
2. **Content**: If using a CMS, ensure content is backed up
3. **Domain**: Keep domain registration details secure

## Cost Considerations

**Free Tiers:**
- Netlify: 100GB bandwidth, 300 build minutes
- Vercel: 100GB bandwidth, 6000 build minutes
- Railway: $5 credit monthly
- Render: 750 hours runtime

**Paid Plans:**
- Start with free tiers and upgrade as needed
- Most platforms offer reasonable pricing for small sites

## Support

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Render**: [render.com/docs](https://render.com/docs)

## Quick Start Commands

```bash
# Build your site locally to test
npm run build
npm run preview

# Check for any issues
npm run check

# Deploy (after connecting to your platform)
git add .
git commit -m "Deploy to production"
git push origin main
```

Choose the platform that best fits your needs and budget. Netlify is recommended for beginners due to its simplicity and excellent documentation.
