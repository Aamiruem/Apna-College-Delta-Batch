// Here's a complete code example demonstrating how to select elements by ID, tag name, and class name, with detailed comments:

javascript
// =============================================
// 1. Selecting by ID (returns single element)
// =============================================

// Method 1: getElementById (fastest for ID selection)
const headerElement = document.getElementById('header');
// This selects the element with id="header"

// Method 2: querySelector (more versatile)
const sameHeaderElement = document.querySelector('#header');
// The # symbol indicates this is an ID selector

// =============================================
// 2. Selecting by Tag Name (returns collection)
// =============================================

// Get ALL paragraph elements (returns HTMLCollection)
const allParagraphs = document.getElementsByTagName('p');

// Modern alternative (returns NodeList)
const allParagraphsModern = document.querySelectorAll('p');

// Example: Change all paragraphs to red
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.color = 'red';
}

// =============================================
// 3. Selecting by Class Name (returns collection)
// =============================================

// Get ALL elements with class="highlight" (HTMLCollection)
const highlights = document.getElementsByClassName('highlight');

// Modern alternative (NodeList)
const highlightsModern = document.querySelectorAll('.highlight');

// Example: Add border to all highlighted elements
Array.from(highlights).forEach(element => {
  element.style.border = '2px solid blue';
});

// =============================================
// 4. Combined Selection Examples
// =============================================

// Select all buttons inside a specific div
const buttonsInContainer = document.querySelectorAll('#container button');

// Select first list item in a specific list
const firstListItem = document.querySelector('ul#mainList li:first-child');

// Select all elements with both "active" and "user" classes
const activeUsers = document.querySelectorAll('.active.user');

// =============================================
// Important Notes:
// =============================================
/*
1. getElementById - fastest for IDs, returns single element
2. getElementsByTagName/getElementsByClassName - 
   - Return live HTMLCollections
   - Automatically update when DOM changes
3. querySelector/querySelectorAll - 
   - More flexible (accept any CSS selector)
   - Return static NodeLists
   - querySelector returns first match only
4. For collections, convert to array with Array.from() for easier manipulation
5. Always check if element exists before manipulating:
   if (headerElement) { headerElement.style... }
*/
// Practical Usage Example:
// html
// <div id="container">
//   <h1 id="header">Page Title</h1>
//   <p class="highlight">First paragraph</p>
//   <p>Second paragraph</p>
//   <div class="highlight">Important div</div>
//   <button>Click me</button>
// </div>

// <script>
//   // Change header text if it exists
//   const header = document.getElementById('header');
//   if (header) {
//     header.textContent = 'New Dynamic Title';
//   }

//   // Toggle highlight class on all paragraphs
//   const paragraphs = document.querySelectorAll('#container p');
//   paragraphs.forEach(p => {
//     p.classList.toggle('highlight');
//   });

//   // Count all highlighted elements
//   const highlightCount = document.getElementsByClassName('highlight').length;
//   console.log(`Found ${highlightCount} highlighted elements`);
// </script>
// Key differences to remember:

// Methods with "Elements" (plural) return collections

// querySelector/querySelectorAll use CSS selector syntax

// Older methods return live collections, newer methods return static NodeLists

// Always check if elements exist before manipulating them
