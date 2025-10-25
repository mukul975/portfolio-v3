# 🎨 Quick Customization Guide

This guide helps you quickly personalize your portfolio with your own information.

## 📝 Essential Customizations

### 1. Personal Information (index.html)

#### Update Name and Titles (Lines 42-54)
```html
<h1 class="hero-name">YOUR NAME HERE</h1>
<div class="hero-titles">
    <span class="title-item">Your Primary Title</span>
    <span class="title-separator">|</span>
    <span class="title-item">Your Secondary Title</span>
</div>
<p class="hero-description">
    Your personal tagline or brief introduction here...
</p>
```

#### Update Social Links (Lines 62-74)
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://www.linkedin.com/in/YOUR_PROFILE/" target="_blank">
<a href="mailto:YOUR_EMAIL@example.com">
```

### 2. About Section (Lines 103-130)

Update your bio and expertise:
```html
<p class="about-intro">
    Your introduction paragraph here...
</p>
<p class="about-description">
    More details about your background and skills...
</p>
```

### 3. Projects Section (Lines 142-280)

For each project, update:
- **Project Title**: `<h3 class="project-title">Project Name</h3>`
- **Category**: `<span class="project-category">Category</span>`
- **Description**: `<p class="project-description">...</p>`
- **Tech Stack**: `<span class="tech-tag">Technology</span>`
- **Links**: `<a href="YOUR_PROJECT_URL">`

**Adding New Project:**
Copy this template and paste before closing `</div>` of projects-grid:

```html
<div class="project-card" data-project="X">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="YOUR_LINK" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <div class="project-header">
            <h3 class="project-title">Your Project Name</h3>
            <span class="project-category">Category</span>
        </div>
        <p class="project-description">
            Your project description here...
        </p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
            <span class="tech-tag">Tech3</span>
        </div>
    </div>
</div>
```

### 4. Research Section (Lines 289-345)

Update your research:
```html
<h3 class="research-title">Your Research Title</h3>
<p class="research-type">Research Field</p>
<p class="research-description">
    Your research description...
</p>
```

**Adding More Research Papers:**
Duplicate the `<div class="research-card">` section.

### 5. Skills Section (Lines 357-520)

#### Update Skill Levels
Find skill-progress bars and update the `data-progress` value (0-100):
```html
<div class="skill-progress" data-progress="95"></div>
```

#### Add New Skill
Copy a skill-item block:
```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-YOUR-ICON"></i>
    </div>
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

