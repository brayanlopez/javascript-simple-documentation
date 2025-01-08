import { documentData } from "./data.js";

const createMainDocumentation = () => {
  let container = document.getElementById("main-doc");

  let elements = documentData.map((data) => {
    let section = document.createElement("section");
    section.className += "main-section";
    section.id += data.id;
    section.innerHTML = `
    <header>${data.title}</header>
    <article>${data.content}</article>
    `;
    return section;
  });

  elements.map((element) => container.appendChild(element));
};

const createSidebar = () => {
  let navbar = document.getElementById("links");

  let navbarElements = documentData.map((data) => {
    let navItem = document.createElement("a");
    navItem.className += "nav-link";
    navItem.href = `#${data.id}`;
    navItem.innerHTML = `${data.title}`;
    return navItem;
  });

  navbarElements.map((element) => navbar.appendChild(element));
};

const main = () => {
  createMainDocumentation();
  createSidebar();
};

main();
