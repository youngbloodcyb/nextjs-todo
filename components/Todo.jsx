export default function Todo({todo}) {
    return (
        <li className="flex flex-row w-60 justify-between">
            <p>{todo.fields.description}</p>
            <input type="checkbox" name="completed" id="completed" checked={todo.fields.completed} />
        </li>
    )
}