**Find Icons**: Visit [Font Awesome](https://fontawesome.com/icons) for icon codes.

### 6. Contact Information (Lines 540-570)

Update contact details:
```html
<a href="mailto:YOUR_EMAIL@example.com">your.email@example.com</a>
<a href="https://www.linkedin.com/in/YOUR_PROFILE/" target="_blank">yourprofile</a>
<a href="https://github.com/YOUR_USERNAME" target="_blank">yourusername</a>
```

### 7. Statistics (Lines 118-142)

Update the numbers in `data-target` attribute:
```html
<h3 class="stat-number" data-target="YOUR_NUMBER">0</h3>
```

Examples:
- Projects: `data-target="15"`
- GitHub Stars: `data-target="50"`
- Commits: `data-target="1000"`

## 🎨 Styling Customizations (style.css)

### Change Color Scheme (Lines 8-20)

```css
:root {
    --cosmic-gold: #YOUR_COLOR;     /* Primary accent */
    --nebula-teal: #YOUR_COLOR;     /* Secondary accent */
    --space-blue: #YOUR_COLOR;      /* Background card color */
    --deep-space: #YOUR_COLOR;      /* Main background */
}
```

**Color Palette Suggestions:**

**Professional Blue:**
```css
--cosmic-gold: #4a90e2;
--nebula-teal: #50c9ce;
--space-blue: #1e3a5f;
```

**Warm Sunset:**
```css
--cosmic-gold: #ff6b6b;
--nebula-teal: #ffa07a;
--space-blue: #2d3561;
```

**Nature Green:**
```css
--cosmic-gold: #4ecdc4;
--nebula-teal: #95e1d3;
--space-blue: #1a3a3a;
```

### Change Fonts (Lines 14-15)

```css
--font-primary: 'YOUR_FONT', sans-serif;
--font-headings: 'YOUR_HEADING_FONT', sans-serif;
```

**Popular Font Combinations:**
1. **Modern**: Poppins + Montserrat
2. **Classic**: Georgia + Helvetica
3. **Tech**: Roboto Mono + Roboto
4. **Elegant**: Playfair Display + Source Sans Pro

Update in index.html (Line 9):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Adjust Spacing (Lines 21-22)

```css
--section-padding: 120px;    /* Space between sections */
--container-padding: 2rem;   /* Side padding */
```

## 🌌 3D Scene Customizations (script.js)

### Change Star Count (Line 92)
```javascript
for (let i = 0; i < 10000; i++) {  // Change number here
```

**Recommendations:**
- Low-end devices: 5000 stars
- Mid-range: 10000 stars
- High-end: 15000 stars

### Adjust Planet Colors (Lines 109-157)

```javascript
// Planet 1
const planet1Material = new THREE.MeshPhongMaterial({
    color: 0xf4a261,  // Change this hex color
    emissive: 0xf4a261,
    emissiveIntensity: 0.3,
});
```

### Modify Animation Speed (Lines 194-206)

```javascript
stars.rotation.y += 0.0002;  // Increase for faster rotation
planet.rotation.y += 0.001;   // Increase for faster spin
```

### Planet Sizes (Lines 109-157)

```javascript
const planet1Geometry = new THREE.SphereGeometry(
    0.8,  // Change radius here
    32,   // Segments (higher = smoother)
    32
);
```

## 📱 Responsive Adjustments

### Mobile Font Sizes (Line 728+)
```css
@media (max-width: 768px) {
    .hero-name {
        font-size: 2.5rem;  /* Adjust as needed */
    }
}
```

### Tablet Breakpoints
```css
@media (max-width: 1024px) {
    /* Add your custom styles */
}
```

## 🎯 Quick Tips

1. **Test Locally First**: Always test changes in a browser before deploying
2. **Keep Backups**: Save original files before making major changes
3. **Use Browser DevTools**: Press F12 to inspect and test changes live
4. **Validate HTML**: Use [W3C Validator](https://validator.w3.org/)
5. **Check Performance**: Use Lighthouse in Chrome DevTools

## 🔍 Finding Elements

### By Line Number
- Open file in VS Code
- Press `Ctrl+G` (Windows/Linux) or `Cmd+G` (Mac)
- Type line number

### By Search
- Press `Ctrl+F` (Windows/Linux) or `Cmd+F` (Mac)
- Search for text like "hero-name" or "project-title"

## ⚠️ Common Mistakes to Avoid

1. **Don't remove closing tags**: Every `<div>` needs a `</div>`
2. **Keep quotes consistent**: Use either `"` or `'`, not mixed
3. **Update all social links**: Don't leave example URLs
4. **Test mobile view**: Always check responsive design
5. **Validate colors**: Use proper hex codes (#RRGGBB)

## 📚 Resources

- **HTML Validation**: https://validator.w3.org/
- **Color Picker**: https://htmlcolorcodes.com/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/
- **Three.js Docs**: https://threejs.org/docs/

## 🆘 Need Help?

If you're stuck:
1. Check browser console (F12) for errors
2. Compare with original files
3. Search error messages online
4. Open an issue on GitHub
5. Email: mukuljangra5@gmail.com

## ✅ Customization Checklist

Before deploying, verify:
- [ ] All personal information updated
- [ ] Social media links correct
- [ ] Project links working
- [ ] Contact email updated
- [ ] Skills reflect your expertise
- [ ] Colors match your brand
- [ ] Tested on mobile
- [ ] No console errors
- [ ] All images loaded (if added)
- [ ] Forms validated

---

**Remember**: Start small! Change one thing at a time and test it before moving on.

Happy Customizing! 🎨

Made with ❤️ by [Mahipal Jangra](https://github.com/mukul975)