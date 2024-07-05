import { Link } from "react-router-dom"

export default function TaskType({ title, icon, schedules }) {
    const amount = schedules?.filter(item => item.type === title).length
    const completed = schedules?.filter(item => (item.type === title && item.status === "Completed")).length

    return (
        <Link to={"/dashboard/planner"} className="flex flex-col gap-8 p-4 rounded-lg border border-gray-500/[0.2]">
            <h2 className="flex items-center gap-2"> 
                <span className="text-xl p-2 rounded-full bg-gray-600/[0.09]">{icon}</span> 
                {title}
            </h2>

            <div className="text-[12px]">
                <p>{amount} {amount === 1 ? "task" : "tasks"}</p> 
                <p className="flex items-center gap-2">
                    <span className="text-green-600">({completed} completed)</span>
                </p>
            </div>

        </Link>
    )
}