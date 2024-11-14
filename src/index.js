import { HomePage } from "./home";

const home = new HomePage();
const container = document.querySelector("#content");

container.appendChild(home.container);
