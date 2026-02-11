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












import { useState } from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample Task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        })
        console.log("we have to add new Task at Todo ");
        setTodos([...todos, {task: newTodo, id: uuidv4()}], [...newTodo]);
        setNewTodo("");
    };
    
    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);

    }

    let deleteTodo = (id) => {
        console.log("we have to delete Task at Todo ", id);
        setTodos(todos.filter((todo) => todo.id != id));
    };

    let markAsCompleted = (id) => {
        console.log("we have to mark Task as completed at Todo ", id);
        setTodos(todos.map((todo) => todo.id === id? {...todo, completed: true} : todo));
    };

    // let upperCaseAll = () => {
    //     let newArr = todos.map((todo) => {
    //         return {
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         };
    //     });
    //     console.log(newArr);
    //     setTodos(newArr);
    //        }
            
        

    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            });
        });
    };


    let markAsDone = (id) => {
        setTodos((todos) =>
    todos.map((todo) =>{
        if(todo.id === id){
            return {
                ...todo,
                isDone: true,
                
            };
        } else {
            return todo;
        }
    })
);
};


    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewTask} >Add Task</button> 
            <br />
            <br />
            <br />

            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        
                        <br />
                        <br />
                        <button onClick={() => markAsCompleted(todo.id)}>Mark As Completed</button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        
                        <br />
                        <br />
                        <button onClick={() => upperCaseAll(todo.id)}>Upper Case All</button>

                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <br />
            
            <br />
            <button onClick={upperCaseAll}>upperCaseAll</button>
            
        </div>
    );
}
