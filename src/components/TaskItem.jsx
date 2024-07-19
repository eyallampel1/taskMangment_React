// eslint-disable-next-line react/prop-types
import { useState } from "react";

export function TaskItem({ task, deleteTask, taskId, completedFlag, clickedOnCompletedTask }) {
    return (
        <div className={`flex items-center justify-between border border-black border-2 p-4 ${completedFlag ? "bg-green-500" : ""}`}>
            <div className={`text-3xl bg-blue-500 hover:bg-blue-300 ${completedFlag ? "line-through" : ""}`}>TaskItem is : {task}</div>

            <div className="flex">
                <button className="ml-3 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2">
                    Edit
                </button>
                <button
                    onClick={clickedOnCompletedTask}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                >
                    {completedFlag ? "Undo" : "Completed"}
                </button>
                <button
                    onClick={deleteTask}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}