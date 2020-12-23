class Meal {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories.toLocaleString();
    }
}

export default Meal;