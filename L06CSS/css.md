1. Background Color (background-color)
Sets the background color of an element.
css
Copy code
body {
    background-color: lightblue; /* Sets the background color to light blue */
}
2. Color Property (color)
Defines the text color of an element.
css
Copy code
p {
    color: darkblue; /* Sets text color to dark blue */
}
3. Color System
CSS supports different ways to define colors:
Named colors: red, blue, green
Hex codes: #ff5733
RGB: rgb(255, 87, 51)
HSL: hsl(9, 100%, 60%)
css
Copy code
h1 {
    color: #ff5733; /* Sets color using Hex code */
}
4. Font Weight (font-weight)
Defines the thickness of the text.
css
Copy code
h2 {
    font-weight: bold; /* Makes text bold */
}
p {
    font-weight: 300; /* Lighter text */
}
5. Hex Code
A six-character code (e.g., #RRGGBB) that defines colors.
css
Copy code
.hex-example {
    color: #00ff00; /* Green text */
}
6. Text Align Property (text-align)
Controls the horizontal alignment of text.
css
Copy code
.center-text {
    text-align: center; /* Centers the text */
}
7. Text Decoration (text-decoration)
Modifies the text appearance (e.g., underline, overline, etc.).
css
Copy code
a {
    text-decoration: none; /* Removes underline from links */
}
8. Line Height (line-height)
Adjusts the space between lines of text.
css
Copy code
p {
    line-height: 1.5; /* Increases line spacing */
}
9. Letter Spacing (letter-spacing)
Controls the space between letters.
css
Copy code
h1 {
    letter-spacing: 2px; /* Adds spacing between letters */
}
10. Unit Pixel (px)
px is a fixed-size unit.
css
Copy code
.box {
    width: 200px; /* Fixed width */
    height: 100px;
}
11. Font Family (font-family)
Defines the typeface for text.
css
Copy code
body {
    font-family: 'Arial', sans-serif; /* Uses Arial, falls back to sans-serif */
}
Complete Example:
css
Copy code
body {
    background-color: #f0f0f0;
    color: #333;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    text-decoration: underline;
}

p {
    font-size: 16px;
    line-height: 1.5;
}
This covers all the mentioned CSS properties with examples. Let me know if you need further clarification! 🚀



1. What is CSS?
CSS stands for Cascading Style Sheets. It is a language used to style and layout web pages. While HTML structures the content, CSS is used to control the presentation, including colors, fonts, spacing, and positioning.

Example:

html
Copy
<h1 style="color: blue;">Hello, World!</h1>
Run HTML
Here, the style attribute is used to apply CSS directly to the <h1> element, making the text color blue.

2. Basic CSS Format
CSS can be written in three ways:

Inline CSS: Applied directly to an HTML element using the style attribute.

Internal CSS: Written inside a <style> tag in the <head> section of an HTML document.

External CSS: Written in a separate .css file and linked to the HTML file using the <link> tag.

Example (Internal CSS):

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
3. Including CSS
To include CSS in your HTML file:

Inline CSS: Use the style attribute.

Internal CSS: Use the <style> tag in the <head>.

External CSS: Link the CSS file using the <link> tag.

Example (External CSS):

html
Copy
<head>
  <link rel="stylesheet" href="styles.css">
</head>
Run HTML
In styles.css:

css
Copy
h1 {
  color: blue;
}
4. Color Property
The color property is used to set the text color of an element.

Example:

css
Copy
p {
  color: red;
}
This will make all <p> elements red.

5. Background Color Property
The background-color property sets the background color of an element.

Example:

css
Copy
body {
  background-color: lightblue;
}
This will set the background color of the entire page to light blue.

6. Color Systems (Name & RGB)
Colors in CSS can be specified using:

Color Names: red, blue, green, etc.

RGB Values: rgb(255, 0, 0) for red.

Example:

css
Copy
h1 {
  color: rgb(0, 128, 0); /* Green */
}
7. Hex Codes
Hex codes are another way to specify colors. They start with a # followed by six characters (e.g., #FF5733).

Example:

css
Copy
h1 {
  color: #FF5733; /* Orange */
}
8. Text Align Property
The text-align property is used to align text horizontally. Values include left, right, center, and justify.

Example:

css
Copy
p {
  text-align: center;
}
This will center-align all <p> elements.

9. Font Weight & Text Decoration
font-weight: Controls the thickness of the text (e.g., bold, normal).

text-decoration: Adds decorations like underline, overline, or line-through.

Example:

css
Copy
h1 {
  font-weight: bold;
  text-decoration: underline;
}
10. Line Height & Letter Spacing
line-height: Controls the space between lines of text.

letter-spacing: Controls the space between characters.

Example:

css
Copy
p {
  line-height: 1.5;
  letter-spacing: 2px;
}
11. Units in CSS (Pixel)
CSS supports various units, such as px (pixels), em, rem, %, etc. Pixels (px) are fixed-size units.

Example:

css
Copy
h1 {
  font-size: 24px;
}
12. Font Family
The font-family property specifies the font for an element. You can list multiple fonts as fallbacks.

Example:

css
Copy
body {
  font-family: Arial, sans-serif;
}
This will use Arial font, and if not available, it will fall back to a generic sans-serif font.

13. Practice Questions
Practice questions help reinforce your understanding. For example:

Create a paragraph with a font size of 18px, line height of 1.6, and color #333.

Center-align a heading and set its background color to lightgray.

14. Assignment Questions
Assignments might include tasks like:

Create a webpage with a header, footer, and styled content using CSS.

Use different color systems (rgb, hex codes) for styling.

15. Assignment Solutions
Solutions to assignments will demonstrate how to apply the concepts you’ve learned. For example:

html
Copy
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    h1 {
      color: #333;
      text-align: center;
    }
    p {
      color: #666;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a sample paragraph with some styling.</p>
</body>
</html>
Run HTML
Let me know if you'd like further clarification or additional examples! 😊


1. What is CSS?
CSS (Cascading Style Sheets) is a language used to style HTML elements. It controls the layout, colors, fonts, spacing, and animations of a webpage.

Example:

css
Copy
h1 { 
  color: red; 
  font-size: 30px;
}
This CSS code turns all <h1> headings red and sets their font size to 30 pixels.

2. Basic CSS Format
CSS syntax has selectors (target HTML elements) and declarations (styling rules).

Structure:

css
Copy
selector {
  property: value;
}
Example:

css
Copy
p {
  font-family: Arial; 
  line-height: 1.5;
}
Styles all <p> tags with Arial font and 1.5x line spacing.

3. Including CSS
There are 3 ways to add CSS to HTML:

A. Inline CSS (directly in HTML tags):
html
Copy
<p style="color: blue;">This is blue text.</p>
Run HTML
B. Internal CSS (inside <style> tags in HTML):
html
Copy
<head>
  <style>
    body { background-color: lightgray; }
  </style>
</head>
Run HTML
C. External CSS (link a .css file):
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
  text-decoration: underline; 
}
4. Color Property
Sets the text color of an element.

Example:

css
Copy
h3 {
  color: #FF5733; /* Hex code for orange */
}
Result:

<h3 style="color: #FF5733;">Orange Heading</h3>
5. Background Color Property
Sets the background color of an element.

Example:

css
Copy
div {
  background-color: rgb(200, 100, 50); /* RGB for brown */
}
Result:

<div style="background-color: rgb(200, 100, 50); padding: 10px;">Brown background</div>
6. Color Systems
A. Color Names:
css
Copy
p { color: tomato; } /* Predefined color names */
B. RGB:
css
Copy
p { color: rgb(255, 99, 71); } /* Same as "tomato" */
7. Hex Codes
6-digit codes starting with # to represent colors.

Example:

css
Copy
button {
  background-color: #4CAF50; /* Green */
}
8. Text Align Property
Controls horizontal alignment of text.

Values: left, right, center, justify.

Example:

css
Copy
h4 {
  text-align: center;
}
Result:

<h4 style="text-align: center;">Centered Heading</h4>
9. Font Weight & Text Decoration
Font Weight: Boldness (normal, bold, 100-900).

Text Decoration: Underline/overline/strikethrough.

Example:

css
Copy
span {
  font-weight: 700; /* Bold */
  text-decoration: line-through;
}
Result: <span style="font-weight: 700; text-decoration: line-through;">Bold & Strikethrough</span>

10. Line Height & Letter Spacing
Line Height: Space between lines (e.g., 1.5 = 150% of font size).

Letter Spacing: Space between characters.

Example:

css
Copy
p {
  line-height: 2;
  letter-spacing: 3px;
}
11. Units in CSS (Pixel)
px (pixels) is a fixed-size unit.

Example:

css
Copy
img {
  width: 300px; /* Fixed width */
}
12. Font Family
Defines the font of text. Always include fallback fonts.

Example:

css
Copy
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
13. Practice Questions
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
14. Assignment Questions
Task: Style a webpage with:

A centered heading using text-align.

A paragraph with line-height: 1.6 and font-family: Georgia.

15. Assignment Solutions
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
Let me know if you need more details! 😊
