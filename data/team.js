export const teamSection = {
    title: "Notre équipe",
    content : [{
        linkedin: "https://www.linkedin.com/in/arnaud-amez-droz-767329205/",
        name: "A. Amez-Droz",
        role: "Associé",
        image: "../images/arnaud.jpg"
    }, {
        linkedin: "https://www.linkedin.com/in/amine-benalem-79ab20176/",
        name: "A. Benalem",
        role: "Associé",
        image: "../images/amine.jpg"
    }
]
}

export function createTeamSection(teamSection) {
    let teamHTML = "" 
    teamSection.content.forEach(element => {
        teamHTML += `
        <div class="grid-item">
            <img class="image-team" src="${element.image}" alt="">
            <div class="info-container">
                <span>${element.name}</span>
                <span>${element.role}</span>
                <a href=${element.linkedin}>
                    <span><i class="fa-brands fa-linkedin icon-team"></i></span>
                </a>
            </div>
        </div>
        `
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="divider" id="service">
            <h2>${teamSection.title}</h2>
        </div>
        <div class="team-container border-animation">
          ${teamHTML}
        </div>
    </div>
    `


    document.getElementById("team-section").innerHTML = sectionHTML
}

