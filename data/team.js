export const teamSection = {
    title: "Notre équipe",
    content : [ {
        linkedin: "https://www.linkedin.com/in/amine-benalem-79ab20176/",
        name: "A. Benalem",
        role: "Associé",
        image: "./images/amine.webp"
    },{
        linkedin: "https://www.linkedin.com/in/arnaud-amez-droz-767329205/",
        name: "A. Amez-Droz",
        role: "Associé",
        image: "./images/arnaud.webp"
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
                <h3 class="team-name">${element.name}</h3>
                <span>${element.role}</span>
                <a class="linkedin-container" href=${element.linkedin}>
                    <svg class="linkedin-icon" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
                    </svg>
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

