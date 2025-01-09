import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"
import { useState, useEffect } from "react"

function App(){

  const [taskList, settaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  
  useEffect(() => 
    {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
    }, [taskList]);

    /* 
    
    Se quiser, pode usar esta API para preencher a lista de tarefas

    useEffect(() => {
      const fetchTasks = async () => {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method:"GET",
        });

      const data = await response.json()
      settaskList(data);
      }
      fetchTasks()
    }, [])
    */

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

  function onClickSubmitButton(title, description){
    const newTask = {
      id: taskList.length + 1, 
      title, 
      description,
      isCompleted: false, 
    };
    settaskList([...taskList, newTask])
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas - React
        </h1>

        <AddTask
          onClickSubmitButton={onClickSubmitButton}
        />
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