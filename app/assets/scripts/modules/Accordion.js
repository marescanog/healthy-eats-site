class Accordion {
    constructor() {
        var icon = document.querySelectorAll(".accordion--icon-up");
        var acc = document.querySelectorAll(".accordion--btn-trigger");
        this.events(acc, icon)
    }

    events(acc, icon) {
        acc[0].addEventListener("click", () => this.toggleAccordion(acc[0], icon[0]));
        acc[1].addEventListener("click", () => this.toggleAccordion(acc[1], icon[1]));
        acc[2].addEventListener("click", () => this.toggleAccordion(acc[2], icon[2]));
        acc[3].addEventListener("click", () => this.toggleAccordion(acc[3], icon[3]));
        acc[4].addEventListener("click", () => this.toggleAccordion(acc[4], icon[4]));

    }

    toggleAccordion(item, arrow) {
        var panel = item.nextElementSibling;
        arrow.classList.toggle("accordion--icon-down")
        panel.classList.toggle("accordion__panel__expanded")
    }
}
export default Accordion