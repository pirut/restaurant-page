// - Title Card
// - person card x 3

import { PageHeading, PersonCard } from "./components";

export class ContactPage {
    constructor() {
        this.heading = new PageHeading("Contact Us");
        this.billybob = new PersonCard("Billy Bob", "CEO", "(123) 456-7890", "billybob@email.com");
        this.bobbilly = new PersonCard("Bob Billy", "CTO", "(098 765-4321)", "bobbilly@email.com");

        this.container = document.createElement("div");
        this.container.className = "contact";

        this.container.appendChild(this.heading.modal);
        this.container.appendChild(this.billybob.modal);
        this.container.appendChild(this.bobbilly.modal);
    }
}
