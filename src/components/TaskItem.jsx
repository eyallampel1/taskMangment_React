// eslint-disable-next-line react/prop-types
export function TaskItem({task,deleteTask,index}){
    return (
        <div className="flex  items-center justify-between ">
            <div className="text-3xl bg-green-500 hover:bg-green-300">TaskItem is : {task}</div>

            <div className={"flex"}>
                <button
                    className="ml-3 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600  mr-2">
                    Edit
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  mr-2">
                    Completed
                </button>
                <button
                    onClick={() => {deleteTask(index)} }
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2 ">
                    Delete
                </button>
            </div>

        </div>
    )
}