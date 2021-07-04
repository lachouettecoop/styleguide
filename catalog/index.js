import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Bienvenue",
    content: pageLoader(() => import("./BIENVENUE.md"))
  },
  {
    title: "Graphisme",
    pages: [
      {
        path: "/logos",
        title: "Logos",
        content: pageLoader(() => import("./logos.md"))
      },
      {
        path: "/couleurs",
        title: "Couleurs",
        content: pageLoader(() => import("./couleurs.md"))
      },
      {
        path: "/typographie",
        title: "Typographie",
        content: pageLoader(() => import("./typographie.md"))
      }
    ]
  },
  {
    title: "Contenu",
    pages: [
      {
        path: "/vocabulaire",
        title: "Le vocabulaire",
        content: pageLoader(() => import("./vocabulaire.md"))
      },
      {
        path: "/inclusivite",
        title: "Inclusivité et bienveillance",
        content: pageLoader(() => import("./inclusivite.md"))
      }
    ]
  },
  {
    title: "Outils de communication",
    path: "/outils",
    content: pageLoader(() => import("./outils.md"))
  }
];

const theme = {
  linkColor: "#ba7c40",
  lightColor: "#d7d8d9",
  pageHeadingBackground: "#3A5447",
  sidebarColorText: "#3A5447",
  sidebarColorTextActive: "#ba7c40",
  brandColor: "#3A5447",
  navBarBackground: "#d7daba",
  navBarTextColor: "#3A5447",
  fontFamily: "'Cabin', sans-serif",
  fontHeading: "'Montserrat', sans-serif"
};

ReactDOM.render(
  <Catalog
    title="Le Chouette Guide"
    pages={pages}
    logoSrc="Logo_LCC_2017_72DPI.jpg"
    theme={theme}
    styles={[
      "https://fonts.googleapis.com/css?family=Cabin:400,400i,700,700i|Montserrat"
    ]}
  />,
  document.getElementById("catalog")
);
