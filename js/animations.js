// Animation manager for Mystic India website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update scroll progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
    });

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Add animation classes to elements
    const destinations = document.querySelectorAll('#destinations-grid > div');
    destinations.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add hover animations to destination cards
    destinations.forEach(card => {
        card.classList.add('card-hover-animation', 'card-stack');
    });

    // Add pattern animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const patternOverlay = document.createElement('div');
        patternOverlay.className = 'pattern-animation absolute inset-0 opacity-5 pointer-events-none';
        section.style.position = 'relative';
        section.appendChild(patternOverlay);
    });

    // Text reveal animations for headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.classList.add('text-reveal');
    });

    // Add parallax effect to floating elements
    document.querySelectorAll('.floating-elements > div').forEach(el => {
        el.classList.add('parallax-element');
    });

    // Add button hover effects
    document.querySelectorAll('button, .nav-link').forEach(button => {
        button.classList.add('button-hover');
    });

    // Loading animation for form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending <span class="loading-dots"></span>';
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = 'Message Sent!';
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Message';
                }, 2000);
            }, 1500);
        });
    }

    // Gallery hover effects for images
    document.querySelectorAll('img').forEach(img => {
        if (!img.closest('.hero-image')) { // Exclude hero images
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-item';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            wrapper.appendChild(overlay);
        }
    });
});