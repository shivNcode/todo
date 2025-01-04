1. npm install create-vite@6.1.1
   npx create-vite(these are the command which you have ton run on the terminal)
#info 1 = Vite is a modern frontend build tool and development environment designed to be fast, lightweight, and efficient. The name "Vite" is derived from the French word for "fast," which reflects its primary focus on speed and performance.
2. cd project name 
    npm install
#info 2  = these command whill gives us the boiler plate for the frame work
3. create the components like Header.jsx Tabs.jsx TodoList.jsx TodoInput.jsx TodoCard.jsx
4. in this our main focus is to learn react so  the css imported from the outside and a fanta.css package is also taken form the outside
5. now we move to Tabs.jsx and build 3 button by using array inputing name and map() function and this could be the smart apporach and dont forget to use the key of each array element becos passing key will keep the track of each element, the array 
code   >>const tabs = ['Alls' , 'Open' , 'Completed'];
        { tabs.map((tab,tabIndex) => {
                return (
                    <button key = {tabIndex}><h4>{tab}</h4></button>
                )
            })}
            >>
6. now we will create the data like this
   >> const todos = [
  {input:'hello! add yout first todo!' , complete:true},
  {input:'Get the groceries' , complete:false},
  {input:'Learn how to web design' , complete:false},
  {input:'Say hi to gran gran' , complete:true}
] >>
in the app.jsx and the reason for that is becos app.jsx is the parent of all so it could pass this data to all by passing props in the component tags inside the app.jsx 
>>  <>
     <Header todos={todos}/>
     <Tabs  todos={todos}/>
     <TodoList  todos={todos}/>
     <TodoInput  todos={todos}/>
    </> >>
And then move to header component which will receive the data by the props
>> export function Header(props){
    const {todos} = props; //this will create the variable todos with the data props is having.
    const todoLength = todos.length;//lenght of the todos
    return (
        <header>
            <h1 className="text-gradient">you have {todoLength} open tasks.</h1>
        </header>
    )
}
7. Inside the header
    >>const isTaskPlural = todos.length !=1 >>
the above line means that if the todos.lenght is not 1 then its value is given to isTaskPlural other vise isTaskPlural will not have any value.
8.  Now we assign no of task that display under Tabs.jsx on the screen for that we first pass data to the Tabs.jsx from the app and then save that data in the varible like todos(remenber the data is taken from the props pass int he fnx of the Tabs.jsx) and inside our previous array map where map is giving "All" ," Completed "and "Open" for each we check is the "All" is there then print give the length of whole todos to the varible of the chose and and print that at the place of no of task and for the "Open" and "Completed" option inside the map we could use the filter().
If the status of complete inside the todos in true then include it and then and then print the length in final output.
code:
>>  <nav className="tab-container">
           { tabs.map((tab,tabIndex) => {
            const numOfTasks = tab ==='All'? 
                todos.lenght :
                tab==='Open'?
                    todos.filter(val=>!val.complete).length:
                    todos.filter(val=>val.complete).length
                return (
                    <button className="tab-button" 
                    key = {tabIndex}>
                        <h4>{tab}<span>{numOfTasks}</span> </h4></button>
                )
            })}   >>
9. Now we move to TodoList.jsx 
#info 9 = TodoList.jsx accept our the tab and accourding to that help us to dislplay the task but TodoList.jsx itself uses the TodoCard.jsx for that it.
Bassically we create a varible inside the Todo.List.jsx which have the information according to the tabs like "All" , "Completed" or "Open". let the varible be 'filterTodoList'.(the data is inside the todos)
Code:
>> const tab = 'Completed'
    const filterTodosList = tab ==='All'?
        todos:
        tab ==='Completed'?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)  >>
