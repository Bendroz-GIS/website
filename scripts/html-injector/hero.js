export function createHeroSection(heroData) {
    let heroHTML = "" 
    heroData.content.forEach(element => {
        heroHTML += `
        <div class="list-item">
            <span class="material-icons icon-valeur bullet">circle</span>
            <span class="text">${element.pro}</span>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="hero-text-container">
            <h1>${heroData.title}</h1>
            <div class="list">${heroHTML}</div>
            <a class="button contact" href="mailto:info@bendroz.ch" class="smooth-scroll">Contactez-nous</a>
        </div> 
    </div>   
    
    `
    document.getElementById("hero-section").innerHTML = sectionHTML
}