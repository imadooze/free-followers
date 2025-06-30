// ✅ وظائف النوافذ المنبثقة

function openModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // لمنع التمرير عند فتح المودال
    }
}

function closeModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // إعادة التمرير بعد الإغلاق
    }
}

// ✅ إغلاق النافذة عند الضغط خارجها
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});