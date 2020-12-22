import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Accordion from './modules/Accordion'


var homeUrl = 'index.html';
if ( window.location.href.indexOf(homeUrl) > 0){
    new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
    new RevealOnScroll(document.querySelectorAll(".testimonial"), 70);
}


let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
let accordion = new Accordion();

if (module.hot) {
    module.hot.accept()
}

