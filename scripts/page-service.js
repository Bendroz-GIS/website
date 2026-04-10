import { navigationData, footerHTML, serviceData } from "../data/data.js";
import { createNavigationBar } from "./html-injector/navigation.js";
import { createServiceHeroSection } from "./html-injector/service.js";
import { burgerMenu } from "./script.js";


document.getElementById("footer").innerHTML = footerHTML;

createServiceHeroSection(serviceData);
createNavigationBar(navigationData);
burgerMenu();