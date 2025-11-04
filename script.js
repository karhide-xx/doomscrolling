// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const hero = document.querySelector('.hero');
const sections = document.querySelectorAll('section[id]');
const playButtons = document.querySelectorAll('.play-btn');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - headerHeight - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.glitch-effect');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.release-card, .news-card, .section-title');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Play Button Interactions
playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // Show mock audio player or link to streaming service
        showAudioPlayer(button);
    });
});

// Mock Audio Player Function
function showAudioPlayer(button) {
    const releaseCard = button.closest('.release-card');
    const releaseTitle = releaseCard.querySelector('.release-title').textContent;
    
    // Create a simple notification
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--dark-gray);
            border: 2px solid var(--crimson);
            padding: 2rem;
            border-radius: 8px;
            z-index: 9999;
            text-align: center;
            min-width: 300px;
        ">
            <h3 style="color: var(--crimson); margin-bottom: 1rem;">Now Playing</h3>
            <p style="color: var(--bone-white); margin-bottom: 1rem;">${releaseTitle}</p>
            <div style="
                width: 100%;
                height: 4px;
                background: var(--medium-gray);
                margin: 1rem 0;
                position: relative;
            ">
                <div class="progress-bar" style="
                    width: 0%;
                    height: 100%;
                    background: var(--crimson);
                    transition: width 3s linear;
                "></div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: var(--crimson);
                color: var(--bone-white);
                border: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                text-transform: uppercase;
                font-weight: bold;
            ">Close</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate progress bar
    setTimeout(() => {
        const progressBar = notification.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = '100%';
        }
    }, 100);
    
    // Auto-close after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

// Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Dynamic Text Animation for Hero
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const messages = [
        'Crushing the Algorithm of Despair',
        'Digital Decay in Endless Loops',
        'Metal for the Disconnected Generation',
        'Embrace the Void of Social Media'
    ];
    
    let messageIndex = 0;
    
    function rotateMessage() {
        heroSubtitle.style.opacity = '0';
        
        setTimeout(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            heroSubtitle.textContent = messages[messageIndex];
            heroSubtitle.style.opacity = '1';
        }, 500);
    }
    
    // Change message every 4 seconds
    setInterval(rotateMessage, 4000);
});

// News Card Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderLeftWidth = '8px';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderLeftWidth = '4px';
        });
    });
});

// Release Card Glitch Effect on Hover
document.addEventListener('DOMContentLoaded', () => {
    const releaseCards = document.querySelectorAll('.release-card');
    
    releaseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const albumCover = card.querySelector('.album-cover');
            if (albumCover) {
                albumCover.style.animation = 'glitch 0.5s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const albumCover = card.querySelector('.album-cover');
            if (albumCover) {
                albumCover.style.animation = '';
            }
        });
    });
});

// Social Links Hover Animation
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 10px var(--crimson)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });
});

// Random Glitch Effects
function randomGlitch() {
    const glitchElements = document.querySelectorAll('.logo, .hero-title');
    
    glitchElements.forEach(element => {
        if (Math.random() < 0.1) { // 10% chance
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = '';
            }, 100);
        }
    });
}

// Trigger random glitches every 5-10 seconds
setInterval(randomGlitch, Math.random() * 5000 + 5000);

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add subtle screen shake on certain interactions
function screenShake() {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Add shake keyframes to CSS dynamically
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
    20%, 40%, 60%, 80% { transform: translateX(2px); }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);

// Trigger screen shake on CTA button clicks
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            screenShake();
        });
    });
});