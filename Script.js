// عرض الصفحة المطلوبة فقط
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  showPage('home');

  // تحميل عدد التسبيحات من التخزين المحلي
  const savedCount = localStorage.getItem("tasbeehCount");
  if (savedCount !== null) {
    tasbeehCount = parseInt(savedCount);
    document.getElementById("tasbeehCount").innerText = tasbeehCount;
  }
});

// التسبيح
let tasbeehCount = 0;

function incrementTasbeeh() {
  tasbeehCount++;
  document.getElementById("tasbeehCount").innerText = tasbeehCount;
  localStorage.setItem("tasbeehCount", tasbeehCount);
}

function resetTasbeeh() {
  tasbeehCount = 0;
  document.getElementById("tasbeehCount").innerText = tasbeehCount;
  localStorage.removeItem("tasbeehCount");
}

// الوضع المظلم
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// رابط المساعدة
function openHelp() {
  window.open("https://www.instagram.com/was_iya1?igsh=eHNzcHpwYjUzdWpo", "_blank");
}

// فتح صفحة الشروط
function openTerms() {
  showPage('privacy-policy-page');
}