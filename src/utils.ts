import angularIcon from "./assets/img/competences/angular.svg";
import bootstrapIcon from "./assets/img/competences/bootstrap.svg";
import cssIcon from "./assets/img/competences/css-3.svg";
import expressIcon from "./assets/img/competences/express.svg";
import gitIcon from "./assets/img/competences/git.svg";
import htmlIcon from "./assets/img/competences/html-5.svg";
import javascriptIcon from "./assets/img/competences/javascript.svg";
import lighthouseIcon from "./assets/img/competences/lighthouse.svg";
import muiIcon from "./assets/img/competences/material-ui.svg";
import sqlIcon from "./assets/img/competences/mysql.svg";
import netlifyIcon from "./assets/img/competences/netlify.svg";
import { default as nextIcon, default as nextjsIcon } from "./assets/img/competences/nextjs.svg";
import nodejsIcon from "./assets/img/competences/nodejs.svg";
import phpIcon from "./assets/img/competences/php.svg";
import reactIcon from "./assets/img/competences/react.svg";
import reduxIcon from "./assets/img/competences/redux.svg";
import sassIcon from "./assets/img/competences/sass.svg";
import socketIoIcon from "./assets/img/competences/socket.io.svg";
import symfonyIcon from "./assets/img/competences/symfony.svg";
import typescriptIcon from "./assets/img/competences/typescript.svg";
import web3Icon from "./assets/img/competences/web3js.svg";

export const getIcone = (element: string) => {
  switch (element.toLowerCase()) {
    case "react":
      return reactIcon;

    case "nextjs":
      return nextjsIcon;

    case "css":
      return cssIcon;

    case "angular":
      return angularIcon;

    case "nodejs":
      return nodejsIcon;

    case "typescript":
      return typescriptIcon;

    case "javascript":
      return javascriptIcon;

    case "express":
      return expressIcon;

    case "html":
      return htmlIcon;

    case "git":
      return gitIcon;

    case "mysql":
      return sqlIcon;

    case "php":
      return phpIcon;

    case "symfony":
      return symfonyIcon;

    case "sass":
      return sassIcon;

    case "lighthouse":
      return lighthouseIcon;

    case "netlify":
      return netlifyIcon;

    case "redux":
      return reduxIcon;

    case "web3":
      return web3Icon;

    case "mui":
      return muiIcon;

    case "socket.io":
      return socketIoIcon;

    case "bootstrap":
      return bootstrapIcon;

    case "next":
      return nextIcon;

    default:
      return undefined;
  }
};
