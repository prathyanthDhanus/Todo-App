import React, { useState } from "react"

const AddTask=({addTask})=>{
    const [value,setValue] = useState("");
    const addItem = ()=>{
addTask(value);
setValue("");
    }
    return(
        <div>
        <div className="inputcontainer"><input type="text"
        className="input"
        placeholder="Write a new task here" value={value} onChange={(e)=>{setValue(e.target.value)}}/> <button onClick={addItem} className="btn">ADD TASK</button></div>
       
        </div>
    )
}
export default  AddTask