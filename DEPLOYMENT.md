# 🚀 Deployment Guide

This guide will help you deploy your Portfolio V3 to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure:
- All personal information is updated in `index.html`
- Custom domain is configured (if using one)
- All links and contact information are correct

## 🌐 Deployment Options

### 1. GitHub Pages (Recommended - Free)

**Steps:**

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio V3"
git branch -M main
git remote add origin https://github.com/mukul975/portfolio-v3.git
git push -u origin main
```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select branch: `main` and folder: `/ (root)`
   - Click "Save"
   - Wait 2-3 minutes for deployment

3. **Custom Domain (Optional)**
   - The CNAME file is already configured with `mahipal.engineer`
   - In GitHub Pages settings, add your custom domain
   - Update DNS records at your domain registrar:
     ```
     Type: CNAME
     Host: @ or www
     Value: mukul975.github.io
     ```

**Your site will be live at:**
- `https://mukul975.github.io/portfolio-v3/` (default)
- `https://mahipal.engineer` (with custom domain)

---

### 2. Netlify (Easiest)

**Option A: Drag & Drop**
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up / Log in
3. Drag the entire `portfolio-v3` folder to Netlify dashboard
4. Done! Your site is live

**Option B: GitHub Integration**
1. Connect your GitHub account to Netlify
2. Select your portfolio repository
3. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `./`
4. Deploy!

**Custom Domain on Netlify:**
- Go to Domain Settings
- Add custom domain
- Follow DNS configuration instructions

**Netlify URL:** `https://mahipal-portfolio.netlify.app/`

---

### 3. Vercel

**Steps:**

1. **Install Vercel CLI** (Optional)
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd portfolio-v3
vercel --prod
```

**Or use Vercel Dashboard:**
1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Configure project (no special settings needed)
4. Deploy!

**Custom Domain:**
- Add domain in project settings
- Follow DNS configuration

**Vercel URL:** `https://portfolio-v3.vercel.app/`

---

### 4. Cloudflare Pages

**Steps:**

1. **Connect GitHub Repository**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub account
   - Select `portfolio-v3` repository

2. **Configure Build**
   - Build command: (leave empty)
   - Build output directory: `/`
   - Root directory: `/`

3. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete

**Custom Domain:**
- Automatically configured if using Cloudflare DNS
- Or add custom domain in project settings

---

### 5. Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase**
```bash
firebase login
firebase init hosting
```

3. **Configure**
   - Select or create a project
   - Public directory: `./`
   - Single-page app: No
   - Automatic builds: No

4. **Deploy**
```bash
firebase deploy
```

**Custom Domain:**
```bash
firebase hosting:channel:deploy production
```

---

### 6. AWS S3 + CloudFront

**Steps:**

1. **Create S3 Bucket**
   - Name: `mahipal-portfolio`
   - Region: Choose closest to target audience
   - Enable static website hosting

2. **Upload Files**
```bash
aws s3 sync . s3://mahipal-portfolio --delete
```

3. **Configure Bucket Policy**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::mahipal-portfolio/*"
  }]
}
```

4. **Set up CloudFront** (Optional but recommended)
   - Create distribution
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Configure custom domain

---

### 7. Docker (For Advanced Users)

**Create `Dockerfile`:**
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and Run:**
```bash
docker build -t portfolio-v3 .
docker run -p 8080:80 portfolio-v3
```

---

## 🔒 SSL/HTTPS

All recommended platforms provide **free SSL certificates**:
- **GitHub Pages**: Automatic with custom domain
- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic
- **Cloudflare**: Automatic
- **Firebase**: Automatic

## ⚡ Performance Optimization

After deployment:

1. **Enable Compression** (Gzip/Brotli)
2. **Configure Caching Headers**
3. **Enable CDN** (most platforms do this automatically)
4. **Optimize Images** (if you add any)
5. **Minify Assets** (optional for this project)

## 📊 Testing Deployment

After deployment, test:

1. **Functionality**
   - All navigation links work
   - Forms submit correctly
   - 3D scene renders
   - Animations play smoothly

2. **Performance**
   - Run [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - Check [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test on [GTmetrix](https://gtmetrix.com/)

3. **Compatibility**
   - Test on multiple browsers
   - Test on mobile devices
   - Check responsive design

4. **SEO**
   - Verify meta tags
   - Check Open Graph tags
   - Test with [Search Console](https://search.google.com/search-console)

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: .
```

## 🌍 Custom Domain Configuration

### DNS Settings

**For Apex Domain (mahipal.engineer):**
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME
Host: www
Value: mukul975.github.io
```

## 📝 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] 3D scene renders
- [ ] All links work
- [ ] Forms function properly
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Google Analytics added (optional)
- [ ] SEO meta tags verified
- [ ] Performance score > 90
- [ ] Share on social media!

## 🐛 Troubleshooting

### Issue: 3D Scene Not Rendering
**Solution**: Ensure Three.js CDN is accessible. Check browser console for errors.

### Issue: CNAME Conflicts
**Solution**: Remove CNAME file if not using custom domain.

### Issue: 404 on GitHub Pages
**Solution**: Wait 5-10 minutes after enabling Pages. Clear browser cache.

### Issue: Slow Loading
**Solution**: 
- Enable CDN
- Check internet connection
- Reduce star count in script.js (line 92)

### Issue: Forms Not Submitting
**Solution**: Integrate with backend service (FormSpree, Netlify Forms, etc.)

## 📞 Support

Need help with deployment?

- **Email**: mukuljangra5@gmail.com
- **GitHub Issues**: Open an issue on the repository
- **Documentation**: Check platform-specific docs

## 🎉 Success!

Once deployed, share your portfolio:
- Add to LinkedIn profile
- Share on Twitter/X
- Update GitHub profile
- Add to resume

---

**Happy Deploying! 🚀**

Made with ❤️ by [Mahipal Jangra](https://github.com/mukul975)