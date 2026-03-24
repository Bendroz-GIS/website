export const serviceSection = {
    title: "Nos services",
    description: "Chez Bendroz, nous mettons notre expertise en géoinformatique au service de vos projets. Que vous ayez besoin de solutions cartographiques personnalisées, de gestion de données géographiques ou d'analyses spatiales avancées, nous vous accompagnons à chaque étape. Grâce à notre approche technique et notre savoir-faire, nous vous aidons à exploiter pleinement la puissance des géodonnées, afin de répondre à vos besoins spécifiques et d’optimiser vos processus.",
    content : [{
        title: "Création cartographique",
        description: "Vous avez besoin d'une carte personnalisée pour un événement, un projet, ou pour des travaux spécifiques ? Nous vous proposons des solutions cartographiques sur mesure, adaptées à vos besoins. Quel que soit l'usage, nous concevons des cartes précises et esthétiques, optimisées pour la visualisation, la planification et la prise de décision."
    },{
        title: "Transition géodonnées",
        description: "Vous souhaitez gérer efficacement vos données sous forme géographique ? Nous vous accompagnons dans la mise en place d’une infrastructure de Systèmes d’Information Géographique (SIG) adaptée à vos besoins. De la modélisation de bases de données à la migration de vos données classiques en géodonnées, nous vous aidons à structurer et optimiser la gestion de vos informations spatiales, pour une meilleure analyse et exploitation."
    },{
        title: "Étude spatiale",
        description: "Besoin d’une analyse géographique poussée ou d’un rapport détaillé sur une zone spécifique ? Nous réalisons des études spatiales complexes, incluant l’acquisition et le traitement de données géographiques, pour vous fournir des résultats clairs et pertinents. Nous mettons en œuvre des outils et techniques avancés pour extraire et interpréter les informations clés nécessaires à votre projet."
    }
]
}


export function createServiceSection(serviceSection) {
    let serviceHTML = "" 
    serviceSection.content.forEach(element => {
        serviceHTML += `
        <div class="text-container">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="divider" id="service">
            <h2>${serviceSection.title}</h2>
        </div>
        <div class="text-container">
            <p>${serviceSection.description}</p>
        </div>

        <div class="service-container">${serviceHTML}</div>
        
        <button type="button" class="contact-button">
            <a href="mailto:info@bendroz.ch" class="smooth-scroll">Contactez-nous</a>
        </button>

    </div>
    `


    document.getElementById("service-section").innerHTML = sectionHTML
}