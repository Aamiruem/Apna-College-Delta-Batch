// switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday"; // This will execute
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}

console.log(`Today is ${dayName}`); // "Today is Wednesday"

// Switch with multiple cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "pear":
        console.log("This is a pome fruit"); // This will execute
        break;
    case "orange":
    case "lemon":
        console.log("This is a citrus fruit");
        break;
    default:
        console.log("Unknown fruit type");
}




let color = "red";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("GO");
    break;
  default:
    console.log("Broken Lights"); // ✅ Fixed the missing quote
}
