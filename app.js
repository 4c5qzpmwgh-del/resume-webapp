document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const resumePages = document.querySelectorAll('.resume-page');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) return;

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const targetPageId = item.getAttribute('data-target');

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
