// أكواد التحكم باللغة
const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.getElementById('main-html');

langToggleBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('lang') === 'ar') {
        // التحويل للإنجليزية
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr');
        langToggleBtn.textContent = 'AR';
    } else {
        // العودة للعربية
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
        langToggleBtn.textContent = 'EN';
    }
});

// أكواد التحكم بالإضاءة (تفعيل الوضع الصباحي)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // تغيير الأيقونة بين الشمس والقمر
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '☀️';
    }
});