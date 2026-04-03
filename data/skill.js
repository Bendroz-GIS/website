export const skillSection = {
    title: "Nos expertises",
    description: "Notre expertise en géoinformatique et ses domaines sous-jacent nous permet de vous offrir des solutions et des services personnalisés efficaces pour répondre à vos besoin.",
    content : [{
        title: "01 - Analyse",
        description: "Requêtes spatiales, statistiques et croisement complexe pour vos géodonnées",
        image: "./images/p-analyse-spatiale.svg"
    },{
        title: "02 - Cartographie",
        description: "Conception de cartes claires, précises et adaptées à chaque besoin.",
        image: "./images/p-cartographie.svg"
    },{
        title: "03 - Modélisation",
        description: "Conception de schémas de géodonnées et modélisation de processus.",
        image: "./images/p-modelisation.svg"
    },{
        title: "04 - Télédétection",
        description: "Traitement d'orthophotos, MNT et imagerie multispectrale pour l'extraction d'information.",
        image: "./images/p-teledetection.svg"
    },{
        title: "05 - Web SIG",
        description: "Déploiement de services géospatiaux et d'applications cartographiques interactives en ligne.",
        image: "./images/p-web-sig.svg"
    },{
        title: "06 - Intégration",
        description: "ETL géospatial, migration de données et interopérabilité entre systèmes et formats SIG.",
        image: "./images/p-integration.svg"
    },{
        title: "07 - Formation",
        description: "Accompagnement technique sur ArcGIS, QGIS, FME et les standards géomatiques.",
        image: "./images/p-formation.svg"
    }]
}

export function createSkillSection(skillSection) {
    let skillHTML = "" 
    skillSection.content.forEach(element => {
        skillHTML += `
        <div class="grid-item">
            <img class="skill" src="${element.image}" alt="">
            <div class="text-container">
                <h3 class="text-skill">${element.title}</h3>
                <p>${element.description}</p>
            </div>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="divider" id="skill">
            <h2>${skillSection.title}</h2>
        </div>
        <div class="text-container">
            <p>${skillSection.description}</p>
        </div>

        <div class="skill-container border-bottom-animation">
          ${skillHTML}
        </div>
    </div>
    `


    document.getElementById("skill-section").innerHTML = sectionHTML
}