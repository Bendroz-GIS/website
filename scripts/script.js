import { contactSection, createContactSection } from "../data/contact.js?v=2";
import { heroSection, createHeroSection } from "../data/hero.js?v=2";
import { serviceSection, createServiceSection } from "../data/service.js?v=2";
import { skillSection, createSkillSection } from "../data/skill.js?v=2";
import { teamSection, createTeamSection } from "../data/team.js?v=3";
import { valueSection, createValueSection } from "../data/value.js?v=2";
import { navigationInfo, createNavigationInfo } from "../data/navigation.js?v=2";


createNavigationInfo(navigationInfo);
createContactSection(contactSection);
createHeroSection(heroSection);
createServiceSection(serviceSection);
createSkillSection(skillSection);
createTeamSection(teamSection);
createValueSection(valueSection);



document.addEventListener('DOMContentLoaded', function() { // permet de s'assurer le bon chargement du contenu
    
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
});
