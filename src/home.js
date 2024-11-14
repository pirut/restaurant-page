import { PageHeading, CustomerTestimonial, Card } from "./components";

export class HomePage {
    constructor() {
        this.heading = new PageHeading("Welcome to Silly Sweets!", "https://utfs.io/f/fvuNAVBL56INkMR5rIsA6321UtOyWpSqvReVTiwQ97PcGlCK");
        this.card = new Card("Testing", "This is a test!");

        this.container = document.createElement("div");
        this.container.className = "home";

        this.container.appendChild(this.heading.container);
        this.container.appendChild(this.card.container);
    }
}
