import { useState } from "react"

export function TodoInput(props){
    const {handleAddTodo} = props
    const [inputvalue,setInputvalue] = useState('')
    return (
        <div className="input-container">
            <input type="text" placeholder="Add Task" 
            value={inputvalue} 
            onChange={(e)=>{
               setInputvalue(e.target.value)
            }}/>
            <button onClick={()=>{
                 if(!inputvalue){return}
                handleAddTodo(inputvalue)
                setInputvalue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}