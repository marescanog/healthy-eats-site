class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.menuBorder = document.querySelector(".site-header__menu-icon-border")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.menuBorder.classList.toggle("site-header__menu-icon-border--is-expanded")
    }
}

export default MobileMenu;