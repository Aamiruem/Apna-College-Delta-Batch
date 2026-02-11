// Create input and heading elements
const input = document.createElement('input');
input.setAttribute('placeholder', 'Enter your name');
document.body.appendChild(input);

const heading = document.createElement('h2');
document.body.appendChild(heading);

// Allow only a-z, A-Z, and space
input.addEventListener('input', () => {
  const filteredValue = input.value.replace(/[^a-zA-Z\s]/g, '');
  heading.textContent = filteredValue;
});
