class Accordion {
    constructor() {
        this.icon1 = document.querySelector(".accordion--icon-up")
        this.accordion1 = document.querySelector(".accordion--btn-trigger")
        var acc = document.getElementsByClassName(".accordion--btn-trigger");

        this.events()
    }

    events() {
        this.accordion1.addEventListener("click", () => this.accordion1Toggle1());
    }

    accordion1Toggle1() {
        this.icon1.classList.toggle("accordion--icon-down")
        console.log(this.accordion1.nextElementSibling)
        var panel = this.accordion1.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    }

}
export default Accordion