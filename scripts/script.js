
export function burgerMenu() { // permet de s'assurer le bon chargement du contenu
    
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));

        if (expanded) {
            navLinks.classList.add('closing'); // ← lance le fadeOut
        } else {
            navLinks.classList.remove('closing');
            navLinks.classList.add('open');
        }
    });

    navLinks.addEventListener('animationend', () => {
        if (navLinks.classList.contains('closing')) {
            navLinks.classList.remove('open');
            navLinks.classList.remove('closing');
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.setAttribute('aria-expanded', 'false');
            navLinks.classList.add('closing');
        });
    });

    window.addEventListener('resize', () => {
    if (window.innerWidth >= 650) {
        burger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
    }
    });
};
