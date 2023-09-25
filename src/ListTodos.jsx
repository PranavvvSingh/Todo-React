export function ListTodos({todos, deleteTodo, toggleTodo}){
    return(
        <ul className="list">
            { todos.length===0 && "No Todos"} 
            {todos.map(todo=> { return(  
                <li key={todo.id}>
                <label>
                    <input type="checkbox" onChange={(e)=>toggleTodo(e,todo.id,e.target.checked)} checked={todo.completed}></input>
                    {todo.title}
                </label>
                <button className="btn btn-danger" onClick={e=>deleteTodo(todo.id)}>Delete</button>
                </li>
            )})}
        </ul>
    )
}
