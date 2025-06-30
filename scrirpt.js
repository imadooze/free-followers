// ✅ تأثير عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ✅ ظهور البطاقات والأقسام عند التمرير
const revealOnScroll = () => {
  const elements = document.querySelectorAll(".card, section");

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

// ✅ تطبيق كلاس مبدئي
document.querySelectorAll(".card, section").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

// ✅ تطبيق الحركة عند التمرير
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ✅ تحسين عند الضغط على زر التحميل
const downloadBtn = document.querySelector('.download');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    downloadBtn.classList.add('clicked');
    setTimeout(() => downloadBtn.classList.remove('clicked'), 300);
  });
}