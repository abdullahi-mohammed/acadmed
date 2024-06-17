import { useState } from "react";
import { PiCalendar } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import GeneralHeader from "../../../components/general/header";
import ScheduleGrid from "../../../components/scheduleGrid/scheduleGrid";

export default function Planner() {
    const [openNewSchedule, setOpenNewSchedule] = useState(false)
    const [schedules, setSchedules] = useState([{ id: 0, title: "Design, Eat, Code", duration: "02:00,03:00", date: new Date(), description: "welcome", status: "pending" }])

    const value = new Date()

    return (
        <div className="w-full">
            <GeneralHeader h2={"Schedule Planner"} p={"Good schedule of daily tasks can significantly decrease stress"} />

            <div className="flex justify-between py-4 mb-4 rounded border border-transparent border-b-gray-500/[0.1]">
                <div className="flex gap-2 items-center px-4 rounded shadow-md border border-gray-500/[0.1]">
                    <p className="flex items-center gap-1 uppercase"><PiCalendar className="text-purple"/></p>
                    <p>{`${value.getDate()} | ${value.getMonth()} | ${value.getFullYear()}`}</p>
                </div>
                <button className="p-2 px-6 ml-4 bg-purple rounded shadow-md text-white" onClick={() => setOpenNewSchedule(!openNewSchedule)}>{openNewSchedule ? "Close" : "Add new"}</button>
            </div>

            <div className="">
                    <div className={`fixed top-[0] md:right-[9%] right-0 h-full p-8 rounded bg-white dark:bg-black w-[350px] border border-gray-500/[0.1] shadow-md z-[12] transition-all duration-700 ${openNewSchedule ? "translate-x-0" : "translate-x-[200%]"}`}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-[16px]">Schedule task</h2>
                            <button onClick={() => setOpenNewSchedule(false)}><FaTimes className="p-2 text-[28px] rounded shadow-lg border border-gray-500/[0.3]" /></button>
                        </div>
                    </div>
            </div>

            <div className="pb-12 pt-0 w-full max-w-[90vw]">
                <div className="w-full overflow-x-auto">
                    
                    <table className="table-auto w-full min-w-[700px]">
                        <thead>
                            <tr className="text-[12px] p-4">
                                <th className="text-center"></th>
                                {
                                    [value.getDate() - 2, value.getDate() - 1, value.getDate(), value.getDate() + 1, value.getDate() + 2, value.getDate() + 3, value.getDate() + 4].map(date => (
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
                                        [-2, -1, 0, 1, 2, 3, 4].map(index => (
                                            <td key={index} className="p-[2px] border border-gray-500/[0.1] relative">
                                                {
                                                    schedules.filter(item => (item.duration.split(":")[0] === `${date > 9 ? "" : "0"}${date}` && item.date.getDate() === value.getDate() + index)).map(element => (
                                                        <ScheduleGrid key={element.id} element={element} />
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
        </div>
    )
}