document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const resumePages = document.querySelectorAll('.resume-page');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. 移除所有導覽鈕的 active 狀態
            navItems.forEach(nav => nav.classList.remove('active'));
            // 2. 為當前點擊的導覽鈕加上 active
            item.classList.add('active');

            // 3. 取得目標頁面的 ID
            const targetPageId = item.getAttribute('data-target');

            // 4. 切換右側履歷頁面
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