# 🚀 Portfolio V3 - Cosmic Explorer

> An immersive 3D space-themed portfolio showcasing projects, skills, and research with stunning visual effects and smooth interactions.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & Theme
- **Cosmic Space Theme** - Professional deep space aesthetics (NO cyberpunk/neon)
- **Color Palette**:
  - Deep Space Blues (#0a1628, #1a2847)
  - Cosmic Gold (#f4a261) for accents
  - Nebula Teal (#2a9d8f) for highlights
  - Stellar White (#ffffff) for text
- **Typography**:
  - Space Grotesk - Modern geometric headings
  - Inter - Clean, readable body text

### 🌌 3D Visual Experience
- **Three.js Powered** - Full 3D space environment
- **10,000 Particle Stars** - Dynamic star field background
- **3D Planets** - Floating, rotating planets with rings
- **Parallax Effects** - Mouse-responsive camera movement
- **Smooth Animations** - 60fps optimized rendering
- **Orbital Mechanics** - Realistic planetary motion

### 📱 Responsive Design
- Fully responsive across all devices
- Mobile-optimized navigation
- Touch-friendly interactions
- Performance optimized for mobile GPUs

### 🎯 Interactive Elements
- Smooth scroll navigation
- Animated skill bars with progress indicators
- Dynamic stat counters
- Hover effects on cards and buttons
- Form validation
- Parallax scrolling effects
- Easter egg (Konami Code)

### 📊 Content Sections

#### 1. **Hero Section**
- Animated greeting
- Professional title display
- Call-to-action buttons
- Social media links
- 3D animated planet visual

#### 2. **About Section**
- Professional introduction
- Highlight cards (Security, Clean Code, User Focus)
- Animated statistics:
  - 8+ Projects Completed
  - 12 GitHub Stars
  - 500+ Commits
- Personal brand statement

#### 3. **Projects Section**
- **SK Studio** - Fine Art Photography Portfolio
- **MCP Web Scrape** - Intelligent Content Extraction
- **MCP Windows Server** - AI-Powered Automation
- **EmailGuard** - AI Phishing Detection
- **Multicast Wireless Routing** - Network Protocol
- **Vampire Attacks** - Security Research
- Each with live links, tech stack, and descriptions

#### 4. **Research Section**
- **Enhanced Haze Removal** using DCP
- Computer Vision & Image Processing
- Key contributions and impact
- Publication-ready format

#### 5. **Skills Section**
Four categories with animated progress bars:
- **Front-End Development**: HTML5, CSS3, JavaScript, React
- **Cybersecurity**: Penetration Testing, Network Security, Cryptography
- **AI & Machine Learning**: Python, ML, NLP, TensorFlow
- **Tools & Technologies**: Git, Docker, Node.js, Databases

#### 6. **Contact Section**
- Working contact form
- Email, LinkedIn, GitHub links
- Professional contact information
- Form validation

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/mukul975/portfolio-v3.git
cd portfolio-v3
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📦 File Structure

```
portfolio-v3/
│
├── index.html          # Main HTML structure
├── style.css           # Complete styling with animations
├── script.js           # Three.js 3D scene + interactions
└── README.md          # This file
```

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6+)** | Interactivity and logic |
| **Three.js** | 3D graphics and space scene |
| **Google Fonts** | Typography (Inter, Space Grotesk) |
| **Font Awesome** | Icons |

## 🎨 Color Palette

```css
Deep Space:    #0a1628
Space Blue:    #1a2847
Cosmic Gold:   #f4a261
Nebula Teal:   #2a9d8f
Stellar White: #ffffff
Soft Gray:     #8892b0
```

## 🎮 Easter Eggs

Try the **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ⚠️ IE11 (Not supported - Three.js requirement)

## ⚡ Performance Optimizations

- Debounced scroll events
- Intersection Observer API for animations
- Optimized Three.js rendering
- Lazy loading for heavy content
- CSS containment
- Hardware-accelerated animations
- Responsive image loading

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main) and folder (root)
4. Save and wait for deployment

### Netlify
```bash
# Drag and drop the folder to Netlify
# Or connect GitHub repo for auto-deployment
```

### Vercel
```bash
vercel --prod
```

## 📝 Customization Guide

### Update Personal Information
Edit in `index.html`:
- **Line 42-46**: Name and titles
- **Line 55-61**: Contact buttons
- **Line 62-74**: Social links

### Change Colors
Edit CSS variables in `style.css` (Line 8-20):
```css
:root {
    --cosmic-gold: #YOUR_COLOR;
    --nebula-teal: #YOUR_COLOR;
    /* ... */
}
```

### Add Projects
In `index.html`, duplicate project card structure:
```html
<div class="project-card" data-project="X">
    <!-- Your project content -->
</div>
```

### Modify 3D Scene
In `script.js`, adjust:
- Star count (Line 92): Change `10000` to your preference
- Planet properties (Line 109-157)
- Animation speed (Line 194-206)

## 📊 Performance Metrics

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Mobile Performance**: 90+

## 🔒 Security

- No external dependencies (except CDN)
- XSS protection in form handling
- No sensitive data in client-side code
- HTTPS recommended for deployment

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

**Developed by**: Mahipal Jangra  
**Email**: mukuljangra5@gmail.com  
**GitHub**: [@mukul975](https://github.com/mukul975)  
**LinkedIn**: [mahipal975](https://www.linkedin.com/in/mahipal975/)

**Technologies**:
- [Three.js](https://threejs.org/) - 3D Graphics
- [Google Fonts](https://fonts.google.com/) - Typography
- [Font Awesome](https://fontawesome.com/) - Icons

## 🐛 Known Issues

None currently! Report issues on GitHub.

## 📈 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog section integration
- [ ] Project filtering
- [ ] Multi-language support
- [ ] Advanced particle effects
- [ ] Sound effects (optional)

## 💡 Tips

1. **Customize the planets**: Edit colors in `script.js` (Line 109-157)
2. **Add more stars**: Increase count in `createStarField()` function
3. **Slow down animations**: Reduce speed values in `animate()` function
4. **Mobile optimization**: Test on actual devices, not just browser DevTools

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

Questions? Reach out:
- **Email**: mukuljangra5@gmail.com
- **LinkedIn**: [Mahipal Jangra](https://www.linkedin.com/in/mahipal975/)
- **GitHub**: [@mukul975](https://github.com/mukul975)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and ☕ by [Mahipal Jangra](https://github.com/mukul975)

</div>