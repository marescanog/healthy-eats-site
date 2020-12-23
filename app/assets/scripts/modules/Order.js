import Meal from './Meal_item'

class Order{
    constructor() {
       // this.menuIcon = document.querySelector(".site-header__menu-icon")
      //  this.menuContent = document.querySelector(".site-header__menu-content")
       // this.menuBorder = document.querySelector(".site-header__menu-icon-border")
        //label feild input values
        this.weeksSelect = document.getElementById('weeks');
        this.mealSelect = document.getElementById('meal-plan');
        this.calories = document.getElementById('calories');
        this.dateSelect = document.getElementById('flatpickr');
        //text display
        this.priceDisplay = document.getElementById('price-display');
        this.mealNameDisplay = document.getElementById('meal-name-display');
        this.weekNumDisplay = document.getElementById('week-number-display');
        this.weekPluralDisplay = document.getElementById('week-display-plural');
        this.deliveryChargeDisplay = document.getElementById('delivery-charge-display');
        this.totalCost = document.getElementById('total-cost');
        this.meals = {
            "Cal-Light": new Meal("Calorie Light", 1500, 800),
            "Cal-Reg": new Meal("Calorie Regular", 2300, 1200),
            "Protein-Reg": new Meal("Hi-Protein Regular", 2800, 1400),
            "Protein-Heavy": new Meal("Hi-Protein Heavy", 3500, 2100),
            "Keto-Light": new Meal("Keto light", 1800, 900),
            "Keto-Reg": new Meal("Keto Regular", 2300, 1350),
            "Keto-Heavy": new Meal("Keto heavy", 2800, 1800)
        };        
        this.events()
    }

    events() {
       // this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
       this.mealSelect.addEventListener('change', () => this.updateCalories());
       this.weeksSelect.addEventListener('change', () => this.updatePricePerWeek());      
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