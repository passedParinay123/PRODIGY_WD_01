document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    // Scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // Active link switching
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to section
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Corrected: Removed 'px'
                navMenu.classList.remove('active');
            }
        });
    });
});