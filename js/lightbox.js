const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox && lightbox.querySelector('img');
const lightboxCaption = lightbox && lightbox.querySelector('.lightbox-caption');

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        const caption = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
        openLightbox(img.src, caption);
    });
});

lightbox?.addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});
