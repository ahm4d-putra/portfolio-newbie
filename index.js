// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Social media submenu toggle
const socialToggle = document.getElementById('socialToggle');
const socialSubmenu = document.getElementById('socialSubmenu');

socialToggle.addEventListener('click', (e) => {
    e.preventDefault();
    socialSubmenu.classList.toggle('open');
    
    const arrow = socialToggle.querySelector('span:last-child');
    arrow.style.transform = socialSubmenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
});

// Menu navigation
const menuLinks = document.querySelectorAll('.menu-link[data-section]');
const contentSections = document.querySelectorAll('.content-section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all menu links
        menuLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(link.dataset.section);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Close sidebar on mobile after clicking
        if (window.innerWidth < 1024) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Animate progress bars on page load
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, index * 200);
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});