Then we will map 'filterTodoList' to get each task inside it one by one to pass then inside the TodoCard.jsx and return that task insde the TodoCard.jsx(don't forget the key) 
Code:
>> {
            filterTodosList.map((todo,todoIndex)=>{
                return (
                    <TodoCard 
                        key = {todoIndex}  
                        todo={todo}/>
                )
            })
        }
10. Data of each task received by the TodoCard.jsx
info 10 = TodoCard.jsx is receiving the data of each task like "input" and "complete" status 
Code:
>>  const {todo} = props
    <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled = {todo.complete}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
And you will print that data inside the TodoCard.jsx 
11. Summary of step 9 and 10 = basically what we are doing based on tab we taken data in a varible(the value have 0 or more task) and then pass that data inside the (use map() for that becos varible may have more than task)TodoCard.jsx and it then displaying it 
12. Now to move to TodoInput.jsx to create the section for add task
code:
>>  <div className="input-container">
            <input type="text" placeholder="Add Task" />
            <button>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div> >>
13. Now we work on the function of the adding task 
First we create a fnx inside App.jsx to do that which will take the input value and then set that input value to our todos but before that we have to define our todos using useState 
Code:
>> const [todos, setTodos] = useState([
    { input: 'hello! add your first todo!', complete: true },
    { input: 'Get the groceries', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true }
  ]);//deing the data inside useSate varible
  function handleAddTodo(newTodo){
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos (newTodoList);
  }//to add the new task. >>
  newTodo of the function will get from the input value of TodoInput.jsx but before that we have to pass this fuction to the TodoInput.jsx 
  >> <TodoInput handleAddTodo = {handleAddTodo} /> >>
After pasing the fucntion then we will pass the value of input when the user click the add button 
Code:
>> export function TodoInput(props){
    const {handleAddTodo} = props//destruring the fnx
    const [inputvalue,setInputvalue] = useState('')
    return (
        <div className="input-container">
            <input type="text" placeholder="Add Task" 
            value={inputvalue} 
            onChange={(e)=>{
               setInputvalue(e.target.value)
            }}/>
            <button onClick={()=>{
                 if(!inputvalue){return}  //when noting enter button will not work
                handleAddTodo(inputvalue)  //calling the fnx
                 setInputvalue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
} >>
14. Now we will work on the fuction of the tab section mean on selecting a particular tab the section of task will open automatically 
So we have to pass the selected tab to the TodoList.jsx then it will open task according to that but tabs button are in Tabs.jsx.
So to get selected tab from Tabs.jsx we define selectedtab varible in the App.jsx and pass it to the Tabs.jsx and assign it value inside the Tab.jsx and then pass that in the TodoList.jsx
code:
App.jsx::
>> const [selectedtab,setSelectedtab]=useState('Open')

    <Tabs  todos={todos} selectedtab={selectedtab} setSelectedtab={setSelectedtab}/> 
    >>
Tabs.jsx::
>>  const {todos,selectedtab,setSelectedtab} = props
    <button className={"tab-button" + 
                        (tab==selectedtab?
                        'tab-selected' :
                        '')
                    }
                    onClick={()=>{
                        setSelectedtab(tab)
                    }}
                    key = {tabIndex}>
                        <h4>{tab}<span>({numOfTasks})</span> </h4></button>
                )
            })}
            <hr />  >>
Here clasName is dynamically changing when you select the tab mean the added class will only apply when you click a button and then it property get change
Passing selectedtab to TodoList.jsx
code:
>> <TodoList  todos={todos} selectedtab={selectedtab}/> >>
Todolist.jsx::
>>   const {todos,selectedtab} = props
    const tab = selectedtab >>
15. Now we will work on the fucntioning of the "delete" and "done" button
For the both the button we create two fnx in App.jsx "handleComplteTodo" "handleDeleteTodo"
First focus on "Delete" button(handleDeleteTodo function)
Inside the handleDeleteTodo fnx we will pass the index of the button which have seleted and it will delete the button with the help if index.
code:
>>   function handleDeleteTodo(index){
    let newTodoList = todos.filter((Val,valIndex)=>{
      return valIndex!==index //now newTodoList have only those index object which is now equal to the index pass to the function
    })
    setTodos(newTodoList)
} >>
REMEMBER THE SYNTAX OF FILTER : ##array.filter(callback(element, index, array), thisArg)
Now focus on the "Done" button
this also build like the delete button we will make a fnx "handleComplteTodo" and pass the index on the chosn button inside it and then then we change the status of the 'complete' to 'ture' 
To change the status there could be may approch one will we 
Code:
>>function handleComplteTodo(index){
     todos[index].complete = true 
    } >>
    Another would be 
Code:
>>function handleComplteTodo(index){
    let newTodoList = [...todos]
    let completeTask = todos[index]
    completeTask['complete']=true
    newTodoList[index] = completeTask
    setTodos(newTodoList)
  } >>
  this work more fast because 




