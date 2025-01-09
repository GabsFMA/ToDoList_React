import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"

function TaskPage(){

    const [SearchParams] = useSearchParams()
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")

    return (
        <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative m-6">
                    <button className="absolute left-0 top-0 bottom-0">
                        <ChevronLeftIcon/>
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        DETALHES DA TAREFA
                    </h1>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">
                        {title}
                    </h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default TaskPage