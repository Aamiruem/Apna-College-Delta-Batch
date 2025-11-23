Sure! Let’s dive deep into all CSS concepts with examples to make everything crystal clear. I'll cover everything step by step.

1. What is CSS?
CSS (Cascading Style Sheets) is used to style and layout web pages. It works alongside HTML to make web pages visually appealing.

Example:

html
Copy
<h1 style="color: blue; font-size: 30px;">Hello, World!</h1>
Run HTML
Here, the style attribute is used to apply CSS directly to the <h1> element, making the text blue and 30px in size.

2. Basic CSS Format
CSS has a simple structure:

css
Copy
selector {
  property: value;
}
Selector: Targets HTML elements (e.g., h1, p, .class, #id).

Property: What you want to style (e.g., color, font-size).

Value: The style you want to apply (e.g., red, 20px).

Example:

css
Copy
p {
  color: green;
  font-size: 18px;
}
This styles all <p> elements with green text and 18px font size.

3. Including CSS
There are 3 ways to include CSS in HTML:

A. Inline CSS
Applied directly to an HTML element using the style attribute.

html
Copy
<p style="color: red;">This is red text.</p>
Run HTML
B. Internal CSS
Written inside a <style> tag in the <head> section.

html
Copy
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
Run HTML
C. External CSS
Written in a separate .css file and linked to the HTML file.

html
Copy
<head>
  <link rel="stylesheet" href="styles.css">
</head>
Run HTML
In styles.css:

css
Copy
h2 {
  color: purple;
}
4. Color Property
The color property sets the text color of an element.

Example:

css
Copy
h3 {
  color: orange;
}
Result:

<h3 style="color: orange;">Orange Heading</h3>
5. Background Color Property
The background-color property sets the background color of an element.

Example:

css
Copy
div {
  background-color: lightblue;
}
Result:

<div style="background-color: lightblue; padding: 10px;">Light blue background</div>
6. Color Systems
A. Color Names
Predefined names like red, blue, green.

css
Copy
p { color: tomato; }
B. RGB
Uses rgb(red, green, blue) values (0-255).

css
Copy
p { color: rgb(255, 99, 71); } /* Same as "tomato" */
C. Hex Codes
6-digit codes starting with #.

css
Copy
button { background-color: #4CAF50; } /* Green */
7. Text Align Property
The text-align property aligns text horizontally.

Values: left, right, center, justify.

Example:

css
Copy
h4 {
  text-align: center;
}
Result:

<h4 style="text-align: center;">Centered Heading</h4>
8. Font Weight & Text Decoration
Font Weight: Controls boldness (normal, bold, 100-900).

Text Decoration: Adds underline, overline, or line-through.

Example:

css
Copy
span {
  font-weight: bold;
  text-decoration: underline;
}
Result: <span style="font-weight: bold; text-decoration: underline;">Bold & Underlined</span>

9. Line Height & Letter Spacing
Line Height: Space between lines (e.g., 1.5 = 150% of font size).

Letter Spacing: Space between characters.

Example:

css
Copy
p {
  line-height: 2;
  letter-spacing: 3px;
}
10. Units in CSS (Pixel)
px (pixels) is a fixed-size unit.

Example:

css
Copy
img {
  width: 300px; /* Fixed width */
}
11. Font Family
The font-family property specifies the font for an element. Always include fallback fonts.

Example:

css
Copy
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
12. Practice Questions
Create a paragraph with:

Font size: 18px

Text color: #2E4053

Background color: #F7DC6F

Solution:

css
Copy
p {
  font-size: 18px;
  color: #2E4053;
  background-color: #F7DC6F;
}
13. Assignment Questions
Task: Style a webpage with:

A centered heading using text-align.

A paragraph with line-height: 1.6 and font-family: Georgia.

14. Assignment Solutions
HTML:

html
Copy
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { text-align: center; }
    p { 
      line-height: 1.6; 
      font-family: Georgia, serif;
    }
  </style>
</head>
<body>
  <h1>My Webpage</h1>
  <p>This is a styled paragraph.</p>
</body>
</html>
Run HTML
15. Advanced CSS Concepts
A. Box Model
Every element is a box with:

margin (outside space)

border (around padding)

padding (inside space)

content (actual content)

Example:

css
Copy
div {
  margin: 10px;
  border: 2px solid black;
  padding: 20px;
  width: 200px;
}
B. Flexbox
Used for creating flexible layouts.

Example:

css
Copy
.container {
  display: flex;
  justify-content: space-between;
}
C. Grid
Used for creating grid-based layouts.

Example:

css
Copy
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
Let me know if you need further clarification or more examples! 😊
