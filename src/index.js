import "./style.css";
import { HomePage } from "./home";
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";

const home = new HomePage();
const menu = new MenuPage();
const contact = new ContactPage();
const container = document.querySelector("#content");

const buttons = document.querySelectorAll("nav");

container.appendChild(contact.container);
