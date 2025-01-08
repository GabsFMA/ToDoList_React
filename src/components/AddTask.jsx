function AddTask(){
    return(
        <div className="flex flex-col bg-slate-200 rounded-md shadow space-y-4 p-6">
            <input type="text" placeholder="Insira o título da tarefa"/>
            <input type="text" placeholder="Insira a descrição da tarefa"/>

        </div>
    )
}

export default AddTask