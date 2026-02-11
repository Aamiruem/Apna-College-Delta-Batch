// Setting and Counting Properties in JavaScript Objects
// There are several ways to set and count properties in JavaScript objects. Here's a comprehensive guide:

// 1. Basic Property Setting
// javascript
const person = {}; // Create empty object

// Set properties
person.name = 'John';
person.age = 30;
person['occupation'] = 'Developer';

console.log(person);
// { name: 'John', age: 30, occupation: 'Developer' }


// 2. Counting Properties in an Object
// Method 1: Object.keys().length
// javascript
const count = Object.keys(person).length;
console.log(count); // 3



// Method 2: for...in loop
// javascript
// let count = 0;
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    count++;
  }
}
console.log(count); // 3


// 3. Setting Multiple Properties at Once
// javascript
// Using Object.assign()
const newProperties = {
  city: 'New York',
  hobby: 'Reading'
};

Object.assign(person, newProperties);
console.log(person);
// { name: 'John', age: 30, occupation: 'Developer', city: 'New York', hobby: 'Reading' }



// 4. Counting Specific Types of Properties
// javascript
// Count string properties
let stringCount = 0;
for (let key in person) {
  if (typeof person[key] === 'string') {
    stringCount++;
  }
}
console.log(stringCount); // 4 (name, occupation, city, hobby)





// 5. Using Property Descriptors
// javascript
// Set property with configuration
Object.defineProperty(person, 'id', {
  value: 12345,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(Object.keys(person).length); // Now 6




// 6. Dynamic Property Counting
// javascript
function addProperty(obj, key, value) {
  obj[key] = value;
  return Object.keys(obj).length;
}

const newCount = addProperty(person, 'language', 'English');
console.log(newCount); // 7



// Important Notes:
// Object.keys() only returns enumerable properties

// for...in loops also include inherited enumerable properties (use hasOwnProperty to filter)

// Property order is not guaranteed in JavaScript objects (use Maps if order matters)

// For more complex counting, consider:

// javascript
// Using reduce to count property types
const typeCount = Object.values(person).reduce((acc, val) => {
  const type = typeof val;
  acc[type] = (acc[type] || 0) + 1;
  return acc;
}, {});

console.log(typeCount);
// { string: 5, number: 2 }
// Would you like me to explain any specific aspect of object property handling in more detail?










// Setting Content in JavaScript Objects
// There are several ways to set and modify content in JavaScript objects. Here's a comprehensive guide:

// 1. Basic Property Assignment
// javascript
const user = {}; // Create empty object

// Dot notation (for known property names)
user.name = 'Alice';
user.age = 28;

// Bracket notation (for dynamic property names)
const propName = 'email';
user[propName] = 'alice@example.com';

console.log(user);
// { name: 'Alice', age: 28, email: 'alice@example.com' }
// 2. Object Initialization
// javascript
// Set properties during creation
const product = {
  id: 101,
  name: 'Laptop',
  price: 999.99,
  inStock: true
};




// 3. Modifying Multiple Properties
// javascript
// // Using Object.assign()
const updates = {
  price: 899.99,
  discount: true,
  color: 'silver'
};
Object.assign(product, updates);




// 4. Computed Property Names
// javascript
// const dynamicKey = 'rating';
const item = {
  id: 202,
  [dynamicKey]: 4.5, // Computed property name
  ['is' + 'OnSale']: false // Expression as property name
};
console.log(item);
// { id: 202, rating: 4.5, isOnSale: false }





// 5. Nested Objects
// javascript
const account = {
  username: 'jsmith',
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

// Setting nested properties
account.preferences.theme = 'light';
account['preferences']['notifications'] = false;
console.log(account);
// { username: 'jsmith', preferences: { theme: 'light', notifications: false } }




// 6. Advanced Techniques
// Using Spread Operator
// javascript
const updatedUser = {
  ...user,
  age: 29, // Override existing property
  country: 'USA' // Add new property
};
console.log(updatedUser);
// { name: 'Alice', age: 29, email: 'alice@example.com', country: 'USA' }




// Using Object.defineProperty()
// javascript
Object.defineProperty(user, 'status', {
  value: 'active',
  writable: false, // Cannot be changed
  enumerable: true // Will show up in loops
});

console.log(user);
// { name: 'Alice', age: 28, email: 'alice@example.com', status: 'active' }




// 7. Deleting Properties
// javascript
// delete user.email; // Remove property
// Best Practices
// Use const for object declarations and modify properties

// Prefer dot notation when property names are known

// Use bracket notation for dynamic property names

// Consider object immutability patterns for complex applications

// Use Object.freeze() to prevent modifications if needed:

// javascript
const frozenObject = Object.freeze({ key: 'value' });
// frozenObject.key = 'newValue' will fail silently in non-strict mode
// Common Use Cases
// javascript
// Dynamic content setting
function setContent(obj, key, value) {
  obj[key] = value;
}

// Merging objects
const settings = { theme: 'dark' };
const userSettings = { fontSize: 16 };
const combined = { ...settings, ...userSettings };

// Conditional property adding
const config = {
  apiUrl: 'https://api.example.com',
  ...(process.env.NODE_ENV === 'development' && { debug: true })
};
// Would you like me to elaborate on any specific aspect of working with object properties?





let para = document.querySelector('p');

console.dir(para);






// 1. Setting plain text with innerText
para.innerText = "abc";
// Renders exactly as: abc

// 2. Changing text content
para.innerText = "Hi, I am Peter Parker!";
// Renders exactly as: Hi, I am Peter Parker!

// 3. Attempting HTML with innerText (tags don't render)
para.innerText = "Hi, I am <b>Peter Parker</b>!";
// Renders exactly as: Hi, I am <b>Peter Parker</b>!
// The <b> tags appear as text, not as bold formatting

// 4. Using innerHTML to render actual HTML
para.innerHTML = "Hi, I am <b>Peter Parker</b>!";
// Renders as: Hi, I am **Peter Parker**!
// The <b> tags now create bold text

// 5. Selecting an h1 element
let heading = document.querySelector('h1');
// Returns undefined because this is an assignment, not an expression

// 6. Getting h1 content
heading.innerText;
// Returns: "Spider Mag" (the visible text content)




// Safer alternative for user content
para.textContent = userInput;  // HTML tags will be escaped
