export function TaskForm(){
    return (
        <div className="bg-blue-300">
            <div className="text-3xl ">TaskForm</div>
            <div className={"mr-6"}>
                {/*add input with placeholder add task her */}
                <input type="text" className={"w-full rounded m-3 "} placeholder="Add Task Here"/>
                <div className={"flex justify-center"}>
                    <button className={"bg-green-500 text-white p-2 rounded hover:bg-green-300 mb-3"}>
                Add Task</button>
                </div>
            </div>
        </div>
    )
}