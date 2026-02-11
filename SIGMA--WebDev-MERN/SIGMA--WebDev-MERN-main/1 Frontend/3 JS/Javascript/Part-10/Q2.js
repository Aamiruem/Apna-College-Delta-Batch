// Create button
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

// Add event listener for color change
button.addEventListener('click', () => {
  button.style.backgroundColor = 'green';
});
