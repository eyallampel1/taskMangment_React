import { TaskItem } from "./TaskItem.jsx";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function TaskList({ task }) {
    const [taskArray, setTaskArray] = useState([]);
    const [completedTasks, setCompletedTasks] = useState({});

    const clickedOnCompletedTask = (taskIndex) => {
        setCompletedTasks((prevCompletedTasks) => ({
            ...prevCompletedTasks,
            [taskIndex]: !prevCompletedTasks[taskIndex],
        }));
    };

    const deleteTask = (indexToDelete) => {
        setTaskArray((prevTaskArray) => [
            ...prevTaskArray.slice(0, indexToDelete),
            ...prevTaskArray.slice(indexToDelete + 1),
        ]);
        setCompletedTasks((prevCompletedTasks) => {
            const updatedCompletedTasks = { ...prevCompletedTasks };
            delete updatedCompletedTasks[indexToDelete];
            return updatedCompletedTasks;
        });
    };

    useEffect(() => {
        if (task === "") return;
        setTaskArray((prevTaskArray) => [...prevTaskArray, task]);
    }, [task]);

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
            <div className="text-3xl">TaskList</div>

            <div className="flex justify-between m-4">
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">Completed</button>
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">In Progress</button>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300 mb-3">All</button>
            </div>
            <ul>
                {taskArray.map((task, index) => (
                    <li key={index} className="mb-3">
                        <TaskItem
                            task={task}
                            deleteTask={deleteTask}
                            index={index}
                            completedFlag={!!completedTasks[index]}
                            clickedOnCompletedTask={clickedOnCompletedTask}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}