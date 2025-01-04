import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import './index.css'

// const todos = [
//   {input:'hello! add yout first todo!' , complete:true},
//   {input:'Get the groceries' , complete:false},
//   {input:'Learn how to web design' , complete:false},
//   {input:'Say hi to gran gran' , complete:true}
// ]


function App() {
  
  const [count, setCount] = useState(0)
  // const [todos, setTodos] = useState([
  //   { input: 'hello! add your first todo!', complete: true },
  //   { input: 'Get the groceries', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true }
  // ]);
  let savedTodos = [
    {input: "go to gym", complete: false}]
  const [todos, setTodos] = useState(() => {
    savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });



  const [selectedtab,setSelectedtab]=useState('Open')
  function handleAddTodo(newTodo){
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos (newTodoList);
  }
  function handleComplteTodo(index){
    // todos[index].complete = true
    let newTodoList = [...todos]
    let completeTask = todos[index]
    completeTask['complete']=true
    newTodoList[index] = completeTask
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((Val,valIndex)=>{
      return valIndex!==index
    })
    setTodos(newTodoList)
}



useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);



  return (
    <>
     <Header todos={todos}/>
     <Tabs  todos={todos} selectedtab={selectedtab} setSelectedtab={setSelectedtab}/>
     <TodoList  todos={todos} selectedtab={selectedtab} handleDeleteTodo={handleDeleteTodo} handleComplteTodo={handleComplteTodo}/>
     <TodoInput handleAddTodo = {handleAddTodo} />
    </>
  )
}

export default App
