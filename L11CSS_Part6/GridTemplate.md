The repeat() function in CSS Grid is a powerful tool for defining grid tracks (rows or columns) in a concise way. It allows you to repeat a pattern of track sizes a specified number of times. The 1fr unit represents a fraction of the available space in the grid container.

Here’s a breakdown of how repeat() works with grid-template-rows and grid-template-columns:

1. repeat(count, size)
count: The number of times the pattern should be repeated.

size: The size of each track. This can be a fixed value (e.g., 100px), a flexible value (e.g., 1fr), or a combination of values.

2. Examples
Example 1: Dividing Available Space Equally
css
Copy
.container {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
This creates a grid with 2 rows and 3 columns.

Each row and column takes up an equal fraction of the available space.

Example 2: Explicitly Defining Rows
css
Copy
.container {
  display: grid;
  grid-template-rows: 1fr 1fr; /* Equivalent to repeat(2, 1fr) */
  grid-template-columns: repeat(3, 1fr);
}
This is equivalent to the first example but explicitly defines the rows without using repeat().

Example 3: Mixed Sizes
css
Copy
.container {
  display: grid;
  grid-template-rows: repeat(2, 100px 1fr);
  grid-template-columns: repeat(3, 1fr);
}
This creates a grid with 4 rows:

The first and third rows are fixed at 100px.

The second and fourth rows take up an equal fraction of the remaining space.

The columns are divided into 3 equal parts.

Example 4: Combining repeat() with Explicit Sizes
css
Copy
.container {
  display: grid;
  grid-template-rows: 50px repeat(2, 1fr) 100px;
  grid-template-columns: repeat(3, 1fr);
}
This creates a grid with 4 rows:

The first row is fixed at 50px.

The second and third rows take up equal fractions of the remaining space.

The fourth row is fixed at 100px.

The columns are divided into 3 equal parts.

3. Key Points
1fr: Represents a fraction of the available space. If all tracks are 1fr, they will divide the space equally.

repeat(): Simplifies the definition of repetitive patterns.

Flexibility: You can mix repeat() with explicit sizes for more complex layouts.

4. Practical Use Case
Imagine you want to create a grid layout for a dashboard with a header, footer, and a main content area divided into 3 columns:

css
Copy
.dashboard {
  display: grid;
  grid-template-rows: 80px 1fr 60px; /* Header, Main Content, Footer */
  grid-template-columns: repeat(3, 1fr); /* 3 Equal Columns */
  gap: 10px; /* Space between grid items */
}
Rows:

Header: Fixed at 80px.

Main Content: Takes up the remaining space (1fr).

Footer: Fixed at 60px.

Columns: 3 equal-width columns.

5. Browser Support
The repeat() function is widely supported in modern browsers.

For older browsers, you may need to use fallbacks or avoid repeat().
