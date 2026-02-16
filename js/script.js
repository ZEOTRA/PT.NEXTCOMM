    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    // toggle menu
    function toggleMenu() {
        menu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    // Klik tombol hamburger
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah klik ini terdeteksi oleh 'window' di bawah
        toggleMenu();
    });

    // KLIK DI MANA SAJA UNTUK MENUTUP
    window.addEventListener('click', (e) => {
        // Jika menu sedang terbuka DAN yang diklik bukan bagian dari menu atau tombol
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
            toggleMenu();
        }
    });

    // Menutup menu saat salah satu link diklik (opsional tapi disarankan)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

