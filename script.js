// Initialize Lucide Icons & Logic once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
  
    // 2. Set Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // 3. Navbar scroll styling
    const navbar = document.getElementById('navbar');
    const htmlElement = document.documentElement;

    function handleScroll() {
      if (!navbar) return;
      
      if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-md', 'border-b-2', 'bg-slate-900/90', 'border-slate-800');
      } else {
    navbar.classList.remove('backdrop-blur-md', 'border-b-2', 'bg-slate-900/90', 'border-slate-800', 'bg-white/90', 'border-slate-200');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init check
  
    // 4. Assign utility classes for tags (Cleaner HTML)
    document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.className = 'skill-tag px-3 py-1 text-sm font-mono border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800';
    });
    document.querySelectorAll('.skill-tag-highlight').forEach(tag => {
      tag.className = 'skill-tag-highlight px-3 py-1 text-sm font-mono border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-900/20 dark:text-indigo-300';
    });
    document.querySelectorAll('.tech-tag').forEach(tag => {
      tag.className = 'tech-tag text-[10px] uppercase font-bold tracking-wider opacity-60';
    });


    // 5. Theme toggle removed (dark-only)


    // 6. Typing Effect Logic
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const phrases = [
            "Computer Science Engineer",
            "Machine Learning Enthusiast",
            "Flutter Developer",
            "Python Developer",
            "Linux Power-User",
            "Data Science Student"
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typeWriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typeWriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before new phrase
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }


    // 7. Interactive Canvas Logic
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // --- CONFIGURATION ---
        const particleSize = 4;       // Changed from 2 to 3 (Bigger dots)
        const particleGap = 40;       // Distance between dots
        const particleBaseAlpha = 0.1; // Transparency (Change this if you want them brighter/dimmer)
        // ---------------------

        // Resize Canvas
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }
        
        function initParticles() {
            particles = [];
            for (let x = 0; x < width; x += particleGap) {
                for (let y = 0; y < height; y += particleGap) {
                    particles.push({
                        x, y,
                        baseAlpha: particleBaseAlpha,
                        alpha: particleBaseAlpha,
                        targetAlpha: particleBaseAlpha
                    });
                }
            }
        }

        // Mouse Tracker
        let mouse = { x: -1000, y: -1000 };
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Dark-only color
            const color = '129, 140, 248'; // Indigo-400

            particles.forEach(p => {
                // Calculate distance to mouse
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Interaction Radius
                if (dist < 150) {
                    p.targetAlpha = 0.8 - (dist / 150) * 0.8;
                } else {
                    p.targetAlpha = p.baseAlpha;
                }

                // Smooth transition
                p.alpha += (p.targetAlpha - p.alpha) * 0.1;

                if (p.alpha > 0.01) {
                    ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
                    // Use the size variable here
                    ctx.fillRect(p.x, p.y, particleSize, particleSize);
                }
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    }
});