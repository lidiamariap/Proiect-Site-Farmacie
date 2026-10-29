document.addEventListener('DOMContentLoaded', () => {

    // 1. Schimbare mod Light / Dark
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            html.setAttribute('data-theme', 'light');
            themeIcon.className = 'fa-regular fa-sun';
        } else {
            html.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fa-regular fa-moon';
        }
    });

    // 2. Carusel Imagini (Prev / Next)
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // 3. Căutare live în tabel
    const searchInput = document.getElementById('searchInput');
    const tableRows = document.querySelectorAll('#medTable tbody tr');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    });

    // 4. Butoane UP și DOWN
    document.getElementById('btnUp').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('btnDown').addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // 5. Fereastră Ajutor (Help Modal)
    const helpModal = document.getElementById('helpModal');
    const btnHelp = document.getElementById('btnHelp');
    const closeModal = document.querySelector('.close-modal');

    btnHelp.addEventListener('click', () => {
        helpModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        helpModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            helpModal.style.display = 'none';
        }
    });
});