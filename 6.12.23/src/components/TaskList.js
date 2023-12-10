import {useRef,useEffect} from 'react'
import Task from './Task'
import useLocalStorage from '../hooks/useLocalStorage'

 const initialState=[
    {
        id:1,
        description:'Drink Coffee',
    }
 ]
const TaskList=()=>{
const[tasks,setTasks]=useLocalStorage('todo',initialState)
const inputRef=useRef()
const addTask=()=>{
    setTasks(
        [...tasks,
            {
                id:tasks.length+1,
                description:inputRef.current.value
            }
        ]
    
    )
    inputRef.current.value=''
}
const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))
}

useEffect(() => {
  inputRef.current.focus()
}, [])


    return(
        <div>
            {
                tasks.map((todo)=>(
                <Task task={todo} deleteTask={deleteTask} key={todo.id}/>
                )
                )
            }
            <input  ref={inputRef} type="text" placeholder="Add a task"/>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}
export default TaskList