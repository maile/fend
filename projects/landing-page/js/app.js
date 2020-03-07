/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBar = document.getElementById('navbar__list');
const navItems = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  for (let section of navItems) {
    li = document.createElement('li');
    section_link = document.createElement('a');
    section_link.innerText = section.dataset.nav;
    section_link.target_id = section.id;
    section_link.onclick = scrollToTarget;
    section_link.className = "menu__link";
    li.appendChild(section_link);
    navBar.appendChild(li);
  }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToTarget() {
  target_el = document.querySelector("#" + this.target_id);
  target_el.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.onload = buildNav();

// Scroll to section on link click
// onclick for menu__link ?

// Set sections as active
// event??
