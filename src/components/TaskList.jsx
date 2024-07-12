import {TaskItem} from "./TaskItem.jsx";

export function TaskList(){
    return (
        <div className="bg-red-400">
            <div className="text-3xl ">TaskList</div>
            <TaskItem />
        </div>
    )
}