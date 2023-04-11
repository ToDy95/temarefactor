import React, {useState} from "react";
import { globalContext } from "./Context/Context";
import { useContext } from 'react';

 const CreateTask = (props) => {
    const [tasks, setTasks] = useContext(globalContext);
  
    const [taskId, SetTaskId] = useState("")
    const [taskStatus, SetTaskStatus] = useState("")
    const [taskReq, SetTaskReq] = useState("")
    const [taskDate, SetTaskDate] = useState("")

    const sendnewData = (event) => {
        event.preventDefault();
        const newTask = {
            id:taskId,
            status: taskStatus,
            message: taskReq,
            dueDate: new Date(taskDate)
          }
          setTasks(prev => [
            ...prev,
            newTask
          ])
    }
    return(
    <div>
        taskId
            <input type="text" name="taskId" value={taskId} onChange={(e) => SetTaskId(e.target.value)}/>
            taskStatus
            <input type="text" name="taskStatus" value={taskStatus} onChange={(e) => SetTaskStatus(e.target.value)} />
            taskReq
            <input type="text" name="taskReq" value={taskReq} onChange={(e) => SetTaskReq(e.target.value)}/>
            taskDate
            <input type="date" name="taskDate" value={taskDate} onChange={(e) => SetTaskDate(e.target.value)}/>
            <button onClick={sendnewData}>Submit Task</button>
    </div>
    )
}
export default CreateTask;