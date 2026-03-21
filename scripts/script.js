
document.addEventListener('DOMContentLoaded', function() { // permet de s'assurer le bon chargement du contenu
	const VARIABLE_NAME = document.getElementsByClassName("nav-toggle-button"); // élément qui vont trigger la fonction
	for (let i = 0; i < VARIABLE_NAME.length; i++) {
		VARIABLE_NAME[i].addEventListener("click", function(e) {
			document.getElementById("nav-pane").classList.toggle("open"); // élément cible // classe à basculer
		});
	}
});

/*
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

  // Récupération de l'élément avec l'ID "my-div"
  const div = document.getElementById("first");
  
  const logo = document.getElementById("top-nav-logo");

  // Récupération de l'élément "top-bar"
  const topBar = document.getElementById("top-bar-container");

  // Vérification si le bas de la div est au-dessus du haut de la fenêtre
  const divBottom = div.getBoundingClientRect().bottom;

  if (divBottom < 0) {
    // Basculer vers la classe dark-theme
    topBar.classList.remove('unscrolled');
    topBar.classList.add('scrolled');
	  logo.src = "images/logo-rb_v-vecteur.svg";
  } else {
    // Basculer vers la classe light-theme
    topBar.classList.remove('scrolled');
    topBar.classList.add('unscrolled');
	  logo.src = "images/logo-rw_v-vecteur.svg"
  }
}
*/
