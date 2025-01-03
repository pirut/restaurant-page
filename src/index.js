import "./style.css";
import { HomePage } from "./home";
import { MenuPage } from "./menu";

const home = new HomePage();
const menu = new MenuPage();
const container = document.querySelector("#content");

const buttons = document.querySelectorAll("nav");

container.appendChild(menu.container);
