    if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
    // Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('header nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Close mobile menu when clicking on link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('header nav ul').style.display = 'none';
        }
    });
});

// Responsive menu handling
window.addEventListener('resize', () => {
    const nav = document.querySelector('header nav ul');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});

// Form submission
document.querySelector('.right-side form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    this.reset();
});