export const skillSection = {
    title: "Nos expertises",
    description: "Notre expertise en géoinformatique et ses domaines sous-jacent nous permet de vous offrir des solutions et des services personnalisés efficaces pour répondre à vos besoin.",
    content : [{
        title: "Analyse",
        index: "01",
        description: "Requêtes spatiales, statistiques et croisement complexe pour vos géodonnées",
        image: "./images/p-analyse-spatiale.svg"
    },{
        title: "Cartographie",
        index: "02",
        description: "Conception de cartes claires, précises et adaptées à chaque besoin.",
        image: "./images/p-cartographie.svg"
    },{
        title: "Modélisation",
        index: "03",
        description: "Conception de schémas de géodonnées et modélisation de processus.",
        image: "./images/p-modelisation.svg"
    },{
        title: "Télédétection",
        index: "04",
        description: "Traitement d'orthophotos, MNT et imagerie multispectrale pour l'extraction d'information.",
        image: "./images/p-teledetection.svg"
    },{
        title: "Web SIG",
        index: "05",
        description: "Déploiement de services géospatiaux et d'applications cartographiques interactives en ligne.",
        image: "./images/p-web-sig.svg"
    },{
        title: "Intégration",
        index: "06",
        description: "ETL géospatial, migration de données et interopérabilité entre systèmes et formats SIG.",
        image: "./images/p-integration.svg"
    },{
        title: "Formation",
        index: "07",
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
                <span class="index">${element.index}</span>
                <h3 class="text-skill">${element.title}</h3>
                <p>${element.description}</p>
            </div>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="section-header">
            <h2 class="section-title">${skillSection.title}</h2>
            <p class="section-description">${skillSection.description}</p>
        </div>

        <div class="skill-container border-bottom-animation">
          ${skillHTML}
        </div>
    </div>
    `


    document.getElementById("skill-section").innerHTML = sectionHTML
}