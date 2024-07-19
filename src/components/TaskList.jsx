import {TaskItem} from "./TaskItem.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export function TaskList({task}){

    const [taskArray, setTaskArray] = useState([]);
    const [completedFlag, setCompletedFlag] = useState(false);
   var completedIndex=666;
    const clickedOnCompletedTask=(taskItemCompleted) =>{
        completedIndex=taskItemCompleted;
        console.log(taskItemCompleted);
        console.log("completed");
        setCompletedFlag(!completedFlag);
    }

    const deleteTask = (indexToDelete) => {
        setTaskArray(() => [
            ...taskArray.slice(0, indexToDelete),
            ...taskArray.slice(indexToDelete + 1)
        ]);
    };

    useEffect(()=>{
        if(task === "") return;
        console.log("task is :" +task);
        setTaskArray([...taskArray,task]);
        console.log("taskArray is :" +taskArray);
        console.log("taskArray length is :" +taskArray.length);
    },[task])

    useEffect(() => {
        if (taskArray.length > 0) {

            console.log("Task Array is :", taskArray);
            console.log("Latest task is :", taskArray[taskArray.length - 1]);
        }
    }, [taskArray]);

    useEffect(() => {
        setTaskArray(taskArray.slice(1));
    }, []);

    return (
        <div className="bg-red-400 mt-3 mb-3">
            <div className="text-3xl ">TaskList</div>

            <div className="flex  justify-between m-4">
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">Completed</button>
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">In Progress</button>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300 mb-3">All</button>
            </div>
            <ul>
                {taskArray.map((task, index) => {
                    return (
                        <li key={index} className={"mb-3"}>
                            {(completedIndex !== index)?<TaskItem task={task} deleteTask={deleteTask} index={index} completedFlag={completedFlag} clickedOnCompletedTask={clickedOnCompletedTask}/>:
                                <TaskItem task={task} deleteTask={deleteTask} index={index} completedFlag={completedFlag} clickedOnCompletedTask={clickedOnCompletedTask}/>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}