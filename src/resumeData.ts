import { CATEGORIE_PROJET, COMPETENCE } from "./constantes";

export const DATA = {
  main: {
    nom: "Colli Grégory",
    statut: "Développeur web",
    image: `${import.meta.env.VITE_URL}/assets/img/avatar_cp_big.jpg`,
    bio: "Salut à tous ! Les adeptes du code et les passionnés de GPU ! 👨‍💻✨\n\
    \nJe suis Colli Grégory, un développeur web indépendant, voguant à travers les océans du développement logiciel comme un navigateur intrépide. 🚀\n\
    Passionné par la création numérique, avide d'apprentissage, toujours en quête de nouveaux défis, je suis un esprit curieux, autonome et dynamique. Je partage avec vous mes succès et mes expériences ! \n\
    \n🚀 Qui suis-je ?\n\
    Un constructeur habile de logiciels, un jongleur de langages, et un amoureux du code. Je construis des ponts entre les idées et la réalité plus rapidement que le chargement d'une page web.\n\
    \n🎯 Développeur web avec une passion pour l'innovation\n\
    \n🔧 Compétences Front-End :\n\
    Conception et développement d'interfaces utilisateur interactives.\n\
    Création d'expériences utilisateur captivantes avec HTML5, CSS3, et JavaScript.\n\
    Utilisation de diverses technologies et frameworks pour optimiser le développement.\n\
    Intégration de designs responsive pour une expérience sans faille sur tous les appareils.\n\
    \n🚀 Polyvalent et ouvert à toutes les technologies\n\
    Ma passion pour l'apprentissage me pousse à explorer constamment de nouvelles technologies. Je suis à l'aise avec une variété de frameworks Front-End et toujours ouvert à de nouvelles découvertes.\n\
    \n🎯 Développeur Back-End en progression\n\
    \n🔧 Compétences Back-End :\n\
    Manipulation de bases de données et gestion de serveurs.\n\
    Conception et développement de fonctionnalités côté serveur.\n\
    Utilisation de technologies comme Node.js pour des applications robustes et évolutives.\n\
    \n🏗️ Architecte Logiciel : Que vous ayez une vision claire ou simplement une idée floue, je suis là pour concrétiser vos projets numériques.\n\
    \n💼 Pourquoi moi ?\n\
    Parce que je transforme des lignes de code en solutions numériques avec la précision d'un chef cuisinier préparant un plat exquis. 🍲\n\
    Soucieux de la qualité, de la sécurité et des meilleures pratiques, je suis prêt à relever tous les défis.\n\
    \n🌎 Expérience variée\n\
    J'ai collaboré avec des esprits créatifs du monde entier. Mon réseau est aussi étendu que la portée d'un signal Wi-Fi dans un cybercafé.\n\
    \n💬 Ce que mes collaborateurs disent de moi\n\
    'Un codeur d'exception, une légende vivante !' - Un client satisfait.\n\
    \n💻 Disponible pour de nouveaux projets\n\
    Prêt à créer des expériences numériques incroyables ensemble ! Que ce soit pour donner vie à une idée géniale ou pour concrétiser vos projets, je suis là !\n\
    \n🌟 Travaillons ensemble !\n\
    Contactez-moi, et conjuguons nos talents pour créer une symphonie de code mémorable.",
    email: "colli.gregory.13@gmail.com",
    tel: "06 64 54 78 80",
    adresse: {
      ville: "Marseille",
    },
    social: [
      {
        nom: "linkedin",
        url: "https://www.linkedin.com/in/gr%C3%A9gory-colli-9080228b/",
        className: "fab fa-linkedin",
      },
      {
        nom: "github",
        url: "https://github.com/greg13013",
        className: "fab fa-github",
      },
      {
        nom: "cv",
        url: `${import.meta.env.VITE_URL}/CV-GREGORY-2024.pdf`,
        className: "fab fa-solid fa-file-pdf",
      },
    ],
  },
  resume: {
    experienceProfessionelle: [
      {
        nom: "HR Team - R&D Lab Scalian",
        titre: "Développeur web - Next / NodeJs",
        date: "Janvier 2024 - Mai 2024",
        description:
          "En intercontrat chez HR Team,\n\
          j'ai été intégré dans l'équipe R&D du LAB de Scalian sur un projet de comparaison d'image visuel\n\
          L'utilisateur a le choix de comparer 2 images qui ont été retravaillés avec des algorithmes IA et ensuite se voit attribuer un elo score pour avoir différentes statistiques\n\
          J'ai été chargé de compléter la documentation existante et améliorer l'application qui avait été commencé.\n\
          L'équipe est en méthode AGILE avec JIRA pour le backlog \n\
          Le versionning se fait avec Gitlab\n\
          Le projet est composé de 3 applications : \n\
           - Le frontend en NextJS - Typescript et MUI pour le design system\n\
           - Le backend en NodeJS Express - Typescript \n\
           - Le backoffice en NextJS - Typescript et MUI pour le design system",
      },
      {
        nom: "HR Team - Mission chez CEGID",
        titre: "Développeur web - React",
        date: "Mai 2022 - Décembre 2023",
        description:
          "Développeur front d'une équipe de 4 développeurs organisé en Agilité : sprint de 2 semaine, l'équipe s'appuie sur un architecte, une équipe design system, une équipe de production. \nDans le cadre du développement d'un nouveau produit from scratch qui s'imbrique à plusieurs solutions de l'entreprise à destination de l'univers de la comptabilité \nL'outil gère les besoins d'un cabinet comptable en termes de ressources, saisies des temps, frais, workflow \nTechnologies : \n•	DevOps : Azure DevOps \n•	CI/CD : Dev, Inte, prod \n•	Framework: React 18 - Typescript \n•	State Manager: Redux / redux toolkit \n•	UI Framework: MUI / Cegid Design System \n•	Gestionnaire de libraire: Jfrog npm \n•	Tests unitaires: Jest / RTL \n•	Qualité : Sonar \n•	Architecture: microservice API / DDD \n•	Notification web sockets: SignalR react",
      },
      {
        nom: "Natam - Développeur fullstack",
        titre: "Développeur web - Framework JS / Java",
        date: "Janvier 2020 - Aujourd'hui",
        description:
          "Groupe de développeur passionnés sur les domaines du développement IT web et logiciel fullstack principalement sur des framework JS\n\
          - Angular \n\
          - React \n\
          - VueJS \n\
          - Java (springboot) \n\
          - Php (symfony) \n\
          - Saas \n\
          - Sql \n\
          Veille technologique, mise en commun des compétences, réalisation de plusieurs projet online, expérimentations de nouvelles librairies, framework et API, stratégie de communication et de développement.",
      },
      {
        nom: "Cabinet condorcet",
        titre: "Développeur web - PHP",
        date: "Septembre 2014 - Mars 2015",
        description:
          "Le métier, courtage en assurance, les outils : mise en relation client, signalements des sinistres, rappel automatique, alerte gestionnaire. \nRefonte d'un site web Wordpress pour assurer la continuité des services métiers. \n- Mise à jour framework, montée de version \n- Gestion des articles \n- Gestion des comptes \n- Gestion emailling, workflow \n- Adaptation thème HTML/CSS/PHP et module. \n- Interopérabilité avec les systèmes internes, excel, word, outlook, windows. \n- Mise en prod",
      },
      {
        nom: "Stage BTS CNRS - Projet GCPI",
        titre: "Développeur web - PHP",
        date: "Janvier 2014 - Février 2014",
        description:
          "Reprise d'une application en PHP / Javascript / SQL \nImportation de plusieurs base de donnée vers une autre avec OCS Inventory \nTravailler sur un projet avec Git pour suivre l'avancement du projet",
      },
    ],
    formation: [
      {
        ecole: "OpenClassroom",
        diplome: "Septembre 2021 - Mars 2022",
        titre: "Titre RNCP de niveau 5 (Bac+2).",
        description:
          "Compétences acquises : Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS \nAjouter du contenu audio et vidéo en HTML5 \nAnimer les pages web avec CSS3 \nAppliquer les standards du web et les normes en vigueur \nConstruire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette) \nAméliorer le référencement naturel en utilisant les balises selon leur sémantique \nFaire réagir la page web en fonction des actions de l’utilisateur en JavaScript \nSe connecter à un service web pour exploiter des données tierces (API) \nGérer les comptes utilisateurs \nConcevoir un site maintenable grâce à la gestion des erreurs et exceptions \nCréer, gérer et afficher le contenu d’une base de données.",
      },
      {
        ecole: "Lycée Marie Curie",
        diplome: "2012-2014",
        titre:
          "BTS SIO (Service Informatique aux Organisations), SLAM - Solutions Logicielles et Applications Métiers",
        description:
          "Production des solutions logicielles. \nDéfinition du cahier des charges, choix des solutions techniques. \nRéalisation des applications et mise en place de celles-ci au sein de l’organisation.",
      },
    ],
    competence: [
      {
        nom: "HTML / CSS / SCSS",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/html-5.svg`,
      },
      {
        nom: "JavaScript / TypeScript",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/typescript.svg`,
      },
      {
        nom: COMPETENCE.react,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/react.svg`,
      },
      {
        nom: COMPETENCE.redux,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/redux.svg`,
      },
      {
        nom: "Jest",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/jest.svg`,
      },
      {
        nom: COMPETENCE.nextjs,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/nextjs.svg`,
      },
      {
        nom: COMPETENCE.angular,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/angular.svg`,
      },
      {
        nom: "SQL",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/mysql.svg`,
      },
      {
        nom: "PHP / PDO",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/php.svg`,
      },
      {
        nom: COMPETENCE.symfony,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/symfony.svg`,
      },
      {
        nom: COMPETENCE.express,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/express.svg`,
      },
      {
        nom: COMPETENCE.git,
        img: `${import.meta.env.VITE_URL}/assets/img/competences/git.svg`,
      },
      {
        nom: "Azure DevOps",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/microsoft-azure.svg`,
      },
      {
        nom: "Java",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/java.svg`,
      },
      {
        nom: "Spring boot",
        img: `${import.meta.env.VITE_URL}/assets/img/competences/springboot.svg`,
      },
    ],
  },
  portfolio: {
    projets: [
      {
        titre: "Witfizz - Application",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/witfizz/witfizz_app.png`],
        url: "https://app.demo.witfizz.fr",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
        ],
        courteDescription:
          "Logiciel métier de gestion de formation et d'apprentissage par le jeu React / Symfony",
        competence: [COMPETENCE.react, COMPETENCE.redux, COMPETENCE.mui, COMPETENCE.symfony],
        description:
          "Dans une équipe de 3 développeurs, pour répondre aux besoins de gestion d’un Organisme de formation : développement d’une application métier en React pour le front et Symfony pour le back \nDéveloppement de jeux interactifs (monopoly, qui veut gagner des millions) en React. \nBack : Réalisation d’api en architecture MVC, gestion du trail d’audit, injection du contexte utisateur via listener, gestion du JWT \nHébergement VPS chez OVH pour une autonomie et gestion totale du serveur web. \nHébergement et installation sur VPS de l’ERP/CRM Dolibarr et serveur de visio-conférence BigBlueButton.",
      },
      {
        titre: "Witfizz - Save Feny",
        image: [
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/saveFeny/saveFeny.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/saveFeny/explication.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/saveFeny/jeu.webp`,
        ],
        url: "#",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
          CATEGORIE_PROJET.jeu,
        ],
        courteDescription:
          "Jeu éducatif pour les apprenants en formation, chasse aux trésors avec énigme",
        competence: [COMPETENCE.react, COMPETENCE.symfony],
        description:
          "Votre apprenant se trouve projeter dans un ancien hôpital psychiatrique désaffecté, ou il devra délivrer Melle Feny du terrible Professeur Crash en traversant les 6 salles, récoltant les indices et résolvant les énigmes, tout en évitant les pièges temps dissimulés. \nA chaque salle réussi votre apprenant obtiendra une partie du code lui permettant de l’ibère Melle Feny. \nSera-t-il à la hauteur du défi ? \nFront: React \nBack: Symfony",
      },
      {
        titre: "Witfizz - Escape game",
        image: [
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/escapeGame/escapeGame.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/escapeGame/carteJeu.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/escapeGame/ecranReponse.webp`,
        ],
        url: "#",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
          CATEGORIE_PROJET.jeu,
        ],
        courteDescription:
          "Jeu éducatif pour les apprenants en formation, chasse aux trésors avec énigme",
        competence: [COMPETENCE.react, COMPETENCE.symfony],
        description:
          "Funny est piégé ! Et vos apprenants sont les seules personnes à pouvoir le sauver. Ils devront trouver la réponse à l’énigme que vous aurez configuré, ce grâce aux indices que vous aurez caché dans différent objet de la pièce. \nMais attention ! Ce jeu est chronométré et des piège temps qui accélère le chronomètre sont aussi dissimulé dans les objets, alors il leur faudra cliquer sans trembler ! \nDans ce jeu vous pouvez choisir la salle que vous désirez configurer, parmi une bibliothèque de 15 modèles. \nLe formateur peut créer et personnaliser le jeu (choix de la carte, choix de l'énigme, nbre de vie, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "Witfizz - Qui veut gagner des connaissances",
        image: [
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/qvgdc/qvgdc.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/qvgdc/echellePoint.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/qvgdc/jeu.webp`,
        ],
        url: "#",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
          CATEGORIE_PROJET.jeu,
        ],
        courteDescription:
          "Jeu éducatif pour les apprenants en formation avec un système de palier pour le score",
        competence: [COMPETENCE.react, COMPETENCE.symfony],
        description:
          "L’apprenant fait face à notre JP à nous ! Incarné par Funny, la mascotte de l’app WitFizz. Comme pour le jeu original, votre apprenant bénéficie de JOCKER et doit répondre à une série de question, que vous aurez soigneusement configuré en fonction de votre contenu et du niveau de vos apprenants, pour gravir l’échelle des gains ! \nC’est votre dernier mot ?! \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "Witfizz - 60 secondes chrono",
        image: [
          `${
            import.meta.env.VITE_URL
          }/assets/img/projets//witfizz/jeu/60secondeChrono/60secondeChrono.webp`,
          `${
            import.meta.env.VITE_URL
          }/assets/img/projets//witfizz/jeu/60secondeChrono/carteJeu.webp`,
          `${
            import.meta.env.VITE_URL
          }/assets/img/projets//witfizz/jeu/60secondeChrono/salleDynamite.webp`,
        ],
        url: "#",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
          CATEGORIE_PROJET.jeu,
        ],
        courteDescription:
          "Jeu éducatif pour les apprenants en formation avec un système de palier et un QCM",
        competence: [COMPETENCE.react, COMPETENCE.symfony],
        description:
          "L'apprenant est appelé sur le terrain pour sauver votre univers, que le formateur aura sélectionné parmi les 15 modeles en désamorçant une série de bombes qui ont été placé par l’autoproclamer « Maitre des Bombes » ! Votre apprenant dispose de 60 secondes par bombe, il devra répondre à la question que vous lui avez concocté dans les temps pour désamorcer les bombes et mettre en déroute le « Maitre des Bombes ». \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "Witfizz - Le grand quizz",
        image: [
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/lgq/lgq.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/lgq/jeu.webp`,
          `${import.meta.env.VITE_URL}/assets/img/projets/witfizz/jeu/lgq/perdu.webp`,
        ],
        url: "#",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
          CATEGORIE_PROJET.jeu,
        ],
        courteDescription:
          "Jeu éducatif pour les apprenants en formation avec un système de palier et un QCM",
        competence: [COMPETENCE.react, COMPETENCE.symfony],
        description:
          "Le formateur peut évaluer et encrer les connaissances de ces apprenants en les mettant face à une épreuve chronomètre, projeté sur un plateau tv de jeu, ils/elles devront prendre connaissance de la thématique et trouver les affirmations juste parmi une liste d’affirmation que vous aurez préparez avec soins en fonction de votre formation ou de votre module, mais attention à rester concentré il ne doit en rester qu’une ! \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "Witfizz - Site vitrine",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/witfizz/witfizz.png`],
        url: "https://witfizz.fr",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.next],
        courteDescription: "Site vitrine pour l'application Witfizz",
        competence: [COMPETENCE.nextjs, COMPETENCE.bootstrap],
        description:
          "Mise en place d’un site vitrine de présentation de l’application Witfizz \nReproduction maquette figma \nAccessibilité + responsive",
      },
      {
        titre: "Close Info",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/closeInfo.png`],
        url: "https://close-info.fr/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react, CATEGORIE_PROJET.express],
        courteDescription:
          "Application mobile - Réseau professionnel 100% dédié Closing, \nMise en relation entre closers et infopreneurs, \nDisponible sur Android & IOS",
        competence: [COMPETENCE.react, COMPETENCE.redux, COMPETENCE.socketio, COMPETENCE.express],
        description:
          "Front - React Native, Back - Express \nRéseau professionnel 100% dédié Closing \nMise en relation entre closers et infopreneurs \nPremière communauté francophone \nDisponible sur google store & app store",
      },
      {
        titre: "Natam",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/natam.png`],
        url: "https://natam.fr/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.javascript, CATEGORIE_PROJET.react],
        courteDescription: "Site vitrine Natam + application administration en React",
        competence: [
          COMPETENCE.javascript,
          COMPETENCE.react,
          COMPETENCE.bootstrap,
          COMPETENCE.redux,
        ],
        description:
          "Présentation de l’équipe, des différents services, mise à disposition d’un catalogue \nMise en place d’un chatbot \nMise en place d’un suivi d’actualité avec l’API de twitter \nCréation d’un formulaire de devis / estimation \nCréation de l'API Natam avec SpringBoot \nMise en place CRUD \nMise en place route publique et sécurisé \nCréation token JWT (SpringSecurity) \nCréation d'une application web React \nUtilisation hook de React + hook de React redux \nMise en place route avec react router \nMise en place authentification + Stockage JWT dans cookie sécurisé \nAfficher les newsletters \nAfficher les devis et estimation de l’entreprise avec filtre selon statut (en cours ou terminer) \nDéploiement en production sur OVH",
      },
      {
        titre: "Natam - API",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/natam.png`],
        url: "https://natam.fr/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.java],
        courteDescription: "API site vitrine Natam en java spring boot",
        competence: [COMPETENCE.java, COMPETENCE.springBoot],
        description:
          "Création de l'API Natam avec SpringBoot \nMise en place CRUD \nMise en place route publique et sécurisé \nCréation token JWT (SpringSecurity)",
      },
      {
        titre: "Projet 7 OC - Groupomania",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/groupomania.PNG`],
        url: "https://colligregory-groupomania.netlify.app",
        categorie: [
          CATEGORIE_PROJET.openclassroom,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.express,
        ],
        courteDescription:
          "Projet 7 Openclassroom - Création d’un réseau social pour entreprise (Frontend et Backend), \nHébergement sur Netlify",
        competence: [COMPETENCE.react, COMPETENCE.redux, COMPETENCE.netlify],
        description:
          "Front - React, Back - Express \nCréation d’un réseau social pour entreprise (Frontend et Backend) \nStructuration d’un projet React \nUtilisation des différents hooks de React (useState, useEffect, useRef) et les hooks de redux (useSelector, useDispatch) \nMise en place thème sombre / thème lumineux avec useContext \nUtilisation de Axios pour les appels à l’API \nGestion des routes avec react-router-dom \nGestion authentification d’un utilisateur \nGestion de la partie Administrateur \nGestion des posts et commentaires \nUtilisation de Redux avec react-redux, redux \nUtilisation de Sass \nUtilisation de materialize \nCréation d’une API avec Express, Base de donnée Mysql, utilisation de sequelize, respect sécurité OWASP \nMaintien d’un schéma d’architecture de l’application",
      },
      {
        titre: "Roulette casino",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/roulette.PNG`],
        url: "https://natam-roulette.netlify.app",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular],
        courteDescription: "Roulette crypto avec Metamask, \nFront - Angular, \nBack - Express",
        competence: [COMPETENCE.angular, COMPETENCE.express, COMPETENCE.web3, COMPETENCE.git],
        description:
          "Front - Angular, \nBack - Express, \nApplication web d'une roulette de casino avec la cryptomonnaie,\nConnexion à Metamask, \nInterface de création de machine à sous, \nUtilisation de httpClient pour des appels à l'API, \nUtilisation de Heroku pour le déploiement à partir de Git, \nMise en place d'une documentation, \nUtilisation de git pour le versionning, \nCréation version mobile avec Ionic",
      },
      {
        titre: "Projet 6 OC - Piiquante",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/piiquante.PNG`],
        url: "https://nostalgic-jennings-992350.netlify.app/",
        categorie: [CATEGORIE_PROJET.openclassroom, CATEGORIE_PROJET.express],
        courteDescription: "Projet 6 OpenClassroom - Application d'avis gastronomiques",
        competence: [COMPETENCE.javascript, COMPETENCE.express],
        description:
          "Création d’une API avec EXPRESS et MongoDB pour un site de sauce piquante \nGestion routes, controllers, modèles \nGestion des middlewares \nSécurité token sur toutes les routes à part login et signup et respect sécurité OWASP \nImplémentation d’un modèle logique de données conformément à la réglementation \nStockage des données de manière sécurisée \nMettre en œuvre des opérations CRUD de manière sécurisée \nDéploiement sur Heroku pour les backend et Netlify pour les frontend",
      },
      {
        titre: "Clash Royale API",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/clashRoyaleAPI.PNG`],
        url: "https://clashroyaleapi.netlify.app",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react],
        courteDescription: "Utilisation de l'API du jeu Clash Royale, \nHébergement sur Netlify",
        competence: [COMPETENCE.react, COMPETENCE.netlify],
        description:
          "Front - React, \nUtilisation de l'API publique du jeu mobile Clash Royale \nUtilisation des différents hooks : \n- useState \n- useEffect \n -useRef \n -useContext \nUtilisation de react-materialize pour le style",
      },
      {
        titre: "Portfolio",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/portfolio.PNG`],
        url: "#",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react],
        courteDescription: "Portfolio avec React",
        competence: [COMPETENCE.react],
        description:
          "Utilisation de React pour faire mon portfolio \nUtilisation des différents hooks : \n- useState \n- useEffect \n- useRef \nUtilisation de react-bootstrap pour le style",
      },
      {
        titre: "Site Web - Utilisation API public",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/tft.PNG`],
        url: "https://colli-gregory.alwaysdata.net/blizzardTft/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular, CATEGORIE_PROJET.php],
        courteDescription:
          "Angular \nExploitation API publique pour l'univers du gaming Blizzard & Riot",
        competence: [COMPETENCE.angular],
        description:
          "Application front Angular avec exploitation API publique pour l'univers du gaming :\n- WOW consulting : afficher les personnages/montures du compte du jeu World Of Warcraft avec l’API  Blizzard - API Blizzard\n- TFT Statistiques : Afficher l’historique des parties du jeu TeamFight Tactics avec l’API Riot - API Riot \nAuthentification Oauth2, récupération token",
      },
      {
        titre: "Projet 5 OC - Kanap",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/kanap.PNG`],
        url: "https://greg13013.github.io/P5_Kanap/",
        categorie: [CATEGORIE_PROJET.openclassroom, CATEGORIE_PROJET.javascript],
        courteDescription: "Projet 5 OpenClassroom - Site e-commerce canapé",
        competence: [COMPETENCE.javascript],
        description:
          "Création de la logique avec Javascript d’un site e-commerce \nRécupération des données d’une API puis les afficher \nStructuration d’un projet \nGérer les données de manière dynamique \nGestion d’un panier \nGestion d’un formulaire Contact avec vérification avant l’envoie pour éviter des erreurs éventuelles \nGestion des données lors de l’envoie à l’API \nInteraction avec un web service avec JavaScript \nGestion des événements JavaScript \nValidation des données issues de sources externes \nCréation d’un plan de test pour une application \nDéploiement avec github page",
      },
      {
        titre: "Projet 4 OC - La chouette agence",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/laChouetteAgence.PNG`],
        url: "https://greg13013.github.io/P4_LaChouetteAgence/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 4 OpenClassroom - Performance / SEO / Accessibilité",
        competence: ["Lighthouse"],
        description:
          "\nCréation d’un rapport d’analyse & d’optimisation d’un site web \nOptimisation du référencement du site web \nÉcrire un code HTML et CSS maintenable \nRéalisation d’une recherche des bonnes pratiques en développement web \nOptimisation de la taille et de la vitesse d’un site web \nAssurer l'accessibilité d'un site web \nValidation d’un site web avec W3C",
      },
      {
        titre: "Projet 3 OC - Ohmyfood",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/ohmyfood.PNG`],
        url: "https://greg13013.github.io/P3_Ohmyfood/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 3 OpenClassroom - Reproduction maquette avec animation",
        competence: ["HTML", "CSS", "SASS"],
        description:
          "Reproduction d’une maquette d’un site vitrine de restaurant  \nMise en place de SASS pour la maintenance du CSS \nMise en place de son environnement Front-End \nAssurer la cohérence graphique d'un site web \nImplémentation interface responsive \nMise en place d’une structure de navigation pour un site web \nMise en œuvre des effets CSS graphiques avancés \nUtilisation d’un système de gestion de versions pour le suivi du projet et son hébergement ",
      },
      {
        titre: "Projet 2 OC - Booki",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/booki.PNG`],
        url: "https://greg13013.github.io/P2_Booki/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 2 OpenClassroom - Reproduction maquette",
        competence: ["HTML", "CSS"],
        description:
          "Implémenter une interface responsive \nIntégrer du contenu conformément à une maquette",
      },
      {
        titre: "Eauservicedebebe",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/eauservicedebebe.PNG`],
        url: "https://eauservicedebebe.fr",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular],
        competence: [COMPETENCE.angular],
        courteDescription:
          "Angular - Création site web avec base de données SQL (Express - Sequelize) pour des prestations et conseils pour jeunes mamans",
        description:
          "Création site web avec base de données pour des services pour jeunes mamans, \nReproduction maquette, \nUtilisation de Angular pour le front et Express pour le back, \nConnexion utilisateur - Mise en place interface pour gérer des évènements (créer, modifier, supprimer), \nMise en production sur OVH",
      },
      {
        titre: "Site web - Jeux snake",
        image: [`${import.meta.env.VITE_URL}/assets/img/projets/snake.PNG`],
        url: "https://greg13013.github.io/snake/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.javascript, CATEGORIE_PROJET.jeu],
        courteDescription: "Javascript - Reproduction snake",
        competence: [COMPETENCE.javascript],
        description: "Reproduction du jeux snake en javascript",
      },
    ],
  },
};
