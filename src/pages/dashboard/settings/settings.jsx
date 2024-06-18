import { useContext, useEffect, useState } from "react";
import { PiDesktop, PiInfo, PiMoon, PiSun, PiThumbsUp, PiUser } from "react-icons/pi";
import InputField from "../../../components/inputField/inputField";
import { AuthContext } from "../../../customHooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import Popup from "../../../components/popup/popup";

export default function Settings() {
    const [theme, setTheme] = useState(localStorage.theme)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const {user, updateUserData, loading, popup, setPopup} = useContext(AuthContext)
    
    useEffect(() => {
        if(theme === 'light') {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
        }
        else if(theme === 'dark') {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
        }  
        else {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        }  
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if(!localStorage.theme) {
            setTheme("desktop")
        }
    }, [theme])

    const submitUserUpdate = () => {
        updateUserData({ displayName: fullname, email })
    }
    
    return (
        <div className="">

                {
                    popup?.msg ?
                    <Popup type={popup?.type} msg={popup?.msg} setError={setPopup} redirectUrl={""} />
                    :
                    ""
                }

            <h2 className="text-[16px] font-bold py-4">Settings</h2>
            <div className="py-4">
                <p>General</p>
                <div className="p-4 mt-2 flex gap-4 bg-gray-300/[0.3] dark:bg-gray-500/[0.09] border border-gray-500/[0.3] rounded-[10px]">
                    <PiThumbsUp  className="text-[18px]"/>
                    <div>
                        <h3 className="font-semibold mb-2">Leave a feedback</h3>
                        <p className="text-[12px]">Think we should improve something? Kindly drop a feedback here</p>
                    </div>
                </div>
                <div className="p-4 mt-2 bg-gray-300/[0.3] dark:bg-gray-500/[0.09] border border-gray-500/[0.3] rounded-[10px]">
                    <div className="flex gap-4 pb-4 border border-transparent border-b-gray-500/[0.2]">
                        <PiSun  className="text-[18px]"/>
                        <div>
                            <h3 className="font-semibold mb-2">Switch themes</h3>
                            <p className="text-[12px]">Choose between system, dark or light theme</p>
                            <div className="flex flex-1 mt-2 items-center">
                                <button className={`p-2 px-4 rounded-l-lg border border-gray-500/[0.3] ${theme === "desktop" ? "bg-purple text-white": ""}`} onClick={() => setTheme("desktop")}><PiDesktop /></button>
                                <button className={`p-2 px-4 border border-gray-500/[0.3] ${theme === "dark" ? "bg-purple text-white": ""}`} onClick={() => setTheme("dark")}><PiMoon /></button>
                                <button className={`p-2 px-4 rounded-r-lg border border-gray-500/[0.3] ${theme === "light" ? "bg-purple text-white": ""}`} onClick={() => setTheme("light")}><PiSun /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 border border-transparent border-b-gray-500/[0.2]">
                        <PiInfo  className="text-[18px]"/>
                        <div>
                            <h3 className="font-semibold mb-2">FAQs</h3>
                            <p className="text-[12px]">Check frequently asked questions</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <p>Personal Information</p>
                
                <div className="flex gap-4 p-4 mt-2 bg-gray-300/[0.3] dark:bg-gray-500/[0.09] border border-gray-500/[0.3] rounded-[10px]">
                    <PiUser className="text-[18px]"/>
                    <div className="md:w-[50%] w-full">
                        <InputField text={"Fullname"} value={user?.displayName || ""} type={"text"} action={setFullname} />
                        <InputField text={"Email"} value={user?.email || ""} type={"text"} action={setEmail} />
                    </div>
                </div>

                <button className="px-6 py-2 rounded bg-green-500 text-white mt-4" onClick={() => submitUserUpdate()}>{loading ? <FaSpinner className="animate-spin" /> : "Save changes"}</button>
            </div>
        </div>
    )
}