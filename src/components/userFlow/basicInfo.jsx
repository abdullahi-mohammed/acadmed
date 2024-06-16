import { FaCheckCircle } from "react-icons/fa"
import InputField from "../inputField/inputField"

export default function BasicInfo ({ data, setData }) {
    
    const gender = [
        { id: 0, img: "/images/man.png", title: "Male" },
        { id: 1, img: "/images/woman.png", title: "Female" },
    ]

    const handleAge = (age) => {
        setData({ ...data, age })
    }
    const handleFullname = (fullname) => {
        setData({ ...data, fullname })
    }

    return (
        <div>
            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Fullname</p>
                <div className="px-6">
                    <InputField action={handleFullname} value={data.fullname} type={"text"}/>
                </div>
            </div>

            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Select Gender</p>
                <div className="md:w-[50%] grid grid-cols-3 gap-4 p-4 px-6">
                    {
                        gender.map(item => {
                            return (
                                <div key={item.id} tabIndex="1" className={`relative ${item.title === data.gender ? "text-purple font-medium" : "hover:text-purple"}`} aria-label={"gender setting changed to "+ data.gender} onClick={() => setData({...data, gender: item.title})}>
                                    { data.gender === item.title ? <FaCheckCircle className="absolute -top-1 -right-1 text-lg text-purple" /> : "" }
                                    <div className={`w-full bg-gray-100 dark:bg-slate-200/[0.08] cursor-pointer rounded-full ${data.gender === item.title ? "border-2 border-purple/[0.5]" : "hover:border hover:border-purple/[0.5]"}`}>
                                        <img src={item.img} className="w-full rounded-full" />
                                    </div>
                                    <h2 className="text-center p-2 capitalize">{item.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            
            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Age</p>
                <div className="gap-4 px-6">
                    <InputField action={handleAge} value={data.age} type={"number"}/>
                </div>
            </div>
        </div>
    )
}