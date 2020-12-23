import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Accordion from './modules/Accordion'
import Order from './modules/Order'


var homeUrl = 'index.html';
var faqUrl = 'faqs';
var orderUrl = 'order';
if ( window.location.href.indexOf(homeUrl) > 0){
    new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
    new RevealOnScroll(document.querySelectorAll(".testimonial"), 70);
}

if ( window.location.href.indexOf(faqUrl) > 0){
    let accordion = new Accordion();
}

if ( window.location.href.indexOf(orderUrl) > 0){
    let order = new Order();
}

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();


if (module.hot) {
    module.hot.accept()
}

