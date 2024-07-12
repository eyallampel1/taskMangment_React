import {TaskItem} from "./TaskItem.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export function TaskList({task}){

    const [taskArray, setTaskArray] = useState([])

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
        <div className="bg-red-400 mt-3">
            <div className="text-3xl ">TaskList</div>

            <div className="flex  justify-between m-4">
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-300 mb-3">Completed</button>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-300 mb-3">In Progress</button>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-300 mb-3">All</button>
            </div>
            <ul>
                {taskArray.map((task, index) => {
                    return (
                        <li key={index} className={"mb-3"}>
                            <TaskItem task={task}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}