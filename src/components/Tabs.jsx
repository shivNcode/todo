import { useState } from "react";

export function Tabs(props){
    const tabs = ['All' , 'Open' , 'Completed'];
    const {todos,selectedtab,setSelectedtab} = props
    const [tabe , setTabe] = useState('')
    return(
       
        <nav className="tab-container">
           { tabs.map((tab,tabIndex) => {
            const numOfTasks = tab ==='All'? 
                todos.length :
                tab==='Open'?
                    todos.filter(val=>!val.complete).length:
                    todos.filter(val=>val.complete).length
                return (
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
            <hr />
        </nav>

        
    )
}

     
                //      let numOfTasks;

                // if (tab === 'Alls') {
                //         numOfTasks = todos.length;
                //     } 
                // else if (tab === 'Open') {
                //         numOfTasks = todos.filter(val => !val.complete).length;
                //     }
                // else {
                //         numOfTasks = todos.filter(val => val.complete).length;
                //     }