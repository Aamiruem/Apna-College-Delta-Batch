// To do App
let todo = [];
let req = prompt("Please enter your request :");

while (true) {
    if (req == "quit") {
        console.log("You quit the app.");
        break;
    }

    if (req == "add") {
        let task = prompt("Please enter the task which you want to add :");
        todo.push(task);
        console.log("Task added successfully.");
    }
    else if (req == "list") {
        console.log("Your tasks are :");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i+1}. ${todo[i]}`);
        }
        console.log("______________");
    }
    else if (req == "delete") {
        let idx = prompt("Please enter the task index which you want to delete :");
        todo.splice(idx-1, 1);
        console.log("Task deleted successfully.");
    }
    else {
        alert(`Invalid request. Press "OK" to enter a valid request.`);
    }

    req = prompt("Please enter your request :");
}