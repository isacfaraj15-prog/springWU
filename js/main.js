const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

if (menuBtn && navbar) {
    menuBtn.onclick = function() {
        navbar.classList.toggle('active');
    };

    document.querySelectorAll('#navbar a').forEach(link => {
        link.onclick = () => {
            navbar.classList.remove('active');
        };
    });
}

const mainHeader = document.getElementById('mainHeader');
if (mainHeader) {
    window.addEventListener('scroll', () => {
        mainHeader.classList.toggle('scrolled', window.scrollY > 60);
    });
}

const bokaBtn = document.querySelector('.btn-gold');
if (bokaBtn) {
    bokaBtn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById('boka');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}