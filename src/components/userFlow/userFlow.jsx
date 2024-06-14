import { PiCheckCircle, PiStethoscope, PiUserCheck } from "react-icons/pi"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { FiList, FiUser } from "react-icons/fi"
import InputField from "../inputField/inputField"

export default function UserFlow() {
    const [data, setData] = useState({})

    const gender = [
        { id: 0, img: "/images/man.png", title: "Male" },
        { id: 1, img: "/images/woman.png", title: "Female" },
    ]

    const flow = [
        { id: 0, icon: <FiUser />, title: "Basic Information" },
        { id: 1, icon: <FiList />, title: "Assessments" },
        { id: 2, icon: <PiUserCheck />, title: "Symptoms" },
        { id: 3, icon: <PiStethoscope />, title: "Assessments" },
    ]

    const handleAge = (age) => {
        setData({ ...data, age })
    }

    return (
        <div className="">
            <div className="grid grid-cols-4 text-md text-[12px] leading-[120%] py-10 mb-5 bg-slate-100 rounded-[15px]">
                {
                    flow.map((status) => (
                        <div key={status.id} className={`relative flex flex-col gap-2 items-center ${status.id < 2 ? "text-purple" : "text-gray-500/[0.4]"}`}>
                            <span className={`absolute h-[2px] ${status.id < 2 ? "bg-purple" : "bg-gray-500/[0.2]"} top-[18px] left-[-15%] ${status.id === 0 ? "hidden" : status.id === 3 ? "w-[30%]" : "w-[30%] "}`}></span>
                            <span className={`relative text-[20px] p-2 rounded-full bg-white border-2 border-gray-500/[0.2] dark:bg-black z-[2] ${status.id < 2 ? "bg-purple text-white" : "text-gray-500/[0.4]"}`}>{status.icon}</span>
                            <span>{status.title}</span>
                        </div>
                    ))
                }

            </div>
            
            <h1 className="text-md font-medium py-2 mb-6 border border-transparent border-b-gray-500/[0.2]">Basic Information</h1>

            <div className="flex flex-col gap-4 rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-2">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-white rounded-t-[15px]">Select Gender</p>
                <div className="md:w-[50%] grid grid-cols-3 gap-4 p-4 px-6">
                    {
                        gender.map(item => {
                            return (
                                <div key={item.id} tabIndex="1" className={`relative ${item.title === data.gender ? "text-purple font-medium" : "hover:text-purple"}`} aria-label={"gender setting changed to "+ data.gender} onClick={() => setData({...data, gender: item.title})}>
                                    { data.gender === item.title ? <FaCheckCircle className="absolute -top-1 -right-1 text-lg text-purple" /> : "" }
                                    <div className={`w-full bg-gray-200 dark:bg-slate-200/[0.08] cursor-pointer rounded  ${data.gender === item.title ? "border-2 border-purple/[0.5]" : "hover:border hover:border-purple/[0.5]"}`}>
                                        <img src={item.img} className="w-full rounded" />
                                    </div>
                                    <h2 className="p-2 capitalize">{item.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            
            <div className="flex flex-col gap-4 rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-2">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-white rounded-t-[15px]">Age</p>
                <div className="gap-4 p-4 px-6">
                    <InputField text={"Enter your age"} action={handleAge} value={data.age} type={"number"}/>
                </div>
            </div>

            <div className="grid grid-cols-2 py-6 gap-4">
                <button className="border border-gray-500/[0.3] rounded p-3">Back</button>
                <button className="bg-purple text-white border border-gray-500/[0.3] rounded p-3">Continue</button>
            </div>
            
        </div>
    )
}