import { scheduleLayout } from "../../utils/helpers/scheduleLayout";

export default function ScheduleGrid({element}) {

    return (
        <div key={element.id} 
            style={{ top: scheduleLayout(element.duration).top, height: scheduleLayout(element.duration).height }} 
            className={`m-[2px] absolute left-0 w-[97%] border rounded pl-2 py-2 
            ${element.status === "Completed" ? "bg-emerald-400/[0.3] border-green-400" 
            : element.status === "Upcoming" ? "bg-yellow-400/[0.3] border-orange-400/[0.4]" 
            : element.status === "On-hold" ? "bg-red-400/[0.3] border-red-400/[0.4]" 
            : "bg-purple/[0.3] border-purple/[0.4]"}`}>          
            
            <h3 className="text-[10px] font-medium mt-1">{element.title}</h3>  
            <p className="text-[8px] mt-1">{element.duration.replace(",", " - ")}</p>  
        </div>
    )
}