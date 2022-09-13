// Navbar Script
const hoverEffect = document.querySelector('.hover-effect');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const colors = ["#F7A8B8", "#55CDFC", "white"];

for (let i = 0; i <= navLinks.length; i++) {
    if (navLinks[i]) {
        navLinks[i].addEventListener('mouseenter', navbarHoverEffect);
        navbar && navLinks[i].addEventListener('mouseleave', function () {
            setTimeout(() => {
                navLinks[i].parentNode.classList.remove('active');
                hoverEffect.style.opacity = '0';
            }, 500);
        });
    }
}

function navbarHoverEffect() {
    if (navLinks) {
        for (let i = 0; i <= navLinks.length; i++) {
            if (navLinks[i]) {
                if (navLinks[i].parentNode.classList.contains('active')) {
                    navLinks[i].parentNode.classList.remove('active');
                }
                navLinks[i].style.opacity = "0.25";
            }
        }
        this.parentNode.classList.add('active');
        this.style.opacity = "1";

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left;
        const top = this.getBoundingClientRect().top;
        const color = colors[Math.floor(Math.random() * colors.length)];

        hoverEffect.style.width = `${width}px`;
        hoverEffect.style.height = `${height}px`;
        hoverEffect.style.left = `${left}px`;
        hoverEffect.style.top = `${top}px`;
        hoverEffect.style.borderColor = color;
        hoverEffect.style.transform = "none";
        hoverEffect.style.opacity = '1';
    }
}


