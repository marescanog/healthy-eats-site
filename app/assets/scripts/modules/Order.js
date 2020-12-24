import Meal from './Meal_item'
import flatpickr from "../../images/otherUIElements/flatpickr";

class Order{
    constructor() {
        this.fp = flatpickr('#flatpickr',{
            "disable": [
              function(date) {
              // return true to disable
              return (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 2
              || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5);
                }
              ],
              "locale": {
                  "firstDayOfWeek": 0 // start week on Sunday
              },
              minDate: new Date().fp_incr(2),
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d",             
              });

        //Form Values
        this.form = document.getElementById('form');
        this.checkBox = document.getElementById('terms-checkbox');
        //label feild input values
        this.weeksSelect = document.getElementById('weeks');
        this.mealSelect = document.getElementById('meal-plan');
        this.calories = document.getElementById('calories');
        this.dateSelect = document.getElementById('flatpickr');
        this.email = document.getElementById('email-address');
        this.inputArr = [
            document.getElementById('full-name'), 
            document.getElementById('mobile-number'),
            document.getElementById('Address'),
        ];       
        //text display
        this.priceDisplay = document.getElementById('price-display');
        this.mealNameDisplay = document.getElementById('meal-name-display');
        this.weekNumDisplay = document.getElementById('week-number-display');
        this.weekPluralDisplay = document.getElementById('week-display-plural');
        this.deliveryChargeDisplay = document.getElementById('delivery-charge-display');
        this.totalCost = document.getElementById('total-cost');
        //Error Feilds
        this.dateError = document.getElementById('dateError');
        this.emailError = document.getElementById('emailError');
        this.errorFeildArr = [
            document.getElementById('nameError'),
            document.getElementById('contact-numberError'), 
            document.getElementById('addressError'),
        ];
        //Modals
        this.modalNoticeOverlay = document.getElementById('modal-notice');
        this.button_closeModalNotice = document.getElementById('button-close-notif');
        this.modalNotif = document.getElementById('modal-notif');
        this.errorModalOverlay = document.getElementById('modal-error-overlay');
        this.errorModal = document.getElementById('modal-error');
        this.errorModalCloseButton = document.getElementById('button-close-error');
        this.termsModalOverlay = document.getElementById('modal-terms-notif-overlay');
        this.termsModal = document.getElementById('modal-terms-notif');
        this.termsModalCloseButton = document.getElementById('button-close-terms-notif');
        //Data
        this.meals = {
            "Cal-Light": new Meal("Calorie Light", 1500, 800),
            "Cal-Reg": new Meal("Calorie Regular", 2300, 1200),
            "Protein-Reg": new Meal("Hi-Protein Regular", 2800, 1400),
            "Protein-Heavy": new Meal("Hi-Protein Heavy", 3500, 2100),
            "Keto-Light": new Meal("Keto light", 1800, 900),
            "Keto-Reg": new Meal("Keto Regular", 2300, 1350),
            "Keto-Heavy": new Meal("Keto heavy", 2800, 1800)
        };        
        this.events(this)
    }

