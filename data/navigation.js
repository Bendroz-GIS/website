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
        <li><a class="link" href="${element.id}">${element.title}</a></li>
        `
    });

    const headerHTML =`
    <nav class="navbar">
        <a href="./" class="logo"><img id="top-nav-logo" class="logo" src="./images/logo-black.svg" alt="Logo"></a>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-links" id="nav-links">${navigationHTML}</ul>
    </nav>  
    `

    document.getElementById("header").innerHTML = headerHTML
}

