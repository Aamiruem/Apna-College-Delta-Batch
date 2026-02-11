// Select element with ID "myElement"
const element = document.getElementById('myElement');

// Example usage
if (element) {
  element.style.color = 'red';
  element.textContent = 'Text changed!';
}


// Select by ID using CSS selector syntax (#)
const elements = document.querySelector('#myElement');


// Only works if the element has both ID and name attribute
const element1 = document.myElement;


<div id="myElement">This is my element</div>



document.getElementById('description').innerText = "abc";

document.querySelector('p#description').innerText = "abc";
