import { TaskItem } from "./TaskItem.jsx";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function TaskList({ task }) {
    const [taskArray, setTaskArray] = useState([]);
    const [completedTasks, setCompletedTasks] = useState({});
    const [idCounter, setIdCounter] = useState(0);

    const generateUniqueId = () => {
        setIdCounter(prevIdCounter => prevIdCounter + 1);
        return Date.now() + idCounter;
    };

    const clickedOnCompletedTask = (taskId) => {
        setCompletedTasks((prevCompletedTasks) => ({
            ...prevCompletedTasks,
            [taskId]: !prevCompletedTasks[taskId],
        }));
    };

    const deleteTask = (taskIdToDelete) => {
        setTaskArray((prevTaskArray) => prevTaskArray.filter(task => task.id !== taskIdToDelete));
        setCompletedTasks((prevCompletedTasks) => {
            const updatedCompletedTasks = { ...prevCompletedTasks };
            delete updatedCompletedTasks[taskIdToDelete];
            return updatedCompletedTasks;
        });
    };

    useEffect(() => {
        if (task === "" || task === undefined) return;
        const newTask = { id: generateUniqueId(), text: task };
        setTaskArray((prevTaskArray) => [...prevTaskArray, newTask]);
    }, [task]);

    return (
        <div className="bg-red-400 mt-3 mb-3">
            <div className="text-3xl">TaskList</div>

            <div className="flex justify-between m-4">
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">Completed</button>
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-100 mb-3">In Progress</button>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300 mb-3">All</button>
            </div>
            <ul>
                {taskArray.map(({ id, text }) => (
                    <li key={id} className="mb-3">
                        <TaskItem
                            task={text}
                            deleteTask={() => deleteTask(id)}
                            taskId={id}
                            completedFlag={!!completedTasks[id]}
                            clickedOnCompletedTask={() => clickedOnCompletedTask(id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}