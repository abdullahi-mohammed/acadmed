import { scheduleLayout } from "../../utils/helpers/scheduleLayout";
import ScheduleGrid from "../scheduleGrid/scheduleGrid";

export default function SchedulesLayout({ schedules, value, layout }) {
    return (
        <div>
            {
                layout === "Calendar" ?
                <div className="pb-12 pt-0 w-full max-w-[90vw]">
                        <div className="w-full overflow-x-auto">
                            
                            <table className="table-auto w-full min-w-[700px]">
                                <thead>
                                    <tr className="text-[12px] p-4">
                                        <th className="text-center"></th>
                                        {
                                            [value.getDate() - 1, value.getDate(), value.getDate() + 1, value.getDate() + 2, value.getDate() + 3, value.getDate() + 4].map(date => (
                                            <th key={date} className={`w-[120px] py-2 rounded ${value.getDate() === date ? "bg-purple text-white" : ""}`}>{date}</th> 
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-[10px]">
                                    {
                                        [...Array(24).keys()].map(date => (
                                        <tr key={date} className="h-[65px] border border-transparent border-y-gray-500/[0.2]">
                                            <td className="px-2 flex h-full w-[50px]">{date > 9 ? "" : "0"}{date}:00</td>
                                            
                                            {
                                                [ -1, 0, 1, 2, 3, 4].map(index => (
                                                    <td key={index} className="p-[2px] border border-gray-500/[0.1] relative">
                                                        {
                                                            schedules.filter(item => (item.duration.split(":")[0] === `${date > 9 ? "" : "0"}${date}` && new Date(item.date).getDate() === value.getDate() + index)).map(element => (
                                                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                                                            ))
                                                        }
                                                    </td> 
                                                ))
                                            }
                                        </tr> 
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                :

                layout === "Grid" ?
                    <div className="md:columns-4 columns-2 py-2 pb-16 ">
                        {
                            schedules.map(element => ( 
                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                            ))
                        }
                    </div>
                :
                    <div className="py-2">
                        {
                            schedules.map(element => ( 
                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}