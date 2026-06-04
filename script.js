const themeToggleBtn = document.getElementById('theme-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

// 1. Logik Mod Gelap (Dark Mode)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Light Mode';
} else {
    themeToggleBtn.textContent = 'Dark Mode';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
        localStorage.removeItem('theme');
    }
});

// 2. Logik Mengesan Skrol Halaman untuk Menu Aktif
window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});