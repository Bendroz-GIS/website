export const skillSection = {
    title: "Notre équipe",
    description: "Notre expertise en géoinformatique et ses domaines sous-jacent nous permet de vous offrir des solutions et des services personnalisés efficaces pour répondre à vos besoin.",
    content : [{
        title: "Analyse",
        image: "../images/p-analyse-spatiale.svg"
    },{
        title: "Cartographie",
        image: "../images/p-cartographie.svg"
    },{
        title: "Modélisation",
        image: "../images/p-modelisation.svg"
    },{
        title: "Télédétection",
        image: "../images/p-teledetection.svg"
    },{
        title: "Web SIG",
        image: "../images/p-web-sig.svg"
    },{
        title: "Intégration",
        image: "../images/p-integration.svg"
    },{
        title: "Formation",
        image: "../images/p-formation.svg"
    }]
}

export function createSkillSection(skillSection) {
    let skillHTML = "" 
    skillSection.content.forEach(element => {
        skillHTML += `
        <div class="grid-item">
            <img class="skill" src="${element.image}" alt="">
            <p class="text-skill">${element.title}</p>
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