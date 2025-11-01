// Main application logic
let currentHeroSlide = 0;
let heroInterval;
const quizManager = new QuizManager();

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initHeroSlider();
    renderDestinations();
    renderQuiz();
    initContactForm();
    initModal();
    initScrollAnimations();
    initCounters();
});

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemDark);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Navigation
function initNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden', !isOpen);
        closeIcon.classList.toggle('hidden', isOpen);
    });
    
    // Smooth scroll and active state
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
    
    // Update active state on scroll
    window.addEventListener('scroll', () => {
        const sections = ['home', 'destinations', 'quiz', 'about', 'contact'];
        const scrollPos = window.scrollY + 120;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const { offsetTop, offsetHeight } = section;
                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.dataset.section === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });
}

// Hero Slider
function initHeroSlider() {
    const slidesContainer = document.getElementById('hero-slides');
    const indicatorsContainer = document.getElementById('hero-indicators');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const tagline = document.getElementById('hero-tagline');
    const place = document.getElementById('hero-place');
    
    // Render slides
    HERO_SLIDES.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `absolute inset-0 transition-all duration-[1500ms] ease-out ${
            index === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`;
        slideDiv.innerHTML = `
            <img src="${slide.img}" alt="${slide.place}" class="w-full h-full object-cover" loading="${index === 0 ? 'eager' : 'lazy'}">
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        `;
        slidesContainer.appendChild(slideDiv);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `group relative transition-all duration-300 ${
            index === 0 ? 'w-12 h-3' : 'w-3 h-3 hover:w-6'
        }`;
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}: ${slide.place}`);
        indicator.innerHTML = `
            <div class="w-full h-full rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-white shadow-glow' : 'bg-white/40 group-hover:bg-white/60'
            }"></div>
        `;
        indicator.addEventListener('click', () => changeSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Auto-play
    startHeroAutoPlay();
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        const newIndex = currentHeroSlide === 0 ? HERO_SLIDES.length - 1 : currentHeroSlide - 1;
        changeSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = currentHeroSlide === HERO_SLIDES.length - 1 ? 0 : currentHeroSlide + 1;
        changeSlide(newIndex);
    });
}

function changeSlide(index) {
    if (index === currentHeroSlide) return;
    
    const slides = document.querySelectorAll('#hero-slides > div');
    const indicators = document.querySelectorAll('#hero-indicators button');
    const tagline = document.getElementById('hero-tagline');
    const place = document.getElementById('hero-place');
    
    // Update slides
    slides[currentHeroSlide].classList.remove('opacity-100', 'scale-100');
    slides[currentHeroSlide].classList.add('opacity-0', 'scale-105');
    slides[index].classList.remove('opacity-0', 'scale-105');
    slides[index].classList.add('opacity-100', 'scale-100');
    
    // Update indicators
    indicators[currentHeroSlide].className = 'group relative transition-all duration-300 w-3 h-3 hover:w-6';
    indicators[currentHeroSlide].querySelector('div').className = 'w-full h-full rounded-full transition-all duration-300 bg-white/40 group-hover:bg-white/60';
    indicators[index].className = 'group relative transition-all duration-300 w-12 h-3';
    indicators[index].querySelector('div').className = 'w-full h-full rounded-full transition-all duration-300 bg-white shadow-glow';
    
    // Update text with animation
    tagline.style.opacity = '0';
    place.style.opacity = '0';
    
    setTimeout(() => {
        tagline.textContent = HERO_SLIDES[index].tagline;
        place.querySelector('span').textContent = HERO_SLIDES[index].place;
        tagline.style.opacity = '1';
        place.style.opacity = '1';
    }, 300);
    
    currentHeroSlide = index;
    
    // Reset auto-play
    clearInterval(heroInterval);
    startHeroAutoPlay();
}

function startHeroAutoPlay() {
    heroInterval = setInterval(() => {
        const nextIndex = currentHeroSlide === HERO_SLIDES.length - 1 ? 0 : currentHeroSlide + 1;
        changeSlide(nextIndex);
    }, 4500);
}

// Destinations
function renderDestinations() {
    const grid = document.getElementById('destinations-grid');
    
    DESTINATIONS.forEach((destination, index) => {
        const card = document.createElement('article');
        card.className = 'destination-card glass-card rounded-2xl overflow-hidden opacity-0 transform translate-y-4 transition-all duration-700 card-3d-lift group';
        card.dataset.tags = destination.tags.join(',').toLowerCase();
        
        card.innerHTML = `
            <div class="relative h-56 overflow-hidden">
                <img src="${destination.image}" alt="${destination.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="badge absolute top-3 right-3 bg-saffron/90 text-white border-0 backdrop-blur-sm text-xs">
                    ${destination.duration || '2-3 days'}
                </span>
                <span class="badge absolute bottom-3 left-3 bg-black/70 text-white border-0 backdrop-blur-sm">
                    📍 ${destination.location}
                </span>
            </div>
            
            <div class="p-5">
                <div class="flex items-start justify-between mb-2">
                    <h3 class="font-semibold text-lg flex-1">${destination.name}</h3>
                    ${destination.budget ? `<span class="text-xs text-muted-foreground ml-2 whitespace-nowrap">From ${destination.budget.split('-')[0]}</span>` : ''}
                </div>
                <p class="text-muted-foreground text-sm mb-3 line-clamp-2">
                    ${destination.description}
                </p>
                
                ${destination.didYouKnow ? `
                    <div class="mb-3 p-2 bg-indigo/5 rounded-lg border border-indigo/10">
                        <p class="text-xs text-indigo font-medium">💡 ${destination.didYouKnow.substring(0, 80)}...</p>
                    </div>
                ` : ''}
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${destination.tags.slice(0, 3).map(tag => `
                        <span class="badge badge-secondary bg-saffron/10 text-saffron border-saffron/20 text-xs">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex gap-2">
                    <button onclick="openDestinationModal('${destination.id}')" class="flex-1 px-4 py-2 bg-gradient-hero text-white rounded-lg hover:shadow-glow transition-all text-sm font-medium button-hover">
                        Explore Now
                    </button>
                    <a href="/destinations/${destination.id}.html" class="px-4 py-2 border border-indigo/30 hover:bg-indigo/5 rounded-lg transition-all text-sm font-medium">
                        Details
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Animate on scroll
        setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(card);
        }, index * 100);
    });
}

// Filter destinations
function filterDestinations(category) {
    const cards = document.querySelectorAll('.destination-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-indigo', 'text-white', 'border-indigo');
        if (btn.dataset.filter === category) {
            btn.classList.add('active', 'bg-indigo', 'text-white', 'border-indigo');
        }
    });
    
    // Filter cards
    cards.forEach(card => {
        const tags = card.dataset.tags.toLowerCase();
        if (category === 'all' || tags.includes(category)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('animate-fade-in-up');
            }, 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal
function initModal() {
    const modal = document.getElementById('destination-modal');
    const closeBtn = document.getElementById('modal-close');
    
    closeBtn.addEventListener('click', closeDestinationModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDestinationModal();
        }
    });
}

function openDestinationModal(destinationId) {
    const destination = DESTINATIONS.find(d => d.id === destinationId);
    if (!destination) return;
    
    const modal = document.getElementById('destination-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = destination.name;
    
    // Create gallery HTML
    const galleryHTML = destination.gallery ? `
        <div class="grid grid-cols-2 gap-2 mb-4">
            ${destination.gallery.slice(0, 4).map((img, idx) => `
                <img src="${img}" alt="${destination.name} ${idx + 1}" class="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer">
            `).join('')}
        </div>
    ` : `
        <img src="${destination.image}" alt="${destination.name}" class="w-full h-80 object-cover rounded-xl mb-4">
    `;
    
    content.innerHTML = `
        <div class="relative">
            ${galleryHTML}
            <span class="badge bg-black/60 text-white border-0 mb-2 inline-block">
                📍 ${destination.location}
            </span>
        </div>
        
        <div class="space-y-6">
            <div>
                <p class="text-muted-foreground mb-4">${destination.description}</p>
                
                ${destination.didYouKnow ? `
                    <div class="p-4 bg-indigo/5 rounded-lg border border-indigo/10 mb-4">
                        <h4 class="font-semibold mb-2 text-indigo">💡 Did You Know?</h4>
                        <p class="text-sm text-muted-foreground">${destination.didYouKnow}</p>
                    </div>
                ` : ''}
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${destination.tags.map(tag => `
                        <span class="badge badge-secondary bg-saffron/10 text-saffron border-saffron/20">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-lg bg-gradient-to-br from-indigo/5 to-transparent border border-indigo/10">
                    <h4 class="font-semibold mb-2">🗓️ Best Time</h4>
                    <p class="text-sm text-muted-foreground">${destination.bestTime}</p>
                </div>
                <div class="p-4 rounded-lg bg-gradient-to-br from-saffron/5 to-transparent border border-saffron/10">
                    <h4 class="font-semibold mb-2">⏱️ Duration</h4>
                    <p class="text-sm text-muted-foreground">${destination.duration || '2-3 days'}</p>
                </div>
                <div class="p-4 rounded-lg bg-gradient-to-br from-emerald/5 to-transparent border border-emerald/10 col-span-2">
                    <h4 class="font-semibold mb-2">✨ Highlights</h4>
                    <p class="text-sm text-muted-foreground">${destination.highlights}</p>
                </div>
                ${destination.budget ? `
                    <div class="p-4 rounded-lg bg-gradient-to-br from-gold/5 to-transparent border border-gold/10 col-span-2">
                        <h4 class="font-semibold mb-2">💰 Budget</h4>
                        <p class="text-sm text-muted-foreground">${destination.budget}</p>
                    </div>
                ` : ''}
            </div>
            
            <div class="flex gap-3">
                <a href="/destinations/${destination.id}.html" class="flex-1 px-6 py-3 bg-gradient-hero text-white rounded-lg hover:shadow-glow transition-all text-center font-medium button-hover">
                    View Full Details
                </a>
                <button onclick="copyDestinationLink()" class="px-6 py-3 border border-indigo/30 hover:bg-indigo/5 rounded-lg transition-all" title="Copy link">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

function closeDestinationModal() {
    const modal = document.getElementById('destination-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
}

function copyDestinationLink() {
    const url = `${window.location.origin}${window.location.pathname}#destinations`;
    navigator.clipboard.writeText(url).then(() => {
        showToast('✅', 'Link copied!', 'Destination link copied to clipboard');
    }).catch(() => {
        showToast('❌', 'Failed to copy', 'Could not copy link to clipboard');
    });
}

// Quiz
function renderQuiz() {
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-container');
    const question = quizManager.getCurrentQuestion();
    const progress = quizManager.getProgress();
    const selectedAnswer = quizManager.getAnswer(question.id);
    
    container.innerHTML = `
        <div class="flex items-center gap-3 p-6 border-b border-border">
            <strong class="font-cinzel">Travel Vibes Quiz</strong>
            <span class="text-muted-foreground">• 4 questions</span>
        </div>
        
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        
        <div class="p-6">
            <h4 class="text-xl font-semibold mb-6">${question.title}</h4>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${question.options.map((option, index) => `
                    <button 
                        onclick="selectQuizOption('${question.id}', ${index})"
                        class="quiz-option p-4 text-left border rounded-xl transition-all hover:shadow-soft ${
                            selectedAnswer === index ? 'selected' : 'border-border'
                        }"
                    >
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
        
        <div class="flex justify-between items-center p-6 border-t border-border">
            <button 
                onclick="quizPrev()" 
                ${quizManager.currentQuestion === 0 ? 'disabled' : ''}
                class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </button>
            
            <button 
                onclick="quizNext()"
                class="px-6 py-2 bg-gradient-hero text-white rounded-lg hover:shadow-glow transition-all flex items-center gap-2 font-medium"
            >
                ${quizManager.currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'See Result' : 'Next'}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    `;
}

function selectQuizOption(questionId, optionIndex) {
    quizManager.selectAnswer(questionId, optionIndex);
    renderQuizQuestion();
}

function quizNext() {
    if (!quizManager.canGoNext()) {
        showToast('🙂', 'Please choose an option', 'Select one option before proceeding');
        return;
    }
    
    const isFinished = quizManager.goNext();
    
    if (isFinished) {
        const result = quizManager.calculateResult();
        renderQuizResult(result);
    } else {
        renderQuizQuestion();
    }
}

function quizPrev() {
    quizManager.goPrev();
    renderQuizQuestion();
}

function renderQuizResult(result) {
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill" style="width: 100%"></div>
        </div>
        
        <div class="p-8">
            <div class="text-center mb-8">
                <h3 class="font-cinzel text-2xl font-bold mb-4">🎉 Perfect Match Found!</h3>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-center">
                <img src="${result.image}" alt="${result.name}" class="w-full md:w-64 h-48 object-cover rounded-xl">
                
                <div class="flex-1 text-center md:text-left">
                    <h4 class="font-bold text-xl mb-2">${result.name}</h4>
                    <p class="text-muted-foreground mb-3">
                        ${result.location} • Best Time: ${result.bestTime}
                    </p>
                    <p class="mb-4">${result.description}</p>
                    
                    <div class="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        ${result.tags.slice(0, 4).map(tag => `
                            <span class="badge badge-secondary bg-saffron/10 text-saffron">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="openDestinationModal('${result.id}')" class="px-6 py-3 bg-gradient-hero text-white rounded-lg hover:shadow-glow transition-all font-medium">
                            Explore Now
                        </button>
                        <a href="destinations/${result.id}.html" class="px-6 py-3 border border-indigo/30 hover:bg-indigo/5 rounded-lg transition-all text-center font-medium">
                            View Full Details
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
                <button onclick="restartQuiz()" class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2 justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Restart Quiz
                </button>
                <button onclick="shareQuizResult()" class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2 justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Result
                </button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    quizManager.reset();
    renderQuizQuestion();
}

async function shareQuizResult() {
    const result = quizManager.result;
    if (!result) return;

    const pageLink = `${window.location.origin}${window.location.pathname}#quiz`;
    const text = `My Mystic India match is: ${result.name} — ${result.location}. Best Time: ${result.bestTime}\n\nDiscover yours: ${pageLink}`;
    const imageUrl = result.image;

    // Create share buttons container
    const shareContainer = document.createElement('div');
    shareContainer.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm';
    shareContainer.innerHTML = `
        <div class="glass-card border-border/50 rounded-2xl max-w-sm w-full p-6">
            <div class="text-center mb-6">
                <h3 class="font-bold text-lg mb-2">Share Your Result</h3>
                <p class="text-sm text-muted-foreground">Choose how you'd like to share</p>
            </div>
            
            <div class="grid gap-4">
                <button id="shareWhatsApp" class="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#22c35e] transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Share on WhatsApp
                </button>
                
                <button id="shareNative" class="flex items-center gap-3 px-4 py-3 bg-indigo text-white rounded-lg hover:opacity-90 transition-opacity">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share to Other Apps
                </button>
                
                <button id="copyLink" class="flex items-center gap-3 px-4 py-3 border border-indigo/30 hover:bg-indigo/5 rounded-lg transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Link
                </button>
                
                <button id="closeShare" class="mt-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cancel
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(shareContainer);

    // Handle share button clicks
    document.getElementById('shareWhatsApp').addEventListener('click', async () => {
        const waText = encodeURIComponent(`${text}\n\nCheck out my destination: ${imageUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${waText}`, '_blank');
        document.body.removeChild(shareContainer);
        showToast('✅', 'WhatsApp opened', 'You can now share your result');
    });

    document.getElementById('shareNative').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `My Mystic India match: ${result.name}`,
                    text,
                    url: pageLink
                });
                showToast('✅', 'Shared!', 'Result shared successfully');
            } catch (err) {
                console.warn('Share failed:', err);
                showToast('❌', 'Share failed', 'Could not share result');
            }
        } else {
            showToast('ℹ️', 'Not supported', 'Native sharing is not supported on your device');
        }
        document.body.removeChild(shareContainer);
    });

    document.getElementById('copyLink').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(`${text}\n\n${imageUrl}`);
            showToast('✅', 'Copied!', 'Result copied to clipboard');
        } catch (err) {
            showToast('❌', 'Copy failed', 'Could not copy to clipboard');
        }
        document.body.removeChild(shareContainer);
    });

    document.getElementById('closeShare').addEventListener('click', () => {
        document.body.removeChild(shareContainer);
    });

    // Close on backdrop click
    shareContainer.addEventListener('click', (e) => {
        if (e.target === shareContainer) {
            document.body.removeChild(shareContainer);
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showToast('✅', "Thanks! We'll get back to you soon.", "Your message has been received and we'll respond within 24 hours.");
            form.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Toast Notification
function showToast(icon, title, description) {
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastDescription = document.getElementById('toast-description');
    
    toastIcon.textContent = icon;
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}