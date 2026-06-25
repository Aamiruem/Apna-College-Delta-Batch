// Nested if else in JavaScript
// Nested if else statements allow you to place conditional statements inside other conditional statements, creating more complex decision-making structures.

// Basic Syntax


// if (condition1) {
//     // Outer if block
//     if (condition2) {
//         // Inner if block
//     } else {
//         // Inner else block
//     }
// } else {
//     // Outer else block
// }





// Examples
// 1. Age and License Check

let age = 19;
let hasLicense = true;

if (age >= 18) {
    console.log("You're an adult");

    if (hasLicense) {
        console.log("You can drive a car"); // This will execute
    } else {
        console.log("You need a license to drive");
    }
} else {
    console.log("You're a minor");
}
// 2. User Authentication System
// javascript
// Copy
let isLoggedIn = true;
let isAdmin = false;
let isVerified = true;

if (isLoggedIn) {
    console.log("Welcome back!");

    if (isAdmin) {
        console.log("Loading admin dashboard...");
    } else {
        if (isVerified) {
            console.log("Loading user dashboard..."); // This will execute
        } else {
            console.log("Please verify your email");
        }
    }
} else {
    console.log("Please log in first");
}
// 3. Temperature and Weather Check
// javascript
// Copy
let temperature = 22;
let isRaining = false;

if (temperature > 30) {
    console.log("It's hot outside");

    if (isRaining) {
        console.log("Tropical weather - hot and rainy");
    } else {
        console.log("Dry heat");
    }
} else if (temperature > 20) {
    console.log("Pleasant weather"); // This will execute

    if (isRaining) {
        console.log("Bring an umbrella");
    } else {
        console.log("Perfect day to go out"); // This will execute
    }
} else {
    console.log("It's cold");

    if (isRaining) {
        console.log("Cold and wet - stay inside");
    } else {
        console.log("Bundle up");
    }
}
// Best Practices
// Limit nesting depth: Try to keep nesting to 2-3 levels maximum for readability.

// javascript
// Copy
// Hard to read
if (condition1) {
    if (condition2) {
        if (condition3) {
            if (condition4) {
                // code
            }
        }
    }
}
// Use logical operators when possible to flatten nested structures:

// javascript
// Copy
// Instead of:
if (user) {
    if (user.profile) {
        if (user.profile.name) {
            console.log(user.profile.name);
        }
    }
}

// Use:
if (user && user.profile && user.profile.name) {
    console.log(user.profile.name);
}

// Or with optional chaining:
if (user?.profile?.name) {
    console.log(user.profile.name);
}
// Consider switch statements for multiple exact value checks:

// javascript
// Copy
// Instead of nested if-else:
if (day === 1) {
    console.log("Monday");
} else {
    if (day === 2) {
        console.log("Tuesday");
    } else {
        if (day === 3) {
            console.log("Wednesday");
        }
    }
}

// Use switch:
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
}
// Early returns can help reduce nesting in functions:

// javascript
// Copy
function checkAccess(user) {
    if (!user) return "No user";
    if (!user.active) return "Inactive user";
    if (!user.subscription) return "No subscription";

    return "Access granted";
}
// Nested if else statements are powerful but should be used judiciously to maintain code readability and maintainability.
