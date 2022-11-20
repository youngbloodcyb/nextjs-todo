import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";

export default function Todo({todo}) {
    const {updateTodo, deleteTodo} = useContext(TodosContext);
    
    const handleToggleCompleted = () => {
        const updatedFields = {
            ... todo.fields,
            completed: !todo.fields.completed
        }
        const updatedTodo = {id: todo.id, fields: updatedFields};
        updateTodo(updatedTodo);
    }
    return (
        <li className="w-72">
            <hr className="mb-2"></hr>
            <div className="flex flex-row justify-between">
                <p className={`${todo.fields.completed ? 'line-through' : ''}`}>{todo.fields.description}</p>
                <div>
                    <input 
                        type="checkbox" 
                        name="completed" 
                        id="completed" 
                        checked={todo.fields.completed} 
                        onChange={handleToggleCompleted} />
                    <button
                        type="button"
                        className="text-sm ml-2 hover:text-gray-300"
                        onClick={() => deleteTodo(todo.id)}
                    >delete
                    </button>
                </div>
            </div>
        </li>
    )
}