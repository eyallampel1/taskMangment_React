import { TaskItem } from "./TaskItem.jsx";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function TaskList({ task }) {
    const [taskArray, setTaskArray] = useState([]);
    const [completedTasks, setCompletedTasks] = useState({});
    const [idCounter, setIdCounter] = useState(0);
    const [filter, setFilter] = useState("All");

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

    const updateTask = (taskId, newTaskText) => {
        setTaskArray((prevTaskArray) => prevTaskArray.map(task =>
            task.id === taskId ? { ...task, text: newTaskText } : task
        ));
    };

    useEffect(() => {
        if (task === "" || task === undefined) return;
        const newTask = { id: generateUniqueId(), text: task };
        setTaskArray((prevTaskArray) => [...prevTaskArray, newTask]);
    }, [task]);

    const getFilteredTasks = () => {
        if (filter === "Completed") {
            return taskArray.filter(task => completedTasks[task.id]);
        } else if (filter === "In Progress") {
            return taskArray.filter(task => !completedTasks[task.id]);
        } else {
            return taskArray;
        }
    };

    return (
        <div className="bg-red-400 mt-3 mb-3">
            <div className="text-3xl">TaskList</div>

            <div className="flex justify-between m-4">
                <button
                    onClick={() => setFilter("Completed")}
                    className={`p-2 rounded mb-3 ${filter === "Completed" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-100"}`}
                >
                    Completed
                </button>
                <button
                    onClick={() => setFilter("In Progress")}
                    className={`p-2 rounded mb-3 ${filter === "In Progress" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-100"}`}
                >
                    In Progress
                </button>
                <button
                    onClick={() => setFilter("All")}
                    className={`p-2 rounded mb-3 ${filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-100"}`}
                >
                    All
                </button>
            </div>
            <ul>
                {getFilteredTasks().map(({ id, text }) => (
                    <li key={id} className="mb-3">
                        <TaskItem
                            task={text}
                            deleteTask={() => deleteTask(id)}
                            taskId={id}
                            completedFlag={!!completedTasks[id]}
                            clickedOnCompletedTask={() => clickedOnCompletedTask(id)}
                            updateTask={updateTask}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}