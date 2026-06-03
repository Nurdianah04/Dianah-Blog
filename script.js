const themeToggleBtn = document.getElementById('theme-toggle');

// Check if the user has a saved dark mode preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Light Mode'; // If dark mode is active, show "Light Mode"
} else {
    themeToggleBtn.textContent = 'Dark Mode';  // Otherwise, default to "Dark Mode"
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change the button text dynamically based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
        localStorage.removeItem('theme');
    }
});