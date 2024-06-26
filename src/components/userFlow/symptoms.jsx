import { symptoms } from "../../data/symptoms"
import { useState } from "react"
import Model from "../../data/model"
import { FaTimes } from "react-icons/fa"

export default function Symptoms ({ data, setData }) {
    const [active, setActive] = useState("head")
    
    const addSymptom = (symptom) => {
        setData({ ...data, symptoms: data.symptoms?.indexOf(symptom) === -1 ? [...data.symptoms, symptom] : data.symptoms })
    }

    const removeSymptom = (id) => {
        setData({ ...data, symptoms: data.symptoms?.filter(item => item.id !== id) })
    }

    return (
        <div >
            <div className="flex  flex-col rounded-[15px] border border-gray-500/[0.1] my-4">

                <p className="flex flex-col justify-between font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 dark:bg-slate-100/[0.04] rounded-t-[15px]">
                    <span>Select Symptoms</span>
                    <span className="opacity-[0.6] text-[12px] mt-2">Click any part of the model to show symptoms common to the part</span>
                </p>


                <div className="gap-4 px-6 py-6 overflow-x-auto">
                    <div className="flex flex-wrap gap-2">

                        <div className="flex justify-center md:w-[36%] w-full p-4 border border-gray-500/[0.2] fill-white dark:fill-[#111113] stroke-gray-500 rounded-[15px]">
                            <Model active={active} setActive={setActive} />
                        </div>


                        <div className="px-4 md:w-[60%] w-full">
                            <p className="text-center bg-slate-100 dark:bg-black rounded p-2 capitalize">{active.replaceAll("_", " ")}</p>
                            <div className="flex flex-col text-[12px] gap-1 pt-4 pb-4 my-4 max-h-[250px] overflow-y-auto">
                            {
                                symptoms[active]?.map((symptom, i) => (
                                    <button 
                                        key={symptom.id} 
                                        className="text-start p-2 py-1 rounded bg-gray-400/[0.09] hover:bg-gray-500/[0.2]" 
                                        onClick={() => addSymptom(symptom)} 
                                        title={symptom.description}
                                    >
                                    <span>{i + 1}. </span>
                                    <span>{symptom.description}</span>
                                    </button>
                                ))
                            }
                            </div>

                        </div>

                        <p className="text-center bg-slate-100 dark:bg-black rounded p-2 mt-4 w-full">Your Symptoms</p>
                        <div className="flex flex-wrap text-[12px] gap-2 pt-4 pb-4 max-h-[250px] overflow-y-auto">
                        {
                            data?.symptoms.map((symptom) => (
                                <button 
                                    key={symptom.id} 
                                    className="flex items-center gap-2 text-start p-2 py-1 rounded border border-gray-500/[0.2]" 
                                    title={symptom}
                                >
                                {symptom.description}
                                <FaTimes onClick={() => removeSymptom(symptom.id)}/>
                                </button>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}