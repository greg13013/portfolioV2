import { COMPETENCE } from "./constantes";

export const getIcone = (element: string) => {
  switch (element) {
    case COMPETENCE.react:
      return "./assets/img/competences/react.svg";

    case COMPETENCE.nextjs:
      return "./assets/img/competences/nextjs.svg";

    case COMPETENCE.css:
      return "./assets/img/competences/css-3.svg";

    case COMPETENCE.angular:
      return "./assets/img/competences/angular.svg";

    case COMPETENCE.nodejs:
      return "./assets/img/competences/nodejs.svg";

    case COMPETENCE.typescript:
      return "./assets/img/competences/typescript.svg";

    case COMPETENCE.javascript:
      return "./assets/img/competences/javascript.svg";

    case COMPETENCE.express:
      return "./assets/img/competences/express.svg";

    case COMPETENCE.html:
      return "./assets/img/competences/html-5.svg";

    case COMPETENCE.git:
      return "./assets/img/competences/git.svg";

    case COMPETENCE.mysql:
      return "./assets/img/competences/mysql.svg";

    case COMPETENCE.php:
      return "./assets/img/competences/php.svg";

    case COMPETENCE.symfony:
      return "./assets/img/competences/symfony.svg";

    case COMPETENCE.sass:
      return "./assets/img/competences/sass.svg";

    case COMPETENCE.lighthouse:
      return "./assets/img/competences/lighthouse.svg";

    case COMPETENCE.netlify:
      return "./assets/img/competences/netlify.svg";

    case COMPETENCE.redux:
      return "./assets/img/competences/redux.svg";

    case COMPETENCE.web3:
      return "./assets/img/competences/web3js.svg";

    case COMPETENCE.mui:
      return "./assets/img/competences/material-ui.svg";

    case COMPETENCE.socketio:
      return "./assets/img/competences/socket.io.svg";

    case COMPETENCE.bootstrap:
      return "./assets/img/competences/bootstrap.svg";

    default:
      return undefined;
  }
};
