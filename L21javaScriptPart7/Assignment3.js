const object = {
    message: 'Hello World',
    logMessage() {
        console.log(this.message);
    }
};

// Call the method directly
object.logMessage(); // Output: Hello World

// Use setTimeout to call the method after 1000ms
setTimeout(() => {
    object.logMessage();
}, 1000);
console.log(object)


const object1 = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};

// Use setTimeout with an arrow function to maintain the correct `this` context
setTimeout(() => {
    object.logMessage();
}, 1000);






const object2 = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};

// Use setTimeout with `bind` to ensure `this` refers to `object`
setTimeout(object.logMessage.bind(object), 1000);

