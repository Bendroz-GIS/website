export const valueSection = {
    title: "Nos valeurs",
    description: "Notre objectif est de vous offrir un service à la hauteur de vos attentes. Nous sommes là pour vous accompagner à chaque étape de votre projet. Vigilance et qualité sont mis à l’œuvre pour vous assurer le meilleur résultat.",
    content : [{
        title: "Vigilance",
        icon: "visibility"
    },{
        title: "Qualité",
        icon: "gpp_good"
    },{
        title: "Proximité",
        icon: "handshake"
    }
]
}

export function createValueSection(valueSection) {
    let valueHTML = "" 
    valueSection.content.forEach(element => {
        valueHTML += `
        <div class="grid-item">
            <span class="material-icons icon-valeur">${element.icon}</span>
            <p class="text-valeur">${element.title}</p>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="divider" id="service">
            <h2>${valueSection.title}</h2>
        </div>
        <div class="text-container">
            <p>${valueSection.description}</p>
        </div>

        <div class="liste-valeur border-bottom-animation">
          ${valueHTML}
        </div>
    </div>
    `


    document.getElementById("value-section").innerHTML = sectionHTML
}