document.addEventListener('DOMContentLoaded', function() {
    // عناصر القائمة المنزلقة للجوّال
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // تأثير التمرير السلس للروابط
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تأثير التمرير السلس للأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // إظهار/إخفاء زر العودة للأعلى
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // العودة إلى الأعلى عند النقر على الزر
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // تأثيرات الظهور عند التمرير
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // تحريك أشرطة المهارات عند التمرير
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillsObserver.observe(bar);
    });
    
    // تأثيرات خاصة للشريط العلوي عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // إرسال نموذج التواصل
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
            alert('شكراً لك على رسالتك! سأعود إليك في أقرب وقت ممكن.');
            this.reset();
        });
    }
    
    // تأثيرات المؤشر (النسخة المخففة)
    document.addEventListener('mousemove', function(e) {
        let x = e.clientX;
        let y = e.clientY;
        
        let glow = document.getElementById('cursor-glow');
        if (!glow) {
            glow = document.createElement('div');
            glow.id = 'cursor-glow';
            document.body.appendChild(glow);
            
            // تصميم تأثير المؤشر الخفيف
            glow.style.position = 'fixed';
            glow.style.pointerEvents = 'none';
            glow.style.width = '80px';
            glow.style.height = '80px';
            glow.style.borderRadius = '50%';
            glow.style.background = 'rgba(255, 255, 255, 0.05)';
            glow.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.1)';
            glow.style.transition = 'transform 0.15s ease-out, opacity 0.2s ease-out';
            glow.style.zIndex = '9999';
            glow.style.opacity = '0';
        }
        
        // إظهار المؤشر عند الحركة
        glow.style.opacity = '1';
        glow.style.left = (x - 40) + 'px';
        glow.style.top = (y - 40) + 'px';
        
        // إخفاء المؤشر عند التوقف
        clearTimeout(window.cursorTimeout);
        window.cursorTimeout = setTimeout(() => {
            glow.style.opacity = '0';
        }, 1000);
    });
    
    // إخفاء المؤشر عند مغادرة الصفحة
    document.addEventListener('mouseleave', function() {
        let glow = document.getElementById('cursor-glow');
        if (glow) {
            glow.style.opacity = '0';
        }
    });
    
    // إظهار المؤشر عند العودة إلى الصفحة
    document.addEventListener('mouseenter', function() {
        let glow = document.getElementById('cursor-glow');
        if (glow) {
            glow.style.opacity = '1';
        }
    });
});