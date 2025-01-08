import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"

function TaskPage(){

    const [SearchParams] = useSearchParams()
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    )
}

export default TaskPage