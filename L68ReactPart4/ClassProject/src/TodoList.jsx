// export default function TodoList() {
//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input type="text" placeholder="add a task" />
//             <ul>
//                 <li>Task 1</li>
//                 <li>Task 2</li>
//                 <li>Task 3</li>
//             </ul>
//             <button>Add Task</button>
//             <input type="text" placeholder="Enter task" />
//             <button>Delete Selected</button>
//             <button>Mark As Completed</button>
//             <button>Mark As Uncompleted</button>
//             <button>Clear Completed Tasks</button>
//             <button>Toggle All Tasks</button>
//             <button>Save To Local Storage</button>
//             <button>Load From Local Storage</button>
//             <button>Export To JSON</button>
//             <button>Import From JSON</button>
//             <button>Sort By Due Date</button>
//             <button>Sort By Priority</button>
//             <button>Filter By Status</button>
//         </div>
//     );
// }












// import { useState } from "react";
// import {v4 as uuidv4} from "uuid";
// export default function TodoList() {
//     let [todos, setTodos] = useState([{task: "sample Task", id: uuidv4(), isDone: false}]);
//     let [newTodo, setNewTodo] = useState("");
//     let addNewTask = () => {
//         setTodos((prevTodos) => {
//             return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
//         })
//         console.log("we have to add new Task at Todo ");
//         setTodos([...todos, {task: newTodo, id: uuidv4()}], [...newTodo]);
//         setNewTodo("");
//     };

//     let updateTodoValue = (event) => {
//         // console.log(event.target.value);
//         setNewTodo(event.target.value);

//     }

//     let deleteTodo = (id) => {
//         console.log("we have to delete Task at Todo ", id);
//         setTodos(todos.filter((todo) => todo.id != id));
//     };

//     let markAsCompleted = (id) => {
//         console.log("we have to mark Task as completed at Todo ", id);
//         setTodos(todos.map((todo) => todo.id === id? {...todo, completed: true} : todo));
//     };

//     // let upperCaseAll = () => {
//     //     let newArr = todos.map((todo) => {
//     //         return {
//     //             ...todo,
//     //             task: todo.task.toUpperCase(),
//     //         };
//     //     });
//     //     console.log(newArr);
//     //     setTodos(newArr);
//     //        }



//     let upperCaseAll = () => {
//         setTodos((prevTodos) => {
//             return prevTodos.map((todo) => {
//                 return {
//                     ...todo,
//                     task: todo.task.toUpperCase(),
//                 };
//             });
//         });
//     };


//     let markAsDone = (id) => {
//         setTodos((todos) =>
//     todos.map((todo) =>{
//         if(todo.id === id){
//             return {
//                 ...todo,
//                 isDone: true,

//             };
//         } else {
//             return todo;
//         }
//     })
// );
// };


//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
//             <br />
//             <br />
//             <button onClick={addNewTask} >Add Task</button>
//             <br />
//             <br />
//             <br />

//             <hr />
//             <h4>Task Todo</h4>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>{todo.task}</span>
//                         &nbsp; &nbsp; &nbsp; &nbsp;
//                         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                         &nbsp; &nbsp; &nbsp; &nbsp;

//                         <br />
//                         <br />
//                         <button onClick={() => markAsCompleted(todo.id)}>Mark As Completed</button>
//                         &nbsp; &nbsp; &nbsp; &nbsp;

//                         <br />
//                         <br />
//                         <button onClick={() => upperCaseAll(todo.id)}>Upper Case All</button>

//                         <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
//                     </li>
//                 ))}
//             </ul>
//             <br />

//             <br />
//             <button onClick={upperCaseAll}>upperCaseAll</button>

//         </div>
//     );
// }








import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs for tasks 

export default function TodoList() {

    // State for all todos
    const [todos, setTodos] = useState([ // Initial sample task
        {
            task: "Sample Task",
            id: uuidv4(),
            isDone: false,
        },
    ]);

    // State for input field
    const [newTodo, setNewTodo] = useState("");

    // Add New Task
    const addNewTask = () => {

        // Prevent empty task
        if (newTodo.trim() === "") return;

        const newTask = {
            task: newTodo,
            id: uuidv4(),
            isDone: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTask]);

        // Clear input
        setNewTodo("");
    };

    // Update input value
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    // Mark one task as done
    const markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };

    // Convert all tasks to uppercase
    const upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    return (
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />

            <br />
            <br />

            <button onClick={addNewTask}>
                Add Task
            </button>

            <br />
            <br />

            <button onClick={upperCaseAll}>
                UpperCase All
            </button>

            <hr />

            <h3>Tasks</h3>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>

                        <span
                            style={{
                                textDecoration: todo.isDone
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.task}
                        </span>

                        &nbsp;&nbsp;

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>

                        &nbsp;&nbsp;

                        <button onClick={() => markAsDone(todo.id)}>
                            Mark As Done
                        </button>

                        <br />
                        <br />

                    </li>
                ))}
            </ul>
        </div>
    );
}
