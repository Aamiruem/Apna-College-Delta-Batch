// Query selectors are powerful tools for selecting DOM elements using CSS-style selectors. Here's a clear explanation of what you've shown, with corrections and enhancements:

// querySelector() vs querySelectorAll()
// querySelector(selector)
// Returns the first element that matches the selector

// Returns null if no match is found

// querySelectorAll(selector)
// Returns a NodeList of all matching elements

// Returns an empty NodeList if no matches are found

// Corrected Examples:
// javascript
// Selects first <p> element in document

document.querySelector('p');

// Selects first element with id="myId"
document.querySelector('#myId');

// Selects first element with class="myClass" (• should be .)
document.querySelector('.myClass');

// Selects ALL elements (you had a typo - missing . before querySelectorAll)
document.querySelectorAll('*');

// Selects ALL <p> elements (your comment was correct but example had *)
document.querySelectorAll('p');

// Additional Useful Examples:
// javascript
// Complex CSS selectors work too:
document.querySelector('div.main > p.highlight');
document.querySelectorAll('input[type="text"]');

// Combining selectors
document.querySelector('header, footer');
// Important Notes:
// The . before querySelector/querySelectorAll is crucial (you missed it in some examples)

// CSS selectors are case-sensitive for everything except HTML element names

// The returned NodeList from querySelectorAll() is not "live" (unlike getElementsBy* collections)

// For better performance, scope your selections when possible:

javascript
const container = document.getElementById('app');
container.querySelector('.item'); // Only searches within #app
// Would you like me to explain any specific aspect of query selectors in more detail?



console.dir(document.querySelector("h1"));

console.dir(document.querySelectorAll("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));



alert(document.querySelector("h1").innerText);
