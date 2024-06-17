import { useState } from "react"
import { FiDatabase, FiUserCheck, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useOutsideClick } from "../../customHooks/useClickOutside"

export default function SideNav() {
    const pathname = useLocation().pathname
    const [open, setOpen] = useState(false)

    const sideNavRef = useOutsideClick(setOpen)

    const generalLinks = [
        { id: 0, text: "dashboard", to: "/dashboard", icon: <FiDatabase /> },
        { id: 1, text: "checkup" , to: "/dashboard/checkup", icon: <FiUserCheck />},
        { id: 2, text: "planner", to: "/dashboard/planner" , icon: <FiCalendar />},
    ]
    
    const otherLinks = [
        { id: 0, text: "settings", to: "/dashboard/settings", icon: <FiSettings /> },
        { id: 1, text: "logout" , to: "", icon: <FiLogOut />},
    ]

    return (
        <div 
            ref={sideNavRef}
            className={`w-[250px] px-3 md:h-screen h-full md:bg-[#F7F7F9]/[0.7] dark:bg-black bg-white
            md:sticky fixed top-0 md:right-auto right-0 border border-[#F7F0FB] transition-all duration-700 z-[4]
            ${open ? "translate-x-[0px]" : "md:translate-x-0 translate-x-[250px]"}
        `}>

            {/* open and close button  */}
            <button 
                className={`p-4 py-6 ml-auto md:hidden relative bg-white
                transition-all duration-700
                ${open ? "translate-x-[-12px]" : "translate-x-[-60px]"}`} 
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>


            <p className="text-[#C1B4C7] p-4">GENERAL</p>
            {
                generalLinks.map(links => ( 
                    <Link key={links.id} to={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 py-2 hover:bg-purple/[0.2] duration-500 rounded-[8px] ${pathname === links.to ? "bg-purple text-white border border-[#F7F0FB]" : ""}`}>
                        <span className="text-[17px]">{links.icon}</span>
                        {links.text}
                    </Link>
                ))
            }

            <p className="text-[#C1B4C7] p-4">OTHERS</p>
            {
                otherLinks.map(links => ( 
                    <Link key={links.id} to={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 py-2 hover:bg-purple/[0.2] duration-500 rounded-[8px] ${pathname === links.to ? "bg-purple text-white border border-[#F7F0FB]" : ""}`}>
                        <span className="text-[17px]">{links.icon}</span>
                        {links.text}
                    </Link>
                ))
            }
        </div>
    )
} 