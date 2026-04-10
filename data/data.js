export const navigationData = {
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

export const heroData = {
    title: "Tirez profit des géodonnées",
    content : [{
        pro: "Gagnez en compréhension"
    },{
        pro: "Communiquez avec clarté"
    },{
        pro: "Prenez de meilleures décisions"
    }]
}

export const skillData = {
    title: "Nos expertises",
    description: "Notre expertise en géoinformatique et ses domaines sous-jacent nous permet de vous offrir des solutions et des services personnalisés efficaces pour répondre à vos besoin.",
    content : [{
        title: "Analyse",
        index: "01",
        description: "Requêtes spatiales, statistiques et croisement complexe pour vos géodonnées",
        image: "./images/p-analyse-spatiale.svg"
    },{
        title: "Cartographie",
        index: "02",
        description: "Conception de cartes claires, précises et adaptées à chaque besoin.",
        image: "./images/p-cartographie.svg"
    },{
        title: "Modélisation",
        index: "03",
        description: "Conception de schémas de géodonnées et modélisation de processus.",
        image: "./images/p-modelisation.svg"
    },{
        title: "Télédétection",
        index: "04",
        description: "Traitement d'orthophotos, MNT et imagerie multispectrale pour l'extraction d'information.",
        image: "./images/p-teledetection.svg"
    },{
        title: "Web SIG",
        index: "05",
        description: "Déploiement de services géospatiaux et d'applications cartographiques interactives en ligne.",
        image: "./images/p-web-sig.svg"
    },{
        title: "Intégration",
        index: "06",
        description: "ETL géospatial, migration de données et interopérabilité entre systèmes et formats SIG.",
        image: "./images/p-integration.svg"
    },{
        title: "Formation",
        index: "07",
        description: "Accompagnement technique sur ArcGIS, QGIS, FME et les standards géomatiques.",
        image: "./images/p-formation.svg"
    }]
}

export const serviceData = {
    title: "Nos services",
    description: "Chez bendroz, nous mettons notre expertise au service de vos projets. Nous vous aidons à exploiter pleinement la puissance des géodonnées, afin de répondre à vos besoins spécifiques et d’optimiser vos processus.",
    content : [{
        title: "Inventaire & plan directeur des bâtiments",
        type: "bati",
        sectionID: "pdb",
        description: "Donnez-vous enfin une vision claire de l’état de vos bâtiments, des priorités de travaux et de leur impact énergétique.<br>Nous accompagnons les communes dans la mise en place d’un inventaire complet des bâtiments communaux et d’un plan directeur d’entretien et de rénovation sur 10 à 15 ans, intégrant les aspects techniques, énergétiques et climatiques.",
        page: "/page/plan-directeur-batiment.html"
    }]
}

export const valueData = {
    title: "Nos valeurs",
    description: "Notre objectif est de vous offrir un service à la hauteur de vos attentes. Nous sommes là pour vous accompagner à chaque étape de votre projet. Vigilance et qualité sont mis à l’œuvre pour vous assurer le meilleur résultat.",
    content : [{
        title: "Transparence",
        description: "Notre méthodologie et nos réflexions pour mener à bien vos projets sont entièrement documentés",
        icon: "visibility"
    },{
        title: "Qualité",
        description: "Grâce à notre savoir faire technique spécialisé, nous garantissons qualité dans vos projets",
        icon: "gpp_good"
    },{
        title: "Proximité",
        description: "Nous privilégions un contact direct et régulier pour rester alignés avec vos attentes tout au long du projet.",
        icon: "handshake"
    },{
        title: "Flexibilité",
        description: "Nous nous intégrons à vos outils et processus existants, sans vous imposer une façon de travailler.",
        icon: "interests"
    }]
}


export const teamData = {
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
    }]
}

export const contactData = {
    title: "Nous contacter",
    content : [{
        description: "Vous avez des questions ou besoin de plus d'informations concernant nos géoservices ? Notre équipe est là pour vous aider ! N'hésitez pas à nous contacter pour toute demande ou renseignement."
    }]
}

export const footerHTML = `
<div class="footer">
    <div class="footer-container">
        <img class="footer-logo" src="/images/cigle-white.svg" alt="">
        <ul class="footer-text-container">
            <li>info@bendroz.ch</li>
            <li>@ 2026 bendroz</li>
        </ul>
    </div>
</div>
`