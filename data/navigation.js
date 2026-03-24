export const navigationInfo = {
    content : [{
        title: "Nos expertises",
        id: "#skill-section"
    },{
        title: "Nos services",
        id: "#service-section"
    },{
        title: "Nos valeurs",
        id: "#value-section"
    },{
        title: "Notre équipe",
        id: "#team-section"
    }]
}

export function createNavigationInfo(navigationInfo) {
    let navigationHTML = "" 
    navigationInfo.content.forEach(element => {
        navigationHTML += `
        <li><a href="${element.id}" class="smooth-scroll nav-toggle-button">${element.title}</a></li>
        `
    });

    document.getElementById("link-container").innerHTML = navigationHTML
}

