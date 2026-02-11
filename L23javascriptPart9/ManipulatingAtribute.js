// Manipulating DOM Element Attributes in JavaScript
// There are several ways to work with HTML element attributes in JavaScript. Here's a comprehensive guide to attribute manipulation:

// 1. Basic Attribute Methods
// Getting Attributes
// javascript
// Get attribute value
const link = document.querySelector('a');
const hrefValue = link.getAttribute('href');
// Setting Attributes
// javascript
// Set attribute value
link.setAttribute('target', '_blank');
// Removing Attributes
// javascript
// Remove attribute
link.removeAttribute('title');
// 2. Direct Property Access vs getAttribute()
// javascript
// For standard properties, these are often equivalent:
const img = document.querySelector('img');
console.log(img.src); // Property access
console.log(img.getAttribute('src')); // Attribute access

// Important differences:
const input = document.querySelector('input');
input.value = 'new value';

console.log(input.value); // 'new value' (current state)
console.log(input.getAttribute('value')); // Original value or null
// 3. Working with Data Attributes
// javascript
// HTML: <div id="user" data-user-id="123" data-role="admin"></div>
const userDiv = document.getElementById('user');

// Get data attributes
const userId = userDiv.dataset.userId; // "123"
const role = userDiv.dataset.role; // "admin"

// Set data attributes
userDiv.dataset.userStatus = 'active';
// Now has attribute: data-user-status="active"
// 4. Checking for Attributes
// javascript
// // Check if attribute exists
// const hasClass = element.hasAttribute('class');

// Check multiple attributes
const requiredAttrs = ['src', 'alt'];
const allPresent = requiredAttrs.every(attr => img.hasAttribute(attr));
// 5. Getters and Setters for Custom Attributes
// You can create custom objects with attribute-like behavior:

// javascript
const customElement = {
    _attributes: {},

    // Getter => return value of attribute if exists else undefined
    getAttribute(attr) {
        return this._attributes[attr];
    },

    // Setter => set value and trigger side effects on change of attribute
    setAttribute(attr, value) {
        this._attributes[attr] = value;
        this.onAttributeChange(attr, value);
    },

    onAttributeChange(attr, value) {
        console.log(`Attribute ${attr} changed to ${value}`);
    }
};

customElement.setAttribute('color', 'blue'); // Logs change
console.log(customElement.getAttribute('color')); // "blue"
// 6. Working with All Attributes
// javascript
// Get all attributes as array
const attributes = Array.from(element.attributes);

// Convert to object
const attrObj = {};
attributes.forEach(attr => {
    attrObj[attr.name] = attr.value;
});

// Modern approach using reduce
const allAttributes = Array.from(element.attributes)
    .reduce((obj, attr) => {
        obj[attr.name] = attr.value;
        return obj;
    }, {});
// Best Practices
// Use dataset for custom data attributes rather than inventing your own

// Prefer direct property access for standard DOM properties (.id, .className)

// Use getAttribute()/setAttribute() for:

// Non-standard attributes

// When you need the literal attribute value

// SVG attributes which often require this method

// Remember that attribute names are case-insensitive in HTML but case-sensitive in JavaScript

// Performance Considerations
// javascript
// For multiple attribute changes, consider:
element.setAttribute('data-one', '1');
element.setAttribute('data-two', '2');
element.setAttribute('data-three', '3');

// More efficient for multiple changes:
const attrs = {
    'data-one': '1',
    'data-two': '2',
    'data-three': '3'
};

Object.keys(attrs).forEach(attr => {
    element.setAttribute(attr, attrs[attr]);
});
// Would you like me to elaborate on any specific aspect of attribute manipulation?
