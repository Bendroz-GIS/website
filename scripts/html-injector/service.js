export function createServiceSection(serviceData) {
    let serviceHTML = "" 
    serviceData.content.forEach(element => {
        serviceHTML += `
        <div class="text-container ${element.type}">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>
        <a class="service button ${element.type}" href=${element.page}>En savoir plus</a>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="section-header">
            <h2 class="section-title">${serviceData.title}</h2>
            <p class="section-description">${serviceData.description}</p>
        </div>

        <div class="service-container">${serviceHTML}</div>
    </div>
    `


    document.getElementById("service-section").innerHTML = sectionHTML
}

export function createServiceHeroSection(serviceData) {
    serviceData.content.forEach(element => {
        let heroHTML = `
        <div class="hero${element.type}">
            <h1>${element.title}</h1>
            <p>${element.description}</p>
        </div>
        `

        let sectionTag = document.getElementById(element.sectionID);
        sectionTag.insertAdjacentHTML("afterbegin", heroHTML);
    });
}