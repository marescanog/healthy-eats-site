class InterActiveMenu {
    constructor() {
        //var icon = document.querySelectorAll(".accordion--icon-up");
        //Menu Panels
        this.caloriePanel = document.getElementById('Calories');
        this.proteinPanel = document.getElementById('Protein');
        this.ketoPanel = document.getElementById('Keto');
        //Menu Buttons
        this.calorieButton = document.getElementById('Calorie-button');
        this.proteinButton = document.getElementById('Protein-button');
        this.ketoButton = document.getElementById('Keto-button');
        //Header Nav
        this.calorieHeader = document.getElementById('Calorie-header');
        this.proteinHeader = document.getElementById('Protein-header');
        this.ketoHeader = document.getElementById('Keto-header');

        this.events()
    }

    events() {
       this.calorieButton.addEventListener("click", () => this.toggleCaloriePanel());
       this.proteinButton.addEventListener("click", () => this.toggleProteinPanel());
       this.ketoButton.addEventListener("click", () => this.toggleKetoPanel());
    }

    toggleCaloriePanel() {
        //header
        this.calorieHeader.classList.toggle('menu-UI--tab-header-button--select', true)
        this.proteinHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        this.ketoHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        //panel
        this.caloriePanel.classList.toggle('menu-UI--visible', true)
        this.caloriePanel.classList.toggle('menu-UI--hidden', false)
        this.proteinPanel.classList.toggle('menu-UI--visible', false)
        this.proteinPanel.classList.toggle('menu-UI--hidden', true)
        this.ketoPanel.classList.toggle('menu-UI--visible', false)
        this.ketoPanel.classList.toggle('menu-UI--hidden', true)
    }

    toggleProteinPanel() {
        //header
        this.calorieHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        this.proteinHeader.classList.toggle('menu-UI--tab-header-button--select', true)
        this.ketoHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        //panel
        this.caloriePanel.classList.toggle('menu-UI--visible', false)
        this.caloriePanel.classList.toggle('menu-UI--hidden', true)
        this.proteinPanel.classList.toggle('menu-UI--visible', true)
        this.proteinPanel.classList.toggle('menu-UI--hidden', false)
        this.ketoPanel.classList.toggle('menu-UI--visible', false)
        this.ketoPanel.classList.toggle('menu-UI--hidden', true)
    }

    toggleKetoPanel() {
        //header
        this.calorieHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        this.proteinHeader.classList.toggle('menu-UI--tab-header-button--select', false)
        this.ketoHeader.classList.toggle('menu-UI--tab-header-button--select', true)
        //panel
        this.caloriePanel.classList.toggle('menu-UI--visible', false)
        this.caloriePanel.classList.toggle('menu-UI--hidden', true)
        this.proteinPanel.classList.toggle('menu-UI--visible', false)
        this.proteinPanel.classList.toggle('menu-UI--hidden', true)
        this.ketoPanel.classList.toggle('menu-UI--visible', true)
        this.ketoPanel.classList.toggle('menu-UI--hidden', false)
    }


}
export default InterActiveMenu