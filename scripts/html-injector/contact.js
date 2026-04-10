export function createContactSection(contactData) {
    let contactHTML = "" 
    contactData.content.forEach(element => {
        contactHTML += `<p>${element.description}</p>`
    });

  
    const sectionHTML =`
    <div class="main-container">
        <div class="section-header">
            <h2>${contactData.title}</h2>
            ${contactHTML}
        </div>     
        <a class="button contact" href="mailto:info@bendroz.ch" class="smooth-scroll">Contactez-nous</a>
    </div>
    `


  document.getElementById("contact-section").innerHTML = sectionHTML
}