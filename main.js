// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.nav-toggle');
    menu.classList.toggle('open');
    toggle.classList.toggle('active');
}

// Hide nav on scroll down, show on scroll up
let lastScroll = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in to case cards, service items, etc.
    const fadeElements = document.querySelectorAll(
        '.case-card, .service, .case-study, .timeline-item, .tool-group, .contact-note'
    );
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
