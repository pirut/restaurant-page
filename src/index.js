import { PageHeading } from "./components";

const contentDiv = document.querySelector("#content");

const heading = new PageHeading("Testing", "https://utfs.io/f/fvuNAVBL56INkMR5rIsA6321UtOyWpSqvReVTiwQ97PcGlCK");

contentDiv.appendChild(heading.container);
