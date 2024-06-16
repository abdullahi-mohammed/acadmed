import { PiList, PiStethoscope, PiUser, PiUserCheck } from "react-icons/pi"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import InputField from "../inputField/inputField"
import BasicInfo from "./basicInfo"
import Assessments from "./assessments"
import Symptoms from "./symptoms"

export default function UserFlow() {
    const [data, setData] = useState({})
    const [active, setActive] = useState(0)

    const flow = [
        { id: 0, icon: <PiUser />, title: "Basic Information" },
        { id: 1, icon: <PiList />, title: "Assessments" },
        { id: 2, icon: <PiUserCheck />, title: "Symptoms" },
        { id: 3, icon: <PiStethoscope />, title: "Results" },
    ]

    const handleAge = (age) => {
        setData({ ...data, age })
    }

    return (
        <div className="">
            <div className="grid grid-cols-4 bg-black text-slate-300/[0.5] text-md text-[12px] leading-[120%] py-10 mb-5 rounded-[15px]">
                {
                    flow.map((status) => (
                        <div key={status.id} className={`relative flex flex-col gap-2 items-center ${status.id < active+1 ? "text-green-600" : ""}`}>
                            <span className={`absolute h-[2px] ${status.id < active+1 ? "bg-green-600" : "bg-gray-500/[0.2]"} top-[18px] left-[-15%] ${status.id === 0 ? "hidden" : status.id === 3 ? "w-[30%]" : "w-[30%] "}`}></span>
                            <span className={`relative text-[20px] p-2 rounded-full border-2 border-gray-500/[0.2] dark:bg-black z-[2] ${status.id < active+1 ? "bg-green-600 text-white" : "bg-black text-slate-200"}`}>{status.icon}</span>
                            <span>{status.title}</span>
                        </div>
                    ))
                }

            </div>
            
            <h1 className="text-md font-medium py-2 mb-6 border border-transparent border-b-gray-500/[0.2]">
                {flow[active].title}
            </h1>

            
            <div className="relative w-full min-h-[570px] overflow-x-hidden">
                <div className={`absolute top-0 left-0 w-full duration-700 ${active > 0 ? "translate-x-[-150%]" : "translate-x-0"}`}>
                    <BasicInfo handleAge={handleAge} data={data} setData={setData} />
                </div>
                <div className={`absolute top-0 left-0 w-full duration-700 ${active === 1 ? "translate-x-0" : active > 1 ? "translate-x-[-150%]" : "translate-x-[150%]"}`}>
                    <Assessments handleAge={handleAge} data={data} setData={setData} />
                </div>
                <div className={`absolute top-0 left-0 w-full duration-700 ${active === 2 ? "translate-x-0" : active > 1 ? "translate-x-[-150%]" : "translate-x-[150%]"}`}>
                    <Symptoms handleAge={handleAge} data={data} setData={setData} />
                </div>
            
            </div>



            <div className="grid grid-cols-2 py-6 gap-4">
                {
                    active > 0 ?
                    <button className="border border-gray-500/[0.3] rounded-[10px] p-3 " onClick={() => setActive(active-1)}>Back</button>
                    : <span></span>
                }
                <button className="bg-purple text-white border border-gray-500/[0.3] rounded-[10px] p-3" onClick={() => setActive(active+1)}>Continue</button>
            </div>
            
        </div>
    )
}