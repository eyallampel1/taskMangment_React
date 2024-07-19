import { useState } from "react";

export function TaskItem({ task, deleteTask, taskId, completedFlag, clickedOnCompletedTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedTask(task);
    };

    const handleSaveClick = () => {
        updateTask(taskId, editedTask);
        setIsEditing(false);
    };

    return (
        <div className={`flex items-center justify-between border border-black border-2 p-4 ${completedFlag ? "bg-green-500" : ""}`}>
            {isEditing ? (
                <div className="flex-grow">
                    <input
                        type="text"
                        className="w-full rounded m-3 p-2"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <div className="flex justify-between">
                        <button
                            onClick={handleSaveClick}
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-300 mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={`text-3xl bg-blue-500 hover:bg-blue-300 ${completedFlag ? "line-through" : ""}`}>TaskItem is : {task}</div>
                    <div className="flex">
                        <button
                            onClick={handleEditClick}
                            className="ml-3 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2"
                        >
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
                </>
            )}
        </div>
    );
}