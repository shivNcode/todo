export function TodoCard(props){
    const {todo,handleDeleteTodo,todoIndex,handleComplteTodo} = props
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled = {todo.complete} onClick={()=>{handleComplteTodo(todoIndex)}} >
                    <h6>Done</h6>
                </button>
                <button onClick={()=>{
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}