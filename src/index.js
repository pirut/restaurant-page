import "./style.css";
import { HomePage } from "./home";
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";

const home = new HomePage();
const menu = new MenuPage();
const contact = new ContactPage();
const container = document.querySelector("#content");

const buttons = document.querySelectorAll(".nav-button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        console.log(button);
        switch (button.id) {
            case "nav-home":
                container.appendChild(home.container);
                break;
            case "nav-menu":
                container.appendChild(menu.container);
                break;
            case "nav-contact":
                container.appendChild(contact.container);
                break;
        }
    });
});

container.appendChild(home.container);
