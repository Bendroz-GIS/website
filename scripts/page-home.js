import { navigationData, contactData, footerHTML, heroData, serviceData, skillData, teamData, valueData } from "../data/data.js";
import { createNavigationBar } from "./html-injector/navigation.js";
import { createContactSection } from "./html-injector/contact.js";
import { createHeroSection } from "./html-injector/hero.js";
import { createServiceSection } from "./html-injector/service.js";
import { createSkillSection } from "./html-injector/skill.js";
import { createTeamSection } from "./html-injector/team.js";
import { createValueSection } from "./html-injector/value.js";
import { burgerMenu } from "./script.js";


createNavigationBar(navigationData);
createContactSection(contactData);
createHeroSection(heroData);
createServiceSection(serviceData);
createSkillSection(skillData);
createTeamSection(teamData);
createValueSection(valueData);

burgerMenu();

document.getElementById("footer").innerHTML = footerHTML;