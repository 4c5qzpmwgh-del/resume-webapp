document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const resumePages = document.querySelectorAll('.resume-page');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) return;

            // 移除所有項目的選取狀態
            navItems.forEach(nav => nav.classList.remove('active'));
            // 為當前點擊項加上選取狀態
            item.classList.add('active');

            const targetPageId = item.getAttribute('data-target');

            // 切換右側顯示的 A4 頁面
            resumePages.forEach(page => {
                if (page.id === targetPageId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });
});
