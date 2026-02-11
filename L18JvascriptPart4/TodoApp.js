// let todo = [];
// // let prompt = require("prompt-sync")();
// let req = prompt("please enter your request: ");

// while (true) {
//     if (req === "quit") {
//         console.log("Quitting app...");
//         break;
//     }

//     if (req === "list") {
//         console.log("-------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(`${i}: ${todo[i]}`);
//         }
//         console.log("-------------");
//     } else if (req === "add") {
//         let task = prompt("Please enter the task you want to add: ");
//         todo.push(task);
//         console.log("Task added.");
//     } else if (req === "delete") {
//         let idx = parseInt(prompt("Please enter the index of the task you want to delete: "));
//         if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
//             todo.splice(idx, 1);
//             console.log("Task deleted.");
//         } else {
//             console.log("Invalid index.");
//         }
//     } else {
//         console.log("Invalid request.");
//     }

//     req = prompt("please enter your request: ");
// }






const todo = [];

console.log("📝 Welcome to the TODO List App!");
console.log("Available commands: list, add, update, delete, quit");

function startTodoApp() {
    while (true) {
        const req = prompt("What would you like to do? (list/add/update/delete/quit)").toLowerCase();

        if (req === "quit") {
            console.log("✅ Quitting the app. Goodbye!");
            break;
        }

        else if (req === "list") {
            console.log("\n📋 Your TODO List:");
            if (todo.length === 0) {
                console.log("No tasks yet.");
            } else {
                todo.forEach((task, i) => {
                    console.log(`${i}: ${task}`);
                });
            }
        }

        else if (req === "add") {
            const task = prompt("Enter the task:");
            if (task) {
                todo.push(task);
                console.log(`✅ Task added: "${task}"`);
            }
        }

        else if (req === "update") {
            const idx = parseInt(prompt("Enter index of task to update:"));
            if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
                const newTask = prompt("Enter the updated task:");
                console.log(`📝 Updated "${todo[idx]}" to "${newTask}"`);
                todo[idx] = newTask;
            } else {
                console.log("❌ Invalid index.");
            }
        }

        else if (req === "delete") {
            const idx = parseInt(prompt("Enter index of task to delete:"));
            if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
                const removed = todo.splice(idx, 1);
                console.log(`🗑️ Removed task: "${removed[0]}"`);
            } else {
                console.log("❌ Invalid index.");
            }
        }

        else {
            console.log("⚠️ Invalid command. Please enter one of: list, add, update, delete, quit");
        }
    }
}

startTodoApp();
