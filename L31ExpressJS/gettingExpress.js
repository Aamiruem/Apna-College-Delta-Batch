// const express = require('express');
// const app = express();

// // Route
// app.get('/', (req, res) => {
//   res.send('Hello Express 🚀');
// });

// // Server start
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// // console.dir(app)











const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello Express 🚀');
});

// Server start - change 3000 to 8080 if you want port 8080
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Optional: See all app details (remove the // to use it)
// console.dir(app);
