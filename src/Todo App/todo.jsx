import React, { useEffect, useState } from "react";
import '../Todo App/todo.css'
import AddTask from "./addtask";
import ListTasks from "./listtask";

const TodoApp = () => {
    const [tasks,setTasks] = useState([]);
    useEffect (()=>{
        document.title=`You have ${tasks.length}pending tasks`
    })
    const addTask = (title)=>{
const newTask = [...tasks,{title}]
setTasks(newTask)
    };
    const removeTask = (index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
    return (
        <div>
        <div className="todo-box">
        <div className="head">TODO APP</div>
        <div className="task-adding"><AddTask addTask={addTask}/></div>
        <div className="added-tasks">{tasks.map((task,index)=>(<ListTasks task={task} removeTask={removeTask} index={index}key={index}/>))}</div>
        </div>
        </div>
    )
}
export default TodoApp