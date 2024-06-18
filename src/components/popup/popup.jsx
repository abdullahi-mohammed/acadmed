import { useEffect, useState } from "react"
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

export default function Popup({ type, msg, setError, redirectUrl }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
            navigate(redirectUrl)
            setError({ type: "", msg: "", redirectUrl: "" })
        }, 4000)
    }, [msg])

    return (
        <div className={`fixed w-[300px] animate-slide-in top-[70px] right-[0] flex gap-4 rounded-l-lg shadow-lg bg-white dark:bg-black dark:text-white p-4 px-6 border border-gray-500/[0.2] ${show ? "block" : "hidden" } ${type === "success" ? "border-l-green-600 text-green-600" : "border-b-red-600 text-red-600"}`}>
            {
                type === "success" ?
                <FaCheckCircle className="text-[24px] text-green-500" />
                :
                <FaInfoCircle className="text-[24px] text-red-500" />
            }
            <p>{msg}</p>
        </div>
    )
}