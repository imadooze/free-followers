document.addEventListener('DOMContentLoaded', function() {
    // تبديل القوائم - للهواتف
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // تبديل الأقسام
    const navLinksAll = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinksAll.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // إضافة النشاط للرابط الحالي
            this.classList.add('active');
            
            // إخفاء جميع الأقسام
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // إظهار القسم المطلوب
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // إغلاق القائمة على الأجهزة الصغيرة
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
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
    
    // تهيئة القسم الأول
    document.querySelector('.nav-link[data-section="home"]').click();
    
    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // التحقق من صحة البيانات
            if (!formData.name || !formData.email || !formData.message) {
                showAlert('error', 'الرجاء ملء جميع الحقول المطلوبة');
                return;
            }
            
            // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
            // مثال باستخدام Fetch API:
            /*
            fetch('your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                showAlert('success', 'تم إرسال رسالتك بنجاح!');
                contactForm.reset();
            })
            .catch((error) => {
                showAlert('error', 'حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة لاحقاً');
            });
            */
            
            // عرض رسالة نجاح (مؤقتة لأغراض العرض)
            showAlert('success', 'تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
            contactForm.reset();
        });
    }

    // إضافة تأثيرات للعناصر عند التحميل
    function loadAnimations() {
        // إعادة تعيين العناصر لإظهار التأثيرات
        const animateElements = document.querySelectorAll('.feature-card, .blog-card, .about-card, .animate__animated');
        
        animateElements.forEach(element => {
            element.classList.remove('show');
            element.style.opacity = '0';
            
            if (element.classList.contains('animate__fadeInLeft') || 
                element.classList.contains('animate__fadeInRight')) {
                element.style.transform = 'translateX(30px)';
            } else {
                element.style.transform = 'translateY(30px)';
            }
        });
        
        // تشغيل تأثيرات التمرير
        animateOnScroll();
    }

    // تأثيرات التمرير
    function animateOnScroll() {
        const animateElements = document.querySelectorAll('.feature-card, .blog-card, .about-card, .animate__animated');
        const triggerBottom = window.innerHeight / 5 * 4;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        });
    }

    // عرض رسائل التنبيه
    function showAlert(type, message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        document.body.appendChild(alertDiv);
        
        // إزالة التنبيه بعد 5 ثواني
        setTimeout(() => {
            alertDiv.classList.add('fade-out');
            setTimeout(() => {
                alertDiv.remove();
            }, 500);
        }, 5000);
    }

    // إضافة أنماط للتنبيهات ديناميكياً
    const alertStyles = document.createElement('style');
    alertStyles.textContent = `
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        .alert-success {
            background-color: #28a745;
        }
        .alert-error {
            background-color: #dc3545;
        }
        .fade-out {
            opacity: 0 !important;
        }
    `;
    document.head.appendChild(alertStyles);
});