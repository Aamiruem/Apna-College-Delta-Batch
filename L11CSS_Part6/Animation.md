CSS Animations 🎬✨
CSS animations allow elements to transition between different styles smoothly. Here’s a breakdown of key animation properties:

1. Animation Properties
Property	Description
animation-name	Specifies the name of the animation (defined using @keyframes).
animation-duration	Defines how long the animation runs (e.g., 2s, 500ms).
animation-timing-function	Controls the speed curve of the animation (ease, linear, ease-in, ease-out, etc.).
animation-delay	Specifies the delay before the animation starts (2s, 500ms).
animation-iteration-count	Defines how many times the animation repeats (infinite, 1, 3, etc.).
animation-direction	Specifies the direction of the animation (normal, reverse, alternate, alternate-reverse).
2. Example: Simple Animation
css
Copy
Edit
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  border-radius: 10px;

  /* Applying animation */
  animation-name: bounce;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
3. Explanation of Example
The @keyframes bounce defines the movement.
animation-name: bounce; → Uses the animation.
animation-duration: 1s; → Runs the animation in 1 second.
animation-timing-function: ease-in-out; → Smooth start and end.
animation-delay: 0.5s; → Starts after 0.5 seconds.
animation-iteration-count: infinite; → Repeats forever.
animation-direction: alternate; → Moves up and down alternately.
4. Shorthand Animation Property
Instead of writing all properties separately, you can use:

css
Copy
Edit
animation: bounce 1s ease-in-out 0.5s infinite alternate;
This combines:

pgsql
Copy
Edit
animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction
5. More Animation Timing Functions
Value	Description
ease	Default, starts slow, speeds up, then slows down.
linear	Constant speed.
ease-in	Slow start, then speeds up.
ease-out	Fast start, then slows down.
ease-in-out	Slow start & end, fast middle.
