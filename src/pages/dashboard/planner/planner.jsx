import { useContext, useEffect, useState } from "react";
import { PiCalendar, PiGridFour, PiList, PiRobot, PiUser } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import GeneralHeader from "../../../components/general/header";
import ScheduleGrid from "../../../components/scheduleGrid/scheduleGrid";
import { askGemini } from "../../../utils/geminiApi";
import { nanoid } from "nanoid";
import Markdown from "markdown-to-jsx";
import NewSchedule from "../../../components/newSchedule/newSchedule";
import { useOutsideClick } from "../../../customHooks/useClickOutside";
import { SchedulesContext } from "../../../context/scheduleContext";
import SchedulesLayout from "../../../components/schedulesLayout/schedulesLayout";
import BotTips from "../../../components/botTips/botTips";

export default function Planner() {
    const [openNewSchedule, setOpenNewSchedule] = useState(false)
    const [layout, setLayout] = useState("Calendar")
    const scheduleRef = useOutsideClick(setOpenNewSchedule)
    const { schedules } = useContext(SchedulesContext);


    const value = new Date()
    const layoutList = [
        { id: 0, icon: <PiCalendar />, title: "Calendar"},
        { id: 1, icon: <PiGridFour />, title: "Grid"},
        { id: 2, icon: <PiList />, title: "List"},
    ]



    return (
        <div className="w-full">
            <GeneralHeader h2={"Schedule Planner"} p={"Good schedule of daily tasks can significantly decrease stress"} />

            <div className="flex justify-between flex-wrap items-start">

                <div className="lg:w-[70%] w-full relative overflow-hidden">
                    <div className="flex flex-wrap gap-4 justify-between py-4 mb-4 rounded border border-transparent border-b-gray-500/[0.1]">

                        {/* Calendar date display */}
                        <button className="flex gap-2 items-center px-4 py-2 rounded shadow-md border border-gray-500/[0.1]">
                            <span className="flex items-center gap-1 uppercase"><PiCalendar className="text-purple"/></span>
                            <span>{`${value.getDate()} | ${value.getMonth()} | ${value.getFullYear()}`}</span>
                        </button>

                        <div className="flex gap-4 justify-between sm:w-fit w-full">

                            {/* layout buttons list */}
                            <div className="flex gap-2 text-lg">
                                {
                                    layoutList.map(item => (
                                        <button 
                                            key={item.id}
                                            label={item.title}
                                            className={`p-1 px-2 rounded ${layout === item.title ? "bg-purple shadow-md text-white" : "bg-gray-500/[0.09]"}`} 
                                            onClick={() => setLayout(item.title)}>
                                            {item.icon}
                                        </button>
                                    ))
                                }
                            </div>

                            {/* add new schedule toggle button */}
                            <button 
                                className="p-2 px-6 ml-4 bg-purple rounded shadow-md text-white" 
                                onClick={() => setOpenNewSchedule(!openNewSchedule)}>
                                {openNewSchedule ? "Close" : "Add new"}
                            </button>
                        </div>
                    </div>

                    {/* open new schedule modal */}
                    <div className={`${openNewSchedule ? "fixed top-0 left-0 w-full h-screen bg-white/[0.8] dark:bg-black/[0.8] flex items-center justify-center z-[2]": ""}`}>
                            <div ref={scheduleRef} className={`h-auto p-8 rounded-[15px] bg-white dark:bg-black w-[350px] border border-gray-500/[0.1] shadow-md z-[12] transition-all duration-700 ${openNewSchedule ? "block" : "hidden"}`}>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold text-[16px]">New task</h2>
                                    <button onClick={() => setOpenNewSchedule(false)}><FaTimes className="p-2 text-[28px] rounded shadow-lg border border-gray-500/[0.3]" /></button>
                                </div>
                                <NewSchedule />
                            </div>
                    </div>

                    <SchedulesLayout schedules={schedules} value={value} layout={layout} />

                </div>

                <BotTips prompt={"I am a student, with aim to balance studies and health. generate tips for success using scheduler for me"} />
            </div>
        </div>
    )
}