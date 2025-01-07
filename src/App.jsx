import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"
import { useState } from "react"

function App(){

  const [taskList, settaskList] = useState([
    {
    id: 1, 
    title: "Terminar ToDoList",
    description: "Terminar de fazer esse curso logo e subir todo no github",
    isCompleted: false
    },
    {
    id: 2, 
    title: "Terminar ToDoList2",
    description: "Mais uma vez Terminar de fazer esse curso logo e subir todo no github",
    isCompleted: false
    }
])
  
  function onTaskClick(taskListId){
     const completedTasks = taskList.map(taskList =>{

      //É preciso atualizar a tarefa  
      if(taskList.id === taskListId){
        return {...taskList, isCompleted: !taskList.isCompleted}
      }

      //Não é preciso atualizar a tarefa

      return taskList
     });

     settaskList(completedTasks);
  }

  function onClickDeleteTask(taskListId){
    const maintainedTasks = taskList.filter(taskList => taskList.id !== taskListId)
    settaskList(maintainedTasks);
  }

  return(
    <div className=" w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas - React
        </h1>
        <TaskList 
          taskList={taskList} 
          onTaskClick={onTaskClick} 
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>

    </div>

  )
}

export default App