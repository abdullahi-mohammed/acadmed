import { symptoms } from "../../data/symptoms"
import { useEffect, useState } from "react"
import Model from "../../data/model"

export default function Symptoms ({ data, setData }) {
    const [search, setSearch] = useState("")
    const [symptomsList, setSymptomsList] = useState([...symptoms.head, ...symptoms.chest, ...symptoms.abdomen, ...symptoms.chest, ...symptoms.nose])
    
    const addSymptom = (weight) => {
        setData({ ...data, weight })
    }

    const symptomsArray = [...symptoms.head, ...symptoms.chest, ...symptoms.abdomen, ...symptoms.chest, ...symptoms.nose]

    useEffect(() => {
        setSymptomsList(symptomsArray.filter(item => item.description.indexOf(search) !== -1))
    }, [search])

    return (
        <div >
            <div className="flex flex-col rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-4">
                <p className="flex justify-between font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">
                    <span>Search Symptoms</span>
                </p>
                <div className="gap-4 px-6 py-6 overflow-x-auto">
                    <div className="flex gap-2">
                        <div className="md:w-[36%] w-full p-4 border border-gray-500/[0.2] fill-white stroke-gray-500 rounded-[15px]">
                        <Model />
                        </div>
                        <div>
                            <div className="flex flex-wrap text-[12px] gap-2 pt-4 pb-4 my-4 max-h-[250px] overflow-y-auto">
                            {
                                symptomsList.map((symptom, i) => (
                                    <button key={i} className="p-2 py-1 rounded border border-gray-500/[0.2]" onClick={() => addSymptom(symptom.description)} title={symptom.description}>{symptom.description}</button>
                                ))
                            }
                            </div>
                            <button className="w-full mb-4 bg-purple text-white border border-gray-500/[0.3] rounded-[10px] p-3" onClick={() => setData({})}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}