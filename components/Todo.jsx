export default function Todo({todo}) {
    return (
        <li className="w-72">
            <hr className="mb-2"></hr>
            <div className="flex flex-row justify-between">
                <p>{todo.fields.description}</p>
                <input 
                    type="checkbox" 
                    name="completed" 
                    id="completed" 
                    checked={todo.fields.completed} />
            </div>
        </li>
    )
}