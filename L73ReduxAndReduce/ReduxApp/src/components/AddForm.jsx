import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
        
    };
    

    return (
        <form
            onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}  value={task} />
            <button type="submit" >Add Task</button>
        </form>
    );
}
