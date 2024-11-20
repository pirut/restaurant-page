//layout
// - Title Card
// - Testimonial Card
// - Plain card with hours
// - Plain Card with Location

import { PageHeading, CustomerTestimonial, Card } from "./components";

export class HomePage {
    constructor() {
        this.heading = new PageHeading("Welcome to Silly Sweets!");
        this.testimonial = new CustomerTestimonial(
            "Absolutely loved Silly Sweets! The desserts are as whimsical as they are delicious. The Chocolate Lava Carousel was a showstopper, and the staff made the whole experience even sweeter. Can't wait to come back for more sugar-filled adventures!",
            "Emily Swanson"
        );
        this.hours = new Card("Hours", "Mon: 1pm-3pm");
        this.hours.addLine("Tues: 12pm-1pm");
        this.hours.addLine("Weds: 1pm-2pm");
        this.hours.addLine("Thurs: 6am-7am");
        this.hours.addLine("Fri: 6am-6:01am");
        this.hours.addLine("Sat-Sun: CLOSED");
        this.location = new Card("Location", "123 Candy Lane Sweetville, FL 12345");

        this.container = document.createElement("div");
        this.container.className = "home";

        this.container.appendChild(this.heading.modal);
        this.container.appendChild(this.testimonial.modal);
        this.container.appendChild(this.hours.modal);
        this.container.appendChild(this.location.modal);
    }
}
