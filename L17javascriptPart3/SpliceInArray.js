// ✅ splice() – Remove, Replace, or Add Elements
// array.splice(start, deleteCount, item1, item2, ...)
// start – index to begin from

// deleteCount – number of elements to remove

// items – optional, to insert new elements at that position


let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.splice(4));
// returns: ['pink', 'white']
// now: ['red', 'yellow', 'blue', 'orange']


//  Remove 1 element from beginning (index 0):
console.log(colors.splice(0, 1));
// returns: ['red']
// now: ['yellow', 'blue', 'orange']




// 💡 Also: Insert elements
colors.splice(1, 0, "green");
// inserts 'green' at index 1 without deleting anything
// result: ['yellow', 'green', 'blue', 'orange']



let color = ["red", "yellow", "blue", "orange", "pink", "white"];

color.splice(4);            // removes from index 4 → ['pink', 'white']
color.splice(0, 1);         // removes 1 from start → ['red']
color.splice(1, 0, "green") // inserts 'green' at index 1
