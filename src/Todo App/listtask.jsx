import React from "react"
  
const ListTasks = ({task,index,removeTask}) => {
return (
   <div>
   <div className="li-task">{task.title}
    <button onClick={()=>{removeTask(index)}} className="dlt-btn">DELETE</button>
   </div>
   </div>
)

}
export default ListTasks