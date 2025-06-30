document.addEventListener('DOMContentLoaded', function() {
    // تبديل الصفحات
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // إضافة النشاط للرابط الحالي
            this.classList.add('active');
            
            // إخفاء جميع الصفحات
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // إظهار الصفحة المطلوبة
            const pageId = this.getAttribute('data-page') + '-page';
            document.getElementById(pageId).classList.add('active');
            
            // التمرير لأعلى الصفحة
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // تحميل التأثيرات للعناصر الجديدة
            setTimeout(loadAnimations, 100);
        });
    });
    
    // تأثيرات التمرير
    window.addEventListener('scroll', animateOnScroll);
    
    // تحميل التأثيرات عند البدء
    loadAnimations();
    
    // تهيئة الصفحة الأولى
    document.querySelector('.nav-links a[data-page="home"]').click();
});

function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card:not(.show), .blog-post:not(.show)');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

function loadAnimations() {
    // إعادة تعيين العناصر لإظهار التأثيرات
    const featureCards = document.querySelectorAll('.feature-card');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    featureCards.forEach(card => {
        card.classList.remove('show');
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });
    
    blogPosts.forEach(post => {
        post.classList.remove('show');
        post.style.opacity = '0';
        post.style.transform = 'translateY(30px)';
    });
    
    // تشغيل تأثيرات التمرير
    animateOnScroll();
}