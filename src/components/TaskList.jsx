import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskList({taskList, onTaskClick, onClickDeleteTask}){

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {taskList.map((taskList) => (
                <li key={taskList.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(taskList.id)} 
                        className={`w-full bg-slate-400 text-white p-2 rounded-md 
                        ${taskList.isCompleted && "line-through"}`}>
                            {taskList.title}
                    </button>
                    <button
                         
                        className="bg-slate-400 p-2 text-white rounded-md">
                        <ChevronRightIcon/>
                    </button>
                    <button 
                        onClick={() => onClickDeleteTask(taskList.id)}
                        className="bg-slate-400 p-2 text-white rounded-md">
                        <TrashIcon/>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList