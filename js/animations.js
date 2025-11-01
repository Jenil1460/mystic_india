// Animation manager for Mystic India website - Enhanced
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update scroll progress with smooth animation
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height);
                progressBar.style.transform = `scaleX(${scrolled})`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Enhanced scroll animations with stagger
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Parallax effect on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        
        document.querySelectorAll('.parallax-slow').forEach(el => {
            const currentTransform = el.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)px\)/)?.[1] || 0);
            el.style.transform = `translateY(${currentY - delta * 0.3}px)`;
        });
        
        document.querySelectorAll('.parallax-medium').forEach(el => {
            const currentTransform = el.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)px\)/)?.[1] || 0);
            el.style.transform = `translateY(${currentY - delta * 0.5}px)`;
        });
        
        document.querySelectorAll('.parallax-fast').forEach(el => {
            const currentTransform = el.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)px\)/)?.[1] || 0);
            el.style.transform = `translateY(${currentY - delta * 0.7}px)`;
        });
        
        lastScrollY = scrollY;
    });

    // Add floating animation to decorative elements
    document.querySelectorAll('.hero-section .floating-elements > div').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
        el.classList.add('float-gentle');
    });

    // Smooth reveal for sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-reveal');
        observer.observe(section);
    });

    // Add 3D card effect to destination cards
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.card-3d-lift').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
            }
        });
    });

    // Reset card transform on mouse leave
    document.querySelectorAll('.card-3d-lift').forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add shimmer effect to loading states
    document.querySelectorAll('.shimmer-loading').forEach(el => {
        const shimmer = document.createElement('div');
        shimmer.className = 'absolute inset-0 shimmer-effect pointer-events-none';
        el.style.position = 'relative';
        el.appendChild(shimmer);
    });

    // Lazy load images with fade-in
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in-up-enhanced');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.button-hover').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple-effect';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Animate statistics on scroll
    const stats = document.querySelectorAll('[data-count]');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in');
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    // Add gradient animation to hero section
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.classList.add('gradient-animated');
    }

    // Typewriter effect for taglines (optional)
    document.querySelectorAll('.typewriter').forEach(el => {
        el.style.width = '0';
        setTimeout(() => {
            el.style.width = '100%';
        }, 500);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);