    events(order) {
       //Modals
       this.button_closeModalNotice.addEventListener("click", () => this.toggle_ModalNotice());
       this.errorModalCloseButton.addEventListener("click", () => this.toggleModalError());
       this.termsModalCloseButton.addEventListener("click", () => this.toggleModalTerms());
        //Forms
       this.mealSelect.addEventListener('change', () => this.updateCalories());
       this.weeksSelect.addEventListener('change', () => this.updatePricePerWeek()); 

       this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            order.errorValidation();
       })   ; 
    }

    toggleModalTerms() {
        this.termsModalOverlay.classList.toggle("modal-overlay--show-modal");
        this.termsModal.classList.toggle("modal--box--show");
        this.termsModal.classList.toggle("open");
        this.termsModal.classList.toggle("close");
    }

    toggleModalError() {
        this.errorModalOverlay.classList.toggle("modal-overlay--show-modal");
        this.errorModal.classList.toggle("modal--box--show");
        this.errorModal.classList.toggle("open");
        this.errorModal.classList.toggle("close");
    }

    toggle_ModalNotice(){
        this.modalNoticeOverlay.classList.toggle("modal-overlay--show-modal");
    }

    errorValidation(){
        var isEmailValid = this.emailValidation();
        var isDateValid = this.dateValidation();
        var isDataValid = this.checkRequired();

        if (isEmailValid && isDateValid && isDataValid) {
            if(!this.checkBox.checked) {
                //Show Terms Modal
                this.toggleModalTerms();
            } else {

                //Redirect To Sucess Page
                window.location.replace("success.html");
            }
        }
        else {
            //Show Error Modal
            this.toggleModalError();
        }
    }

    emailValidation() {
        var retval = false;
        if(this.email.value.trim() === ''){
            this.emailError.classList.toggle("order-form--contents--feilds--red", true)
        }
        else if(!(this.isValidEmail(this.email.value))) {
            this.emailError.classList.toggle("order-form--contents--feilds--red", true)
        } else {
            this.emailError.classList.toggle("order-form--contents--feilds--red", false)
            retval = true;
        }
        return retval;
    }

    dateValidation() {
        var retval = false;
        //console.log(order.fp.selectedDates);
        if(this.fp.selectedDates.length === 0) {
            this.dateError.classList.toggle("order-form--contents--feilds--red", true);
        } else {
            this.dateError.classList.toggle("order-form--contents--feilds--red", false);
            retval = true;
        }
        return retval;
    }

    checkRequired() {
        //loop through array inputArr & modify array errorFeildArr
        var retvalArr = [
            false,
            false,
            false,
        ];
        var i;
        for (i = 0; i < this.inputArr.length; i++) {
            if(this.inputArr[i].value.trim() === '') {
                this.errorFeildArr[i].classList.toggle("order-form--contents--feilds--red", true);
            }
            else {
                this.errorFeildArr[i].classList.toggle("order-form--contents--feilds--red", false);
                retvalArr[i] = true;
            }
        }

        return retvalArr[0] && retvalArr[1] && retvalArr[2]; 
    }


    //Check email is Valid
    isValidEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    updateCalories() {
        var key = this.mealSelect.value;
        this.updatePrice(key);
        var calorieValue = this.meals[key].calories;
        this.calories.value = calorieValue + " kCal";
        this.mealNameDisplay.innerText = this.meals[key].name;
    }

    updatePrice(key) {
        var week = +this.weeksSelect.value;
        var mealPrice = this.meals[key].price * week;
        var deliveryCharge = week * 100;
        var totalCost = mealPrice + deliveryCharge;
        this.deliveryChargeDisplay.innerText = "₱ " + deliveryCharge.toLocaleString();
        this.priceDisplay.innerText = "₱ " + mealPrice.toLocaleString();
        this.totalCost.innerText = totalCost.toLocaleString();
    }

    updatePricePerWeek() {
        var key = this.mealSelect.value;
        this.updatePrice(key);
        var week = +this.weeksSelect.value;
        this.weekNumDisplay.innerText = this.weeksSelect.value;
        if (week == 1 ) {
            this.weekPluralDisplay.innerText = "week"
        }
        else {
            this.weekPluralDisplay.innerText = "weeks"
        }

    }


    toggleTheMenu() {
  //  this.menuContent.classList.toggle("site-header__menu-content--is-visible")
   // this.menuBorder.classList.toggle("site-header__menu-icon-border--is-expanded")
   // this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }

    /*
        checkMonday() {
        var current = new Date(); //current Day
        var computeNextMonday = 8 - current.getDay(); 
        var followingMonday;
        if (current.getDate != 0) {
            followingMonday = new Date(current.getTime() + (86400000*computeNextMonday)); // + 1 day in ms
        }
        else {
            followingMonday = new Date(current.getTime() + 86400000*8); // if Sunday then did not reach cutoff
        }

        //followingDay.toLocaleDateString();
        console.log( followingMonday.toLocaleDateString());
    }
    */
}

export default Order;