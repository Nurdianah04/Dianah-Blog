// 1. Ambil elemen butang tukar mod daripada HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Semak jika pengguna pernah memilih mod gelap sebelum ini (Pilihan Keusahawanan/Bijak)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Mod Cerah';
}

// 3. Tambah fungsi klik pada butang
themeToggleBtn.addEventListener('click', () => {
    // Tukar (toggle) kelas .dark-mode pada elemen <body>
    document.body.classList.toggle('dark-mode');
    
    // Semak jika mod gelap aktif sekarang untuk tukar teks butang dan simpan pilihan
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Mod Cerah';
        localStorage.setItem('theme', 'dark'); // Simpan pilihan mod gelap
    } else {
        themeToggleBtn.textContent = 'Tukar Mod';
        localStorage.removeItem('theme'); // Buang pilihan jika mod cerah
    }
});