import { createContext, useContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { AuthContext } from "../customHooks/useAuth"


export const CheckupContext = createContext()

export default function CheckupProvider({ children }) {
    const [checkups, setCheckups] = useLocalStorage("checkups", [])
    const [popup, setPopup] = useState()
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const addCheckup = async (data) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "checkups"), data);
            getAllCheckups()
            setPopup({ type: "success", msg: "Checkup added successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error adding Checkup" })
            setLoading(false)
        }
    }
    
    const updateCheckup = async (id, data) => {
        setLoading(true)
        try {
            const docRef = await updateDoc(doc(db, "checkups", id), data);
            getAllCheckups()
            setPopup({ type: "success", msg: "Checkup updated successfully" })
            setLoading(false)
        }
        catch(e) {
            setPopup({ type: "error", msg: "Error updating Checkup" })
            setLoading(false)
        }
    }
    
    const getAllCheckups = async () => {
        setLoading(true)
        try {
            let arr = []
            const querySnapshot = await getDocs(query(collection(db, "checkups"), where("user", "==", user?.email)));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            setCheckups(arr)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading Checkup" })
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllCheckups()
    }, [])

    return (
        <CheckupContext.Provider value={{ checkups, popup, setPopup, loading, addCheckup, getAllCheckups, updateCheckup }}>
            { children }
        </CheckupContext.Provider>
    )
}