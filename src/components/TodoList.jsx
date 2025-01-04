import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos,selectedtab,handleDeleteTodo} = props
    const tab = selectedtab
    const filterTodosList = tab ==='All'?
        todos:
        tab ==='Completed'?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)
    return (
        <>
        {
            filterTodosList.map((todo,todoIndex)=>{
                return (
                    <TodoCard 
                        key = {todoIndex} 
                        todoIndex={todoIndex}
                        {...props}
                        todo={todo}/>
                )
            })
        }
           
        </>
    )
}