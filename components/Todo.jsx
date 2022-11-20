export default function Todo({todo}) {
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
                        checked={todo.fields.completed} />
                    <button
                        type="button"
                        className="text-sm ml-2 hover:text-gray-300"
                    >delete
                    </button>
                </div>
            </div>
        </li>
    )
}