// - Title Card
// - Section Heading: Beverages
//     - 2 Menu items
// - Section Heading: Sides
//     - 2 menu items
// - Section Heading: Main dishes
//     - 2 menu items
// - Section Heading: Deserts
//     - 2 menu items

import { MenuCard, PageHeading, SectionHeading } from "./components";

export class MenuPage {
    constructor() {
        this.heading = new PageHeading("Menu");
        this.beverages = new SectionHeading("Beverages");
        this.water = new MenuCard(
            "Water",
            "Tasty water, very refreshing",
            "$45",
            "https://www.thespruceeats.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg"
        );
        this.chocolateMilk = new MenuCard(
            "Chocolate Milk",
            "Yummy milk, straight from a brown cow",
            "$50",
            "https://i5.walmartimages.com/seo/Great-Value-Milk-1-Lowfat-Chocolate-Gallon-Plastic-Jug_addfd6e0-ef78-44cc-a103-7fc0552934d6.6e1af96b00d0eff2172e9543b25149b4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        );
        this.sides = new SectionHeading("Sides");
        this.mac = new MenuCard(
            "Mac & Cheese",
            "MMMMMMMMMACCCCCC",
            "$100",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXsZ6cnbmehMAIgtEFt4S5nuds4JuusO5YSUxquVucqZ0RagqeDHxkMBRPpWcFTnzmKY2FbKhUWT87YAjAxvbYAdYpmNAQoVQVQmKKrMnuw1Ao-P1hFQr7dObRNPZ-&usqp=CAc"
        );
        this.beans = new MenuCard(
            "Beans",
            "It's beans",
            "Free",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcWyeXyWGF3cMA1e8JB383VZmpzUcxNWDdZmt9d5K4pHGZX-TZAMxrR9-UAk7Yx_afwuYxBTrHBHN96rsuq-3ByA9cQ0S2ZpG9fb7XnxPKytTQ514rZOO87lpYO4ux27j9WoePE1qnXvqO7A&usqp=CAc"
        );
        this.mains = new SectionHeading("Main Items");
        this.cake = new MenuCard(
            "Cake",
            "Eat it like its your birthday",
            "$23",
            "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
        );
        this.steak = new MenuCard("Steak", "A tasty steak", "$3", "https://whitneybond.com/wp-content/uploads/2021/06/steak-marinade-13.jpg");

        this.container = document.createElement("div");
        this.container.className = "menu";

        this.container.appendChild(this.heading.modal);
        this.container.appendChild(this.beverages.modal);
        this.container.appendChild(this.water.modal);
        this.container.appendChild(this.chocolateMilk.modal);
        this.container.appendChild(this.sides.modal);
        this.container.appendChild(this.mac.modal);
        this.container.appendChild(this.beans.modal);
        this.container.appendChild(this.mains.modal);
        this.container.appendChild(this.cake.modal);
        this.container.appendChild(this.steak.modal);
    }
}
