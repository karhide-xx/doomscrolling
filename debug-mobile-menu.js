// Test mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking mobile menu elements...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    
    if (hamburger) {
        console.log('Hamburger found, adding click listener...');
        hamburger.addEventListener('click', (e) => {
            console.log('Hamburger clicked!');
            e.preventDefault();
            e.stopPropagation();
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            console.log('Hamburger classes:', hamburger.classList.toString());
            console.log('Nav menu classes:', navMenu.classList.toString());
        });
    } else {
        console.error('Hamburger element not found!');
    }
});