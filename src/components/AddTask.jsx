import { useState } from "react"

function AddTask({onClickSubmitButton}){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return(
        <div className="flex flex-col bg-slate-200 rounded-md shadow space-y-4 p-6">
            <input 
                className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400" 
                type="text" 
                placeholder="Insira o título da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400" 
                type="text" 
                placeholder="Insira a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button onClick={() => {
                //É preciso verificar se o título e a descrição não estão vazios

                if(!title.trim() || !description.trim()){
                    //Adicionar modal de alerta posteriormente!
                    return alert("Preecha os espaços em branco!")
                }
                onClickSubmitButton(title, description), 
                setDescription(""),
                setTitle("")}} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md">
                Adicionar tarefa
            </button>
        </div>
    )
}

export default AddTask