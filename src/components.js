class Container {
    constructor() {
        this.container = document.createElement("div");
    }
    set class(className) {
        this.container.className = className;
    }
    addTitle(text) {
        const title = document.createElement("h2");
        title.className = "title";
        title.textContent = text;
        this.container.appendChild(title);
    }
    addSubtext(text) {
        const subtext = document.createElement("p");
        subtext.className = "subtext";
        subtext.textContent = text;
        this.container.appendChild(subtext);
    }
    addImage(img) {
        const image = document.createElement("img");
        image.className = "image";
        image.src = img;
        this.container.appendChild(image);
    }
    addPrice(text) {
        const price = document.createElement("p");
        price.className = "price";
        price.textContent = text;
        this.container.appendChild(price);
    }
    addAuthor(text) {
        const author = document.createElement("p");
        author.className = "author";
        author.textContent = text;
        this.container.appendChild(author);
    }
}

//card classes that will be exported

export class PageHeading {
    #image = "https://utfs.io/f/fvuNAVBL56INC3Kb5ipEilKgjpYrSaM2wxX3DW5Tk0qJI7ov";
    constructor(title) {
        this.container = new Container();
        this.container.class = "page-heading";
        this.container.addImage(this.#image);
        this.container.addTitle(title);
        this.container.addImage(this.#image);
    }
    get modal() {
        return this.container.container;
    }
}

export class PersonCard {
    constructor(name, job, phone, email) {
        this.container = new Container();
        this.container.class = "person-card";
        this.container.addTitle(name);
        this.container.addSubtext(job);
        this.container.addSubtext(phone);
        this.container.addSubtext(email);
    }
    get modal() {
        return this.container.container;
    }
}

export class SectionHeading {
    constructor(title, image) {
        this.container = new Container();
        this.container.class = "section-heading";
        this.container.addTitle(title);
        this.container.addImage(image);
    }
    get modal() {
        return this.container.container;
    }
}

export class CustomerTestimonial {
    constructor(text, author) {
        this.container = new Container();
        this.container.class = "customer-testimonial";
        this.container.addSubtext(text);
        this.container.addAuthor(author);
    }
    get modal() {
        return this.container.container;
    }
}

export class MenuCard {
    constructor(title, subtext, price, image) {
        this.container = new Container();
        this.container.class = "menu-card";
        this.container.addTitle(title);
        this.container.addSubtext(subtext);
        this.container.addPrice(price);
        this.container.addImage(image);
    }
    get modal() {
        return this.container.container;
    }
}

export class Card {
    constructor(title, subtext) {
        this.container = new Container();
        this.container.class = "card";
        this.container.addTitle(title);
        this.container.addSubtext(subtext);
    }
    get modal() {
        return this.container.container;
    }
    addLine(subtext) {
        this.container.addSubtext(subtext);
    }
}
