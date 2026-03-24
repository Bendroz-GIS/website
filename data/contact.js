export const contactSection = {
    title: "Nous contacter",
    content : [{
        description: "Vous avez des questions ou besoin de plus d'informations concernant nos géoservices ? Notre équipe est là pour vous aider ! N'hésitez pas à nous contacter pour toute demande ou renseignement."
    }
]
}

export function createContactSection(contactSection) {
    let contactHTML = "" 
    contactSection.content.forEach(element => {
        contactHTML += `<p>${element.description}</p>`
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="divider" id="contact">
            <h2>${contactSection.title}</h2>
        </div>
        <div class="text-container">
            ${contactHTML}
        </div>
        <button type="button" class="contact-button">
            <a href="mailto:info@bendroz.ch" class="smooth-scroll">Contactez-nous</a>
        </button>
    </div>
    `


  document.getElementById("contact-section").innerHTML = sectionHTML
}