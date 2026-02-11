// The classList Property - Complete Guide
// The classList property is a powerful DOM interface for working with HTML element classes. It returns a live DOMTokenList collection of the class attributes of the element.

// Basic Properties and Methods
// Core Functionality
// javascript
const element = document.getElementById('myElement');

// Get classList object
const classes = element.classList;

// Number of classes
console.log(classes.length);

// Access class by index
console.log(classes[0]);
// Main Methods
// Method	Description	Example
// add()	Adds one or more classes	element.classList.add('active')
// remove()	Removes one or more classes	element.classList.remove('old')
// toggle()	Toggles a class	element.classList.toggle('visible')
// contains()	Checks if class exists	if (element.classList.contains('hidden'))
// replace()	Replaces old class with new	element.classList.replace('old', 'new')
// Advanced Usage
// Multiple Class Operations
// javascript
// Add multiple classes
element.classList.add('btn', 'btn-primary', 'btn-lg');

// Remove multiple classes
element.classList.remove('outdated', 'deprecated');

// Toggle with condition
const isActive = true;
element.classList.toggle('active', isActive);  // Forces add/remove
// Iterating Through Classes
// javascript
// Using for...of
for (let className of element.classList) {
  console.log(className);
}

// Using forEach
element.classList.forEach(className => {
  console.log(className);
});
// Practical Examples
// Responsive Navigation
// javascript
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('mobile-visible');
});
// Form Validation
// javascript
const input = document.querySelector('input');
input.addEventListener('blur', () => {
  if (!input.value) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
});
// Theme Switching
// javascript
const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('darkMode',
    document.body.classList.contains('dark-theme'));
});
// Performance Tips
// Batch operations:

// javascript
// Instead of:
element.classList.add('one');
element.classList.add('two');

// Do:
element.classList.add('one', 'two');
// Check before toggle:

// javascript
// More efficient when likely to change
if (element.classList.contains('active') !== shouldBeActive) {
  element.classList.toggle('active');
}
// Use CSS custom properties for style changes that don't need separate classes.

// Browser Compatibility
// The classList property is supported in all modern browsers, including:

// Chrome 8+

// Firefox 3.6+

// Safari 5.1+

// Opera 11.5+

// Edge 12+

// Internet Explorer 10+

// For legacy IE support (IE9 and below), you may need polyfills or to use className with string manipulation.












// 1. Select an h1 element
let heading = document.querySelector('h1');
// Returns undefined because this is an assignment, not an expression

// 2. Add 'green' class (note: you had a comma typo)
heading.classList.add('green');
// Adds class, returns undefined (add() doesn't return anything)

// 3. Add 'underline' class (had space before classList)
heading.classList.add('underline');
// Adds second class, returns undefined

// 4. Attempt to remove 'green' (had typo "flassList" and wrong quote)
heading.classList.remove('green');
// Removes class, returns undefined

// 5. Remove 'green' again (correct syntax)
heading.classList.remove('green');
// Does nothing since class already removed, returns undefined

// 6. Set class attribute directly (note: this replaces ALL classes)
heading.setAttribute('class', 'green');
// Overwrites any existing classes with just 'green'


// Better way to handle multiple classes
heading.classList.add('green', 'underline');
heading.classList.remove('green');

// Instead of setAttribute which removes other classes
