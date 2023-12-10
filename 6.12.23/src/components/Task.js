const Task=(props)=>{
    const {task,deleteTask}=props
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
            <p>{task.description}</p>
            <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
    )

}
export default Task