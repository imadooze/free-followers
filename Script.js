// تنفيذ القائمة المتنقلة
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// تنفيذ التمرير السلس عند النقر على روابط القائمة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// إضافة تأثيرات عند التمرير
function handleScroll() {
    const elements = document.querySelectorAll(".feature-card, .screenshot-item");
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }
    });
}

// تهيئة العناصر لإظهار تأثيرات التمرير
document.querySelectorAll(".feature-card, .screenshot-item").forEach(element => {
    element.style.opacity = 0;
    element.style.transform = "translateY(50px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

// إضافة مستمع لحدث التمرير
window.addEventListener("scroll", handleScroll);

// تشغيل مرة أولى عند تحميل الصفحة
window.addEventListener("load", handleScroll);

// إضافة تأثيرات للزر عند التمرير إليه
const downloadBtn = document.querySelector(".download-btn");

if (downloadBtn) {
    function handleDownloadBtnAnimation() {
        const btnPosition = downloadBtn.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (btnPosition < screenPosition) {
            downloadBtn.style.animation = "pulse 2s infinite";
        }
    }

    window.addEventListener("scroll", handleDownloadBtnAnimation);

    // إضافة أنيميشن النبض
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
            }
            70% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
        }
    `;
    document.head.appendChild(style);
}