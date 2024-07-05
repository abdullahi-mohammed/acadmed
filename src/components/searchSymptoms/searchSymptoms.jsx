import { useEffect, useState } from "react"
import { useLocalStorage } from "../../customHooks/useLocalStorage"
import { infermedicaSymptoms } from "../../utils/infermedica"

export default function SearchSymptoms ({ addSymptom }) {
    const [symptoms, setSymptoms] = useLocalStorage("allSymptoms", [])
    const [searchResult, setSearchResult] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(!localStorage.allSymptoms) {
            infermedicaSymptoms()
            .then(result => {
                setSymptoms(result)
            })
            .catch(error => console.log(error))
        }
    }, [])

    const handleSearch = (query) => {
        setSearchResult(symptoms?.filter(item => item.name.indexOf(query) !== -1).slice(0, 10))
    }

    return (
        <div className="relative w-full">
            <input type="search" placeholder="Search symptoms..." className="p-2 rounded w-full focus:outline focus:outline-purple outline-offset-1 border border-gray-500/[0.2]" onFocus={() => setOpen(true)} onChange={(e) => handleSearch(e.target.value)}/>

            <div className={`absolute top-[100%] left-0 shadow-lg bg-white dark:bg-black rounded ${open ? "block" : "hidden"}`}>
                { 
                    searchResult.map(symptom => (
                        <button key={symptom.id} className="p-2 text-[11px] w-full text-start" onClick={() => {addSymptom({id: symptom.id, description: symptom.name}); setOpen(false)}}>{symptom.name}</button>
                    ))
                }
            </div>
        </div>
    )
}