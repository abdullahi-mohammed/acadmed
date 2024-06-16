import { PiList, PiStethoscope, PiUser, PiUserCheck } from "react-icons/pi"
import { useState } from "react"
import BasicInfo from "./basicInfo"
import Assessments from "./assessments"
import Symptoms from "./symptoms"
import { infermedica } from "../../utils/infermedica"
import { nanoid } from "nanoid"
import AssessmentResult from "./result"

export default function UserFlow({ result, setResult, data, setData }) {
    const [active, setActive] = useState(0)

    const flow = [
        { id: 0, icon: <PiUser />, title: "Basic Information" },
        { id: 1, icon: <PiList />, title: "Assessments" },
        { id: 2, icon: <PiUserCheck />, title: "Symptoms" },
        { id: 3, icon: <PiStethoscope />, title: "Results" },
    ]

    const handleNext = () => {
        if(active === 0) {
            setData({ ...data, interviewId: nanoid() })
            data.fullname && data.age && data.gender ? setActive(1) : ""
        }
        else if(active === 1) {
            console.log(data)
            data.weight && data.fitness && data.blood ? setActive(2) : ""
        }
        else if(active === 2) {
            const evidence = data.symptoms?.map((item, i) => (
                i === 0 ? 
                { id: item.id, choice_id: "present", source: "initial" }
                : 
                { id: item.id, choice_id: "present" }
            ))
            infermedica(data.gender, data.age, data.interviewId, evidence)
            .then(result => setResult(result))
            .catch(error => console.log(error))
            setActive(3)
        }
    }

    return (
        <div className="">
            <div className="grid grid-cols-4 text-md text-[12px] leading-[120%] py-10 mb-5 rounded-[15px]">
                {
                    flow.map((status) => (
                        <div key={status.id} className={`relative flex flex-col gap-2 items-center ${status.id < active+1 ? "text-green-600" : ""}`}>
                            <span className={`absolute h-[2px] ${status.id < active+1 ? "bg-green-600" : "bg-gray-500/[0.2]"} top-[18px] left-[-15%] ${status.id === 0 ? "hidden" : status.id === 3 ? "w-[30%]" : "w-[30%] "}`}></span>
                            <span className={`relative text-[20px] p-2 rounded-full border-2 border-gray-500/[0.2] dark:bg-black z-[2] ${status.id < active+1 ? "bg-green-600 text-white" : ""}`}>{status.icon}</span>
                            <span>{status.title}</span>
                        </div>
                    ))
                }

            </div>
            
            <h1 className="text-md font-medium py-2 mb-6 border border-transparent border-b-gray-500/[0.2]">
                {flow[active].title}
            </h1>

            
            <div className="relative w-full min-h-[570px] overflow-x-hidden">
                <div className={`top-0 left-0 w-full duration-700 ${active > 0 ? "translate-x-[-150%]" : "translate-x-0"}`}>
                    <BasicInfo data={data} setData={setData} />
                </div>
                <div className={`absolute top-0 left-0 w-full duration-700 ${active === 1 ? "translate-x-0" : active > 1 ? "translate-x-[-150%]" : "translate-x-[150%]"}`}>
                    <Assessments data={data} setData={setData} />
                </div>
                <div className={`absolute top-0 left-0 w-full duration-700 ${active === 2 ? "translate-x-0" : active > 1 ? "translate-x-[-150%]" : "translate-x-[150%]"}`}>
                    <Symptoms data={data} setData={setData} />
                </div>
                <div className={`absolute top-0 left-0 w-full duration-700 ${active === 3 ? "translate-x-0" : active > 1 ? "translate-x-[-150%]" : "translate-x-[150%]"}`}>
                    <AssessmentResult result={result} data={data} />
                </div>
            
            </div>



            <div className="grid grid-cols-2 py-6 gap-4">
                {
                    active > 0 && active < 3 ?
                    <button className="border border-gray-500/[0.3] rounded-[10px] p-3 " onClick={() => setActive(active-1)}>Back</button>
                    : <span></span>
                }
                {
                    active < 3 ?
                    <button className="bg-purple text-white border border-gray-500/[0.3] rounded-[10px] p-3" onClick={() => handleNext()}>Continue</button>
                    : ""
                }
            </div>
            
        </div>
    )
}