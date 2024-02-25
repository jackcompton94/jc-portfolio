function showPage(pageId) {
    document.querySelectorAll('.page-container').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}