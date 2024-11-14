class Title {
    addTitle(container, text) {
        const title = document.createElement("h2");
        title.className = "title";
        title.textContent = text;
        container.appendChild(title);
    }
}
class Subtext {
    addSubtext(container, text) {
        const subtext = document.createElement("p");
        subtext.className = "subtext";
        subtext.textContent = text;
        container.appendChild(subtext);
    }
}
class Image {
    addImage(container, img) {
        const image = document.createElement("img");
        image.className = "image";
        image.src = img;
        container.appendChild(image);
    }
}
class Price {
    addPrice(container, text) {
        const price = document.createElement("p");
        price.className = "price";
        price.textContent = text;
        container.appendChild(price);
    }
}
class Author {
    addAuthor(container, text) {
        const author = document.createElement("p");
        author.className = "author";
        author.textContent = text;
        container.appendChild(author);
    }
}

//card classes that will be exported

export class PageHeading {
    constructor(title, image) {
        this.title = new Title();
        this.image = new Image();

        this.container = document.createElement("div");
        this.container.className = "page-heading";

        this.title.addTitle(this.container, title);
        this.image.addImage(this.container, image);
    }
}

export class SectionHeading {
    constructor(title, image) {
        this.title = new Title();
        this.image = new Image();

        this.container = document.createElement("div");
        this.container.className = "section-heading";

        this.title.addTitle(this.container, title);
        this.image.addImage(this.container, image);
    }
}

export class CustomerTestimonial {
    constructor(title, author) {
        this.title = new Title();
        this.author = new Author();

        this.container = document.createElement("div");
        this.container.className = "customer-testimonial";

        this.title.addTitle(this.container, title);
        this.author.addAuthor(this.container, author);
    }
}

export class MenuCard {
    constructor(title, subtext, price, image) {
        this.title = new Title();
        this.subtext = new Subtext();
        this.price = new Price();
        this.image = new Image();

        this.container = document.createElement("div");
        this.container.className = "menu-card";

        this.title.addTitle(this.container, title);
        this.subtext.addSubtext(this.container, subtext);
        this.price.addPrice(this.container, price);
        this.image.addImage(this.container, image);
    }
}

export class Card {
    constructor(title, subtext) {
        this.title = new Title();
        this.subtext = new Subtext();

        this.container = document.createElement("div");
        this.container.className = "card";

        this.title.addTitle(this.container, title);
        this.subtext.addSubtext(this.container, subtext);
    }
    addLine(text) {
        this.subtext.addSubtext(this.container, text);
    }
}
