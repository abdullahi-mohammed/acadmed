import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"


export const SchedulesContext = createContext()

export default function SchedulesProvider({ children }) {
    const [schedules, setSchedules] = useLocalStorage("schedules", [])
    const [popup, setPopup] = useState("schedules")
    const [loading, setLoading] = useState(false)

    const addSchedule = async (data) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "schedules"), data);
            getAllSchedules()
            setPopup({ type: "success", msg: "Schedule added successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error adding schedules" })
            setLoading(false)
        }
    }
    
    const updateSchedule = async (id, data) => {
        setLoading(true)
        try {
            const docRef = await updateDoc(doc(db, "schedules", id), data);
            getAllSchedules()
            setPopup({ type: "success", msg: "Schedule updated successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error updating schedules" })
            setLoading(false)
        }
    }

    

    
    const getAllSchedules = async () => {
        setLoading(true)
        try {
            let arr = []
            const querySnapshot = await getDocs(collection(db, "schedules"));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            setSchedules(arr)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading schedules" })
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllSchedules()
    }, [])

    return (
        <SchedulesContext.Provider value={{ schedules, popup, setPopup, loading, addSchedule, getAllSchedules, updateSchedule }}>
            { children }
        </SchedulesContext.Provider>
    )
}