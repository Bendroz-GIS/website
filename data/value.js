export const valueSection = {
    title: "Nos valeurs",
    description: "Notre objectif est de vous offrir un service à la hauteur de vos attentes. Nous sommes là pour vous accompagner à chaque étape de votre projet. Vigilance et qualité sont mis à l’œuvre pour vous assurer le meilleur résultat.",
    content : [{
        title: "Transparence",
        description: "Notre méthodologie et nos réflexions pour mener à bien vos projets sont entièrement documentés",
        icon: "visibility"
    },{
        title: "Qualité",
        description: "Grâce à notre savoir faire technique spécialisé, nous garantissons qualité dans vos projets",
        icon: "gpp_good"
    },{
        title: "Proximité",
        description: "Nous privilégions un contact direct et régulier pour rester alignés avec vos attentes tout au long du projet.",
        icon: "handshake"
    },{
        title: "Flexibilité",
        description: "Nous nous intégrons à vos outils et processus existants, sans vous imposer une façon de travailler.",
        icon: "interests"
    }
]
}

export function createValueSection(valueSection) {
    let valueHTML = "" 
    valueSection.content.forEach(element => {
        valueHTML += `
        <div class="grid-item">
            <div class="title">
                <span class="material-icons icon-value">${element.icon}</span>
                <h3 class="text-value">${element.title}</h3>
            </div>
            <p class="text-value">${element.description}</p>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="section-header">
            <h2 class="section-title">${valueSection.title}</h2>
            <p class="section-description">${valueSection.description}</p>
        </div>

        <div class="value-container border-bottom-animation">
          ${valueHTML}
        </div>
    </div>
    `


    document.getElementById("value-section").innerHTML = sectionHTML
}