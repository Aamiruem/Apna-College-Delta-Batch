// Manipulating Element Classes with classList
// The classList property provides powerful methods for working with an element's classes in JavaScript. Here's a comprehensive guide:

// Basic classList Methods
// 1. Adding Classes
// javascript
const element = document.querySelector('#myElement');

// Add single class
element.classList.add('active');

// Add multiple classes
element.classList.add('highlight', 'animated');
// 2. Removing Classes
// javascript
// Remove single class
element.classList.remove('inactive');

// Remove multiple classes
element.classList.remove('old-style', 'deprecated');
// 3. Checking for Classes
// javascript
// Check if element has specific class
if (element.classList.contains('important')) {
  console.log('Element has important class');
}
// 4. Toggling Classes
// javascript
// Toggle class (add if missing, remove if present)
element.classList.toggle('visible');

// Toggle with force parameter (true = always add, false = always remove)
// element.classList.toggle('dark-mode', prefersDarkScheme);
// Advanced classList Usage
// 5. Replacing Classes
// javascript
// Replace one class with another
element.classList.replace('old-theme', 'new-theme');
// 6. Iterating Through Classes
// javascript
// Loop through all classes
element.classList.forEach(className => {
  console.log('Current class:', className);
});
// 7. DOMTokenList Features
// javascript
// Get number of classes
const classCount = element.classList.length;

// Access classes by index
const firstClass = element.classList[0];
// Practical Examples
// Button Active State
// javascript
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');
  });
});
// Dark/Light Mode Toggle
// javascript
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});
// Accordion Component
// javascript
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    header.classList.toggle('active');
    content.classList.toggle('show');
  });
});
// Performance Considerations
// Batch multiple class operations:

// javascript
// Less efficient
element.classList.add('one');
element.classList.add('two');
element.classList.add('three');

// More efficient
element.classList.add('one', 'two', 'three');
// Use classList instead of className for individual class manipulation:

// javascript
// Not ideal (overwrites all classes)
element.className = 'new-class';

// Better (preserves other classes)
element.classList.add('new-class');
// For complex state changes, consider CSS custom properties instead of multiple class toggles.

// Remember that classList methods automatically handle duplicates and whitespace, making them safer than manual string manipulation of className.
