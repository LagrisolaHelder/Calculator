const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableLightMode() {
    body.classList.add('light-mode');
    themeIcon.innerText = '☀️';
    localStorage.setItem('theme', 'light');
    
    // Update Three.js Background if applicable
    if (window.scene) {
        window.scene.background = new THREE.Color(0xf8fafc);
    }
}

function enableDarkMode() {
    body.classList.remove('light-mode');
    themeIcon.innerText = '🌙';
    localStorage.setItem('theme', 'dark');
    
    // Update Three.js Background if applicable
    if (window.scene) {
        window.scene.background = new THREE.Color(0x020617); // slate-950
    }
}