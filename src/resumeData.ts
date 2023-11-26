import { CATEGORIE_PROJET } from "./constantes";

export const DATA = {
  main: {
    nom: "Colli Grégory",
    statut: "Développeur web",
    image: "/src/assets/avatar_cp_big.jpg",
    bio: "Intéressé par l'informatique depuis mes 10ans, plutôt \"touche à tout\", de nature curieux avec une forte autonomie, j'ai décidé de m'orienter dans l'IT durant mes années d'études pour en apprendre en plus sur l'univers du développement.\nSuite à l'obtention de mon diplôme, j'ai dû choisir entre une carrière pro et une aventure personnelle dans l'univers de la pêche.\nLa crise du COVID a mis fin à ce projet de collaboration mais je n'ai jamais arrêté de suivre les actualités web, les technos et j'ai toujours poursuivi une veille technologique en pratiquant sur des projets perso.\nVoilà, pourquoi aujourd'hui, je suis disponible sur le marché du travail, en recherche active, plus motivé que jamais avec tout autant d'ambition.",
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
        url: "/src/CV-GREG-2023.pdf",
        className: "fab fa-solid fa-file-pdf",
      },
    ],
  },
  resume: {
    experienceProfessionelle: [
      {
        nom: "HR Team - Mission chez CEGID",
        titre: "Développeur web - React",
        date: "Mai 2022 - Décembre 2023",
        description:
          "Développeur front d'une équipe de 4 développeurs organisé en Agilité : sprint de 2 semaine, l'équipe s'appuie sur un architecte, une équipe design system, une équipe de production. \nDans le cadre du développement d'un nouveau produit from scratch qui s'imbrique à plusieurs solutions de l'entreprise à destination de l'univers de la comptabilité \nL'outil gère les besoins d'un cabinet comptable en termes de ressources, saisies des temps, frais, workflow \nTechnologies : \n•	DevOps : Azure DevOps \n•	CI/CD : Dev, Inte, prod \n•	Framework: React 18 - Typescript \n•	State Manager: Redux / redux toolkit \n•	UI Framework: MUI / Cegid Design System \n•	Gestionnaire de libraire: Jfrog npm \n•	Tests unitaires: Jest / RTL \n•	Qualité : Sonar \n•	Architecture: microservice API / DDD \n•	Notification web sockets: SignalR react",
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
          "Compétences acquises : Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS ;\nAjouter du contenu audio et vidéo en HTML5 ;\nAnimer les pages web avec CSS3 ;\nAppliquer les standards du web et les normes en vigueur ;\nConstruire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette) ;\nAméliorer le référencement naturel en utilisant les balises selon leur sémantique ;\nFaire réagir la page web en fonction des actions de l’utilisateur en JavaScript ;\nSe connecter à un service web pour exploiter des données tierces (API) ;\nGérer les comptes utilisateurs ;\nConcevoir un site maintenable grâce à la gestion des erreurs et exceptions ;\nCréer, gérer et afficher le contenu d’une base de données.",
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
        img: "/src/assets/img/competences/html-5.svg",
      },
      {
        nom: "JavaScript / TypeScript",
        img: "/src/assets/img/competences/typescript.svg",
      },
      {
        nom: "React",
        img: "/src/assets/img/competences/react.svg",
      },
      {
        nom: "Redux",
        img: "/src/assets/img/competences/redux.svg",
      },
      {
        nom: "Jest",
        img: "/src/assets/img/competences/jest.svg",
      },
      {
        nom: "NextJS",
        img: "/src/assets/img/competences/nextjs.svg",
      },
      {
        nom: "Angular",
        img: "/src/assets/img/competences/angular.svg",
      },
      {
        nom: "SQL",
        img: "/src/assets/img/competences/mysql.svg",
      },
      {
        nom: "PHP / PDO",
        img: "/src/assets/img/competences/php.svg",
      },
      {
        nom: "Symfony",
        img: "/src/assets/img/competences/symfony.svg",
      },
      {
        nom: "Express",
        img: "/src/assets/img/competences/express.svg",
      },
      {
        nom: "Git",
        img: "/src/assets/img/competences/git.svg",
      },
      {
        nom: "Azure DevOps",
        img: "/src/assets/img/competences/microsoft-azure.svg",
      },
    ],
  },
  portfolio: {
    projets: [
      {
        titre: "WinWinDeveloppement - Application",
        image: "/src/assets/projets/winwin.png",
        url: "https://www.facebook.com/winwindeveloppementformation",
        categorie: [
          CATEGORIE_PROJET.perso,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.symfony,
          CATEGORIE_PROJET.php,
        ],
        courteDescription:
          "Logiciel métier de gestion de formation et d'apprentissage par le jeu React / Symfony",
        competence: ["React", "Redux", "MUI", "Symfony"],
        description:
          "Dans une équipe de 3 développeurs, pour répondre aux besoins de gestion d’un Organisme de formation : développement d’une application métier en React pour le front et Symfony pour le back \nDéveloppement de jeux interactifs (monopoly, qui veut gagner des millions) en React. \nBack : Réalisation d’api en architecture MVC, gestion du trail d’audit, injection du contexte utisateur via listener, gestion du JWT \nHébergement VPS chez OVH pour une autonomie et gestion totale du serveur web. \nHébergement et installation sur VPS de l’ERP/CRM Dolibarr et serveur de visio-conférence BigBlueButton.",
      },
      {
        titre: "WinWinDeveloppement - Escape game",
        image: "/src/assets/projets/escape.png",
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
        competence: ["React", "Symfony"],
        description:
          "Jeu éducatif pour les apprenants en formation, chasse aux trésors avec énigme \nLe formateur peut créer et personnaliser le jeu (choix de la carte, choix de l'énigme, nbre de vie, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "WinWinDeveloppement - Qui veut gagner des connaissances",
        image: "/src/assets/projets/qvgdc.png",
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
        competence: ["React", "Symfony"],
        description:
          "Jeu éducatif pour les apprenants en formation avec un système de palier pour le score \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "WinWinDeveloppement - 60 secondes chrono",
        image: "/src/assets/projets/60secondeChrono.png",
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
        competence: ["React", "Symfony"],
        description:
          "Jeu éducatif pour les apprenants en formation avec un système de palier et un QCM \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "WinWinDeveloppement - Le grand quizz",
        image: "/src/assets/projets/leGrandQuizz.png",
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
        competence: ["React", "Symfony"],
        description:
          "Jeu éducatif pour les apprenants en formation avec un système de palier et un QCM \nLe formateur peut créer et personnaliser le jeu (choix des réponses, choix des questions, chrono) \nFront: React \nBack: Symfony",
      },
      {
        titre: "WinWinDeveloppement - Site vitrine",
        image: "/src/assets/projets/winwinVitrine.png",
        url: "https://natam.fr/next/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.next],
        courteDescription: "Site vitrine pour l'application WinWinDéveloppement",
        competence: ["Next", "Bootstrap"],
        description:
          "Mise en place d’un site vitrine de présentation de l’application WinWinDéveloppement \nReproduction maquette figma \nAccessibilité + responsive",
      },
      {
        titre: "Close Info",
        image: "/src/assets/projets/closeInfo.png",
        url: "https://close-info.fr/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react, CATEGORIE_PROJET.express],
        courteDescription:
          "Application mobile - Réseau professionnel 100% dédié Closing, \nMise en relation entre closers et infopreneurs, \nDisponible sur Android & IOS",
        competence: ["React", "Redux", "socket.io", "Express"],
        description:
          "Front - React Native, Back - Express \nRéseau professionnel 100% dédié Closing \nMise en relation entre closers et infopreneurs \nPremière communauté francophone \nDisponible sur google store & app store",
      },
      {
        titre: "Natam",
        image: "/src/assets/projets/natam.png",
        url: "https://natam.fr/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.javascript, CATEGORIE_PROJET.react],
        courteDescription: "Site vitrine Natam + application administration en React",
        competence: ["Javascript", "React", "Bootstrap", "Redux"],
        description:
          "Présentation de l’équipe, des différents services, mise à disposition d’un catalogue \nMise en place d’un chatbot \nMise en place d’un suivi d’actualité avec l’API de twitter \nCréation d’un formulaire de devis / estimation \nCréation de l'API Natam avec SpringBoot \nMise en place CRUD \nMise en place route publique et sécurisé \nCréation token JWT (SpringSecurity) \nCréation d'une application web React \nUtilisation hook de React + hook de React redux \nMise en place route avec react router \nMise en place authentification + Stockage JWT dans cookie sécurisé \nAfficher les newsletters \nAfficher les devis et estimation de l’entreprise avec filtre selon statut (en cours ou terminer) \nDéploiement en production sur OVH",
      },
      {
        titre: "Projet 7 OC - Groupomania",
        image: "/src/assets/projets/groupomania.PNG",
        url: "https://colligregory-groupomania.netlify.app",
        categorie: [
          CATEGORIE_PROJET.openclassroom,
          CATEGORIE_PROJET.react,
          CATEGORIE_PROJET.express,
        ],
        courteDescription:
          "Projet 7 Openclassroom - Création d’un réseau social pour entreprise (Frontend et Backend), \nHébergement sur Netlify",
        competence: ["React", "Redux", "Netlify"],
        description:
          "Front - React, Back - Express \nCréation d’un réseau social pour entreprise (Frontend et Backend) \nStructuration d’un projet React \nUtilisation des différents hooks de React (useState, useEffect, useRef) et les hooks de redux (useSelector, useDispatch) \nMise en place thème sombre / thème lumineux avec useContext \nUtilisation de Axios pour les appels à l’API \nGestion des routes avec react-router-dom \nGestion authentification d’un utilisateur \nGestion de la partie Administrateur \nGestion des posts et commentaires \nUtilisation de Redux avec react-redux, redux \nUtilisation de Sass \nUtilisation de materialize \nCréation d’une API avec Express, Base de donnée Mysql, utilisation de sequelize, respect sécurité OWASP \nMaintien d’un schéma d’architecture de l’application",
      },
      {
        titre: "Roulette casino",
        image: "/src/assets/projets/roulette.PNG",
        url: "https://natam-roulette.netlify.app",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular],
        courteDescription: "Roulette crypto avec Metamask, \nFront - Angular, \nBack - Express",
        competence: ["Angular", "Express", "web3", "Git"],
        description:
          "Front - Angular, \nBack - Express, \nApplication web d'une roulette de casino avec la cryptomonnaie,\nConnexion à Metamask, \nInterface de création de machine à sous, \nUtilisation de httpClient pour des appels à l'API, \nUtilisation de Heroku pour le déploiement à partir de Git, \nMise en place d'une documentation, \nUtilisation de git pour le versionning, \nCréation version mobile avec Ionic",
      },
      {
        titre: "Projet 6 OC - Piiquante",
        image: "/src/assets/projets/piiquante.PNG",
        url: "https://nostalgic-jennings-992350.netlify.app/",
        categorie: [CATEGORIE_PROJET.openclassroom, CATEGORIE_PROJET.express],
        courteDescription: "Projet 6 OpenClassroom - Application d'avis gastronomiques",
        competence: ["Javascript", "Express"],
        description:
          "Création d’une API avec EXPRESS et MongoDB pour un site de sauce piquante \nGestion routes, controllers, modèles \nGestion des middlewares \nSécurité token sur toutes les routes à part login et signup et respect sécurité OWASP \nImplémentation d’un modèle logique de données conformément à la réglementation \nStockage des données de manière sécurisée \nMettre en œuvre des opérations CRUD de manière sécurisée \nDéploiement sur Heroku pour les backend et Netlify pour les frontend",
      },
      {
        titre: "Clash Royale API",
        image: "/src/assets/projets/clashRoyaleAPI.PNG",
        url: "https://clashroyaleapi.netlify.app",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react],
        courteDescription: "Utilisation de l'API du jeu Clash Royale, \nHébergement sur Netlify",
        competence: ["React", "Netlify"],
        description:
          "Front - React, \nUtilisation de l'API publique du jeu mobile Clash Royale \nUtilisation des différents hooks : \n- useState \n- useEffect \n -useRef \n -useContext \nUtilisation de react-materialize pour le style",
      },
      {
        titre: "Portfolio",
        image: "/src/assets/projets/portfolio.PNG",
        url: "#",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.react],
        courteDescription: "Portfolio avec React",
        competence: ["React"],
        description:
          "Utilisation de React pour faire mon portfolio \nUtilisation des différents hooks : \n- useState \n- useEffect \n- useRef \nUtilisation de react-bootstrap pour le style",
      },
      {
        titre: "Site Web - Utilisation API public",
        image: "/src/assets/projets/tft.PNG",
        url: "https://colli-gregory.alwaysdata.net/blizzardTft/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular, CATEGORIE_PROJET.php],
        courteDescription:
          "Angular \nExploitation API publique pour l'univers du gaming Blizzard & Riot",
        competence: ["Angular"],
        description:
          "Application front Angular avec exploitation API publique pour l'univers du gaming :\n- WOW consulting : afficher les personnages/montures du compte du jeu World Of Warcraft avec l’API  Blizzard - API Blizzard\n- TFT Statistiques : Afficher l’historique des parties du jeu TeamFight Tactics avec l’API Riot - API Riot \nAuthentification Oauth2, récupération token",
      },
      {
        titre: "Projet 5 OC - Kanap",
        image: "/src/assets/projets/kanap.PNG",
        url: "https://greg13013.github.io/P5_Kanap/",
        categorie: [CATEGORIE_PROJET.openclassroom, CATEGORIE_PROJET.javascript],
        courteDescription: "Projet 5 OpenClassroom - Site e-commerce canapé",
        competence: ["Javascript"],
        description:
          "Création de la logique avec Javascript d’un site e-commerce \nRécupération des données d’une API puis les afficher \nStructuration d’un projet \nGérer les données de manière dynamique \nGestion d’un panier \nGestion d’un formulaire Contact avec vérification avant l’envoie pour éviter des erreurs éventuelles \nGestion des données lors de l’envoie à l’API \nInteraction avec un web service avec JavaScript \nGestion des événements JavaScript \nValidation des données issues de sources externes \nCréation d’un plan de test pour une application \nDéploiement avec github page",
      },
      {
        titre: "Projet 4 OC - La chouette agence",
        image: "/src/assets/projets/laChouetteAgence.PNG",
        url: "https://greg13013.github.io/P4_LaChouetteAgence/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 4 OpenClassroom - Performance / SEO / Accessibilité",
        competence: ["Lighthouse"],
        description:
          "\nCréation d’un rapport d’analyse & d’optimisation d’un site web \nOptimisation du référencement du site web \nÉcrire un code HTML et CSS maintenable \nRéalisation d’une recherche des bonnes pratiques en développement web \nOptimisation de la taille et de la vitesse d’un site web \nAssurer l'accessibilité d'un site web \nValidation d’un site web avec W3C",
      },
      {
        titre: "Projet 3 OC - Ohmyfood",
        image: "/src/assets/projets/ohmyfood.PNG",
        url: "https://greg13013.github.io/P3_Ohmyfood/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 3 OpenClassroom - Reproduction maquette avec animation",
        competence: ["HTML", "CSS", "SASS"],
        description:
          "Reproduction d’une maquette d’un site vitrine de restaurant  \nMise en place de SASS pour la maintenance du CSS \nMise en place de son environnement Front-End \nAssurer la cohérence graphique d'un site web \nImplémentation interface responsive \nMise en place d’une structure de navigation pour un site web \nMise en œuvre des effets CSS graphiques avancés \nUtilisation d’un système de gestion de versions pour le suivi du projet et son hébergement ",
      },
      {
        titre: "Projet 2 OC - Booki",
        image: "/src/assets/projets/booki.PNG",
        url: "https://greg13013.github.io/P2_Booki/",
        categorie: [CATEGORIE_PROJET.openclassroom],
        courteDescription: "Projet 2 OpenClassroom - Reproduction maquette",
        competence: ["HTML", "CSS"],
        description:
          "Implémenter une interface responsive \nIntégrer du contenu conformément à une maquette",
      },
      {
        titre: "Eauservicedebebe",
        image: "/src/assets/projets/eauservicedebebe.PNG",
        url: "https://eauservicedebebe.fr",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.angular],
        competence: ["Angular"],
        courteDescription:
          "Angular - Création site web avec base de données SQL (Express - Sequelize) pour des prestations et conseils pour jeunes mamans",
        description:
          "Création site web avec base de données pour des services pour jeunes mamans, \nReproduction maquette, \nUtilisation de Angular pour le front et Express pour le back, \nConnexion utilisateur - Mise en place interface pour gérer des évènements (créer, modifier, supprimer), \nMise en production sur OVH",
      },
      {
        titre: "Site web - Jeux snake",
        image: "/src/assets/projets/snake.PNG",
        url: "https://greg13013.github.io/snake/",
        categorie: [CATEGORIE_PROJET.perso, CATEGORIE_PROJET.javascript, CATEGORIE_PROJET.jeu],
        courteDescription: "Javascript - Reproduction snake",
        competence: ["Javascript"],
        description: "Reproduction du jeux snake en javascript",
      },
    ],
  },
};
