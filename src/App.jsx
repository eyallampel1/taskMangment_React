import {TaskForm} from "./components/TaskForm.jsx";
import {TaskList} from "./components/TaskList.jsx";

function App() {

  return (
 <>
     <div className={"flex justify-center mb-3 underline"}>
         <div className={"text-3xl"}>Task Management</div>
     </div>
         <TaskForm/>
     <TaskList />
 </>
  )
}

export default App