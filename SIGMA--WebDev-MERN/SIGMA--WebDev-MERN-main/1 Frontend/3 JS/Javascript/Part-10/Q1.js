// Mouseout event
document.body.addEventListener('mouseout', () => {
  console.log('Mouse moved out of the body!');
});

// Keypress event
document.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Scroll event
window.addEventListener('scroll', () => {
  console.log('Scrolling...');
});

// Load event
window.addEventListener('load', () => {
  console.log('Page loaded!');
});
