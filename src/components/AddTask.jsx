function AddTask(onClickSubmitButton){
    return(
        <div className="flex flex-col bg-slate-200 rounded-md shadow space-y-4 p-6">
            <input 
                className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400" 
                type="text" 
                placeholder="Insira o título da tarefa"
            />
            <input 
                className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400" 
                type="text" 
                placeholder="Insira a descrição da tarefa"
            />
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar tarefa</button>
        </div>
    )
}

export default AddTask