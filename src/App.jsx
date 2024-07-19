import { TaskForm } from "./components/TaskForm.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useState } from "react";

function App() {
    const [task, setTask] = useState("");

    return (
        <>
            <div className="flex justify-center mb-3 underline">
                <div className="text-3xl">Task Management</div>
            </div>
            <TaskForm setTask={setTask} />
            <TaskList task={task} />
        </>
    );
}

export default App;