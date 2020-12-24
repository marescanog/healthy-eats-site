class ContactForm {
    constructor() {
        this.form = document.getElementById('form');
        this.button = document.getElementById('submit-form');
        this.alert = document.querySelector(".alert");
        //Feilds
        this.name = document.getElementById('name');
        this.email = document.getElementById('email');
        this.number = document.getElementById('number');
        this.message = document.getElementById('message');
        this.events(this)
    }

    events(order) {
       // this.button.addEventListener("submit", () => this.showSucess(scr));

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            order.showSucess(order);
       })   ; 

    }

    showSucess(scr) {
        //Show Alert
        scr.alert.style.display = 'block';

        //Hide Alert after 3 seconds
        setTimeout(function(){
            scr.alert.style.display = 'none';
        }, 3000)

        scr.form.reset();
    }
}

export default ContactForm;