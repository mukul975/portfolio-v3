// ===================================
// Cosmic Portfolio - JavaScript
// Theme: Space Explorer
// ===================================

// === Loading Screen ===
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        initPortfolio();
    }, 2000);
});

// === Main Initialization ===
function initPortfolio() {
    initSpaceScene();
    initNavigation();
    initScrollAnimations();
    initStatsCounter();
    initSkillBars();
    initForm();
    initSmoothScroll();
}

// === Three.js 3D Space Scene ===
let scene, camera, renderer, stars, starsGeometry, starsMaterial;
let planets = [];
let mouse = { x: 0, y: 0 };

function initSpaceScene() {
    const canvas = document.getElementById('space-canvas');
    
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create star field
    createStarField();
    
    // Create floating planets
    createPlanets();
    
    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    // Create point light
    const pointLight = new THREE.PointLight(0xf4a261, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Mouse movement for parallax
    document.addEventListener('mousemove', onMouseMove);
    
    // Window resize
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
}

function createStarField() {
    starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    
    // Create 10000 stars
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    // Star material
    starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
}

function createPlanets() {
    // Planet 1 - Cosmic Gold
    const planet1Geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const planet1Material = new THREE.MeshPhongMaterial({
        color: 0xf4a261,
        emissive: 0xf4a261,
        emissiveIntensity: 0.3,
        shininess: 30
    });
    const planet1 = new THREE.Mesh(planet1Geometry, planet1Material);
    planet1.position.set(-8, 3, -5);
    planets.push(planet1);
    scene.add(planet1);
    
    // Planet 2 - Nebula Teal
    const planet2Geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const planet2Material = new THREE.MeshPhongMaterial({
        color: 0x2a9d8f,
        emissive: 0x2a9d8f,
        emissiveIntensity: 0.3,
        shininess: 30
    });
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
    planet2.position.set(8, -2, -8);
    planets.push(planet2);
    scene.add(planet2);
    
    // Planet 3 - Small asteroid
    const planet3Geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const planet3Material = new THREE.MeshPhongMaterial({
        color: 0x8892b0,
        emissive: 0x8892b0,
        emissiveIntensity: 0.2
    });
    const planet3 = new THREE.Mesh(planet3Geometry, planet3Material);
    planet3.position.set(6, 4, -10);
    planets.push(planet3);
    scene.add(planet3);
    
    // Add rings to planets
    planets.forEach((planet, index) => {
        if (index < 2) {
            const ringGeometry = new THREE.RingGeometry(
                planet.geometry.parameters.radius * 1.5,
                planet.geometry.parameters.radius * 2,
                64
            );
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: index === 0 ? 0xf4a261 : 0x2a9d8f,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.3
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            planet.add(ring);
        }
    });
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate stars slowly
    if (stars) {
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.0001;
    }
    
    // Rotate planets
    planets.forEach((planet, index) => {
        planet.rotation.y += 0.001 + (index * 0.0005);
        
        // Orbital motion
        const time = Date.now() * 0.0001;
        planet.position.y += Math.sin(time + index) * 0.002;
    });
    
    // Parallax effect
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

// === Navigation ===
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// === Smooth Scroll ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === Scroll Animations ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger stat counter animation
                if (entry.target.classList.contains('about-section')) {
                    animateStats();
                }
                
                // Trigger skill bar animation
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual elements
    document.querySelectorAll('.project-card, .skill-category, .research-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, Math.random() * 200);
                }
            });
        }, observerOptions);
        
        elementObserver.observe(el);
    });
}

// === Stats Counter Animation ===
let statsAnimated = false;

function initStatsCounter() {
    // Initialize but don't animate yet
}

function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// === Skill Bars Animation ===
let skillsAnimated = false;

function initSkillBars() {
    // Initialize but don't animate yet
}

function animateSkillBars() {
    if (skillsAnimated) return;
    skillsAnimated = true;
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, index * 100);
    });
}

// === Contact Form ===
function initForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // In production, you would send this data to a backend server
        console.log('Form submitted:', formData);
    });
}

// === Notification System ===
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: ${type === 'success' ? '#2a9d8f' : '#e76f51'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === Project Card Interactions ===
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// === Parallax Effect for Sections ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .astronaut-container');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// === Cursor Trail Effect (Optional Enhancement) ===
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// === Easter Egg: Konami Code ===
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    showNotification('🚀 Congratulations! You found the secret!', 'success');
    
    // Add special visual effect
    document.body.style.animation = 'rainbow 2s linear';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// Rainbow animation for easter egg
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// === Performance Optimization ===
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll event handling
}, 10));

// === Console Message ===
console.log('%c🚀 Welcome to Mahipal\'s Portfolio!', 'color: #f4a261; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Three.js, love, and lots of coffee ☕', 'color: #2a9d8f; font-size: 14px;');
console.log('%cLooking for easter eggs? Try the Konami Code! 🎮', 'color: #8892b0; font-size: 12px;');

// === Accessibility Enhancements ===
// Add focus styles for keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea');
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid #f4a261';
            el.style.outlineOffset = '4px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
    });
});

// === Print Styles ===
window.addEventListener('beforeprint', () => {
    document.getElementById('space-canvas').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    document.getElementById('space-canvas').style.display = 'block';
});

// === Initialize on page load ===
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}