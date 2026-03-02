const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');


menuBtn.onclick = function() {
    navbar.classList.toggle('active');
};


document.querySelectorAll('#navbar a').forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    };
});