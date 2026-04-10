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