// Live reload is enabled (this is a development feature to automatically refresh the page when code changes)

// Correctly using console.dir with the document object
console.dir(document) // VM214:1 
// This outputs the entire document object with all its properties and methods
// Shows the HTML document structure, properties like URL, head, body, etc.

// Using console.dir to view document.all - a collection of all elements in the document
console.dir(document.all) // VM1179:1 HTMLAllCollection(40)
// Returns an HTMLAllCollection containing all 40 elements in the document

// Viewing the 9th element in document.all (index 8) which is an h1 element
console.dir(document.all[8]) // VM1197:1 h1
// Shows all properties of the h1 element including its text content, styles, etc.

// Viewing the innerText property of the h1 element
console.dir(document.all[8].innerText) // VM1252:1 Spider Man
// Outputs: "Spider Man" (the text content of the h1 element)

// Changing the text of the h1 element to "peter parker"
document.all[8].innerText = "peter parker"; // 'peter parker'
// This updates the visible text on the webpage

// Changing it again to "Iron Man"
document.all[8].innerText = "Iron Man "; // 'Iron Man '
// The space at the end is preserved

// Viewing the window object
window // Window object
// The global object in browser JavaScript, contains document, location, etc.

// Viewing the document object again
document // #document
// Shows the current state of the document after our changes






// Live reload is enabled (development feature that refreshes page automatically)

// Get the image element with id "mainImg"
document.getElementById("mainImg");
// Returns: <img src="assets/spiderman_img.png" id="mainImg" alt="spiderman" class="abc, xyz">

// Assuming imgObj was assigned to the image element (though not shown in the code)
console.dir(imgObj);
// Shows all properties of the img element including:
// - src: current image source
// - id: "mainImg"
// - classList: contains classes "abc," and "xyz"
// - dimensions: naturalHeight, naturalWidth, etc.

// Accessing properties of the image object
imgObj.src // Returns current source URL
imgObj.tagName // Returns "IMG" (the HTML tag name)
imgObj.id // Returns "mainImg" (the element's ID)

// Changing the image source to a different file
imgObj.src = "assets/creation_3.jpeg";
// This will immediately update the image displayed on the page

// Get the paragraph element with id "description"
document.getElementById("description");
// Returns the <p> element containing text about Spider-Man's creation

// View all properties of the description paragraph
console.dir(document.getElementById("description"));
// Shows:
// - id: "description"
// - innerText: The visible text content
// - innerHTML: The raw HTML content (with whitespace)
// - clientHeight/Width: The rendered dimensions
// - And hundreds of other DOM properties and methods



// This shows the detailed properties of the paragraph element with id "description"
console.dir(document.getElementById("description"));
// Returns a complete DOM object representation of the <p> element including:
// - All standard HTML element properties
// - ARIA accessibility attributes
// - Dimension and position information (clientHeight, offsetTop, etc.)
// - Event handlers (all null in this case)
// - Text content properties (innerText, textContent, innerHTML)

// Attempting to use a non-existent method (typo)
document.getElementByClassName("oldImg");
// Error: Uncaught TypeError: document.getElementByClassName is not a function
// This occurs because the correct method name is getElementsByClassName (with an 's')

// Correct usage with getElementsByClassName (returns a live HTMLCollection)
document.getElementsByClassName("oldImg");
// Returns: HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
// This collection contains all three image elements with class "oldImg"

// The HTMLCollection has:
// - length: 3 (number of matching elements)
// - Indexed access to each element (0, 1, 2)
// - Live updates - changes in the DOM are reflected automatically

// Each image element in the collection has properties like:
// - src: "assets/spiderman_img.png"
// - className: "oldImg"
// - alt: "Spider-Man creation image 1"
// - Dimensions: width/height = 200px, naturalWidth/naturalHeight = original size
// - Position: offsetTop, offsetLeft relative to offsetParent
