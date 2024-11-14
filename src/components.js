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
    constructor() {
        this.title = new Title();
        this.image = new Image();
        this.container = document.createElement("div");
    }
    build(title, image) {
        this.title.addTitle(this.container, title);
        this.image.addImage(this.container, image);
        return this.container;
    }
}
