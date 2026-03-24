export const heroSection = {
    title: "Tirez profit des géodonnées",
    content : [{
        pro: "Gagnez en compréhension"
    },{
        pro: "Communiquez avec clarté"
    },{
        pro: "Prenez de meilleures décisions"
    }
]
}


export function createHeroSection(heroSection) {
    let heroHTML = "" 
    heroSection.content.forEach(element => {
        heroHTML += `
        <div>
            <span class="material-icons icon-valeur bullet">circle</span>
            <span class="text">${element.pro}</span>
        </div>
        `
    });

  
    const sectionHTML =`
    <div id="hero" class="hero-container">
        <div class="hero-text-container">

            <h1>${heroSection.title}</h1>

            <div class="list">${heroHTML}</div>

            <button type="button" class="contact-button">
                <a href="mailto:info@bendroz.ch" class="smooth-scroll">Contactez-nous</a>
            </button>
         
    </div>
    <div class="img-background"></div>
    `


    document.getElementById("hero-section").innerHTML = sectionHTML
}