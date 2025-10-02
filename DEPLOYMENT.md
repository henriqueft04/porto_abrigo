# GitHub Pages Deployment Guide

This guide will help you deploy your Astro project to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project pushed to a GitHub repository
3. Node.js 18+ installed locally

## Step-by-Step Deployment

### 1. Update Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Update Astro Configuration

Before deploying, you need to update the `astro.config.ts` file with your GitHub username:

```typescript
export default defineConfig({
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io',  // Replace YOUR_USERNAME with your GitHub username
  base: '/porto_abrigo',  // Replace 'porto_abrigo' with your repository name
  // ... rest of your config
});
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username and `porto_abrigo` with your repository name.

### 3. Push to GitHub

1. Commit and push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

### 4. Monitor Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow run called "Deploy to GitHub Pages"
4. Wait for it to complete (usually takes 2-3 minutes)

### 5. Access Your Site

Once the deployment is complete, your site will be available at:
`https://YOUR_USERNAME.github.io/porto_abrigo`

## Local Development

To test your site locally before deploying:

```bash
npm run dev
```

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the `base` path in `astro.config.ts` matches your repository name
2. **Build Fails**: Check the Actions tab for error messages
3. **Assets Not Loading**: Verify the `site` URL in `astro.config.ts` is correct

### Manual Deployment

If you prefer to deploy manually:

1. Build your site: `npm run build`
2. The built files will be in the `dist/` folder
3. You can upload these files to GitHub Pages manually

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your `public/` folder with your domain
2. Update the `site` URL in `astro.config.ts` to your custom domain
3. Configure your domain's DNS settings to point to GitHub Pages

## Environment Variables

If you need environment variables for your build:

1. Go to your repository Settings
2. Navigate to Secrets and variables > Actions
3. Add your environment variables
4. They will be available during the build process

## Support

For more information, check:
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
