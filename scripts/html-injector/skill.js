export function createSkillSection(skillData) {
    let skillHTML = "" 
    skillData.content.forEach(element => {
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
            <h2 class="section-title">${skillData.title}</h2>
            <p class="section-description">${skillData.description}</p>
        </div>

        <div class="skill-container border-bottom-animation">
          ${skillHTML}
        </div>
    </div>
    `


    document.getElementById("skill-section").innerHTML = sectionHTML
}