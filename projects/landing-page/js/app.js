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

function makeActive(entries, observer) {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      // make target element active
      entry.target.classList.add("active");
    } else {
      // make target element not active
      entry.target.classList.remove("active");
    }
  }
}

// use IntersectionObserver API: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
let observer = new IntersectionObserver(makeActive, {threshold: 0.5});


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

    // good spot to start observing visibility
    observer.observe(section);
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
