document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .projects, .contact');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animate skill list items on scroll
    const skillItems = document.querySelectorAll('.skills li');
    skillItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
    });

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth scroll for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Add mousemove event listener to create glowing light effect around cursor
// document.addEventListener('mousemove', function(e) {
//     let x = e.clientX;
//     let y = e.clientY;

//     // Create or update a glowing circle element that follows the cursor
//     let glow = document.getElementById('cursor-glow');
//     if (!glow) {
//         glow = document.createElement('div');
//         glow.id = 'cursor-glow';
//         document.body.appendChild(glow);

//     // Style the glow element
//     glow.style.position = 'fixed';
//     glow.style.pointerEvents = 'none';
//     glow.style.width = '150px';
//     glow.style.height = '150px';
//     glow.style.borderRadius = '50%';
//     glow.style.background = 'rgba(255, 255, 255, 0.15)'; // أبيض خفيف
//     glow.style.boxShadow = '0 0 15px 10px rgba(255, 255, 255, 0.25)'; // ظل أبيض خفيف
//     glow.style.transition = 'transform 0.1s ease-out, top 0.1s ease-out, left 0.1s ease-out';
//     glow.style.zIndex = '9999';
//     }

//     // Position the glow centered on the cursor
//     glow.style.left = (x - 75) + 'px';
//     glow.style.top = (y - 75) + 'px';
//     glow.style.transform = 'translate3d(0, 0, 0)';
// });
