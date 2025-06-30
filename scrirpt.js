// ✅ عند تحميل الصفحة - ظهور لطيف
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ✅ تأثير عند التمرير - إظهار العناصر
const revealOnScroll = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

// ✅ إعداد أولي
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

// ✅ تفعيل التمرير
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ✅ تأثير زر التحميل (نبضة عند الضغط)
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      downloadBtn.classList.add('clicked');
      setTimeout(() => downloadBtn.classList.remove('clicked'), 300);
    });
  }
});