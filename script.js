import { contactSection, createContactSection } from "./data/contact.js";
import { heroSection, createHeroSection } from "./data/hero.js";
import { serviceSection, createServiceSection } from "./data/service.js";
import { skillSection, createSkillSection } from "./data/skill.js";
import { teamSection, createTeamSection } from "./data/team.js";
import { valueSection, createValueSection } from "./data/value.js";
import { navigationInfo, createNavigationInfo } from "./data/navigation.js";


createNavigationInfo(navigationInfo);
createContactSection(contactSection);
createHeroSection(heroSection);
createServiceSection(serviceSection);
createSkillSection(skillSection);
createTeamSection(teamSection);
createValueSection(valueSection);



document.addEventListener('DOMContentLoaded', function() { // permet de s'assurer le bon chargement du contenu
	const VARIABLE_NAME = document.getElementsByClassName("nav-toggle-button"); // élément qui vont trigger la fonction
	for (let i = 0; i < VARIABLE_NAME.length; i++) {
		VARIABLE_NAME[i].addEventListener("click", function(e) {
			document.getElementById("nav-pane").classList.toggle("open"); // élément cible // classe à basculer
		});
	}
});


var scroll = new SmoothScroll('.smooth-scroll', {
    speed: 1000, // Durée de l'animation en millisecondes (1 seconde dans cet exemple)      
    offset: function(anchor, toggle) {
        var scrollMarginTop = -115; // Ajoutez ici la valeur de votre scroll-margin-top en pixels
        return scrollMarginTop * -1;
    }
});



