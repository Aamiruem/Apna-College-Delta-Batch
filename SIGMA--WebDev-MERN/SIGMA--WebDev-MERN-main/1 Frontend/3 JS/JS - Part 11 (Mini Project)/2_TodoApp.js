let inputTask = document.querySelector("input");
let ul = document.querySelector("ul");
let addTask = document.querySelector("button");

addTask.addEventListener("click", function () {
    let task = document.createElement("li");
    task.innerText = inputTask.value + " ";
    ul.appendChild(task); // task add into ul as a list
    console.log(task.innerText, "task added.");

    let deleteTask = document.createElement("button");
    deleteTask.innerText = " Delete";
    task.appendChild(deleteTask);

    inputTask.value = ""; // clear after adding a task
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
        console.log(event.target.parentElement.innerText + "d.");
    }
});