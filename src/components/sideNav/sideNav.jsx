import { useContext, useState } from "react"
import { FiDatabase, FiUserCheck, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useOutsideClick } from "../../customHooks/useClickOutside"
import { AuthContext } from "../../customHooks/useAuth"

export default function SideNav() {
    const { logOut } = useContext(AuthContext)
    const pathname = useLocation().pathname
    const [open, setOpen] = useState(false)

    const sideNavRef = useOutsideClick(setOpen)

    const generalLinks = [
        { id: 0, text: "dashboard", to: "/dashboard/overview", icon: <FiDatabase /> },
        { id: 1, text: "checkup" , to: "/dashboard/checkup", icon: <FiUserCheck />},
        { id: 2, text: "planner", to: "/dashboard/planner" , icon: <FiCalendar />},
    ]
    
    const otherLinks = [
        { id: 0, text: "settings", to: "/dashboard/settings", icon: <FiSettings /> },
        { id: 1, text: "logout" , to: "#", icon: <FiLogOut />},
    ]

    return (
        <div 
            ref={sideNavRef}
            className={`w-[250px] px-3 md:h-screen h-full md:bg-[#F7F7F9]/[0.7] dark:bg-black bg-white
            md:sticky fixed top-[54px] md:right-auto right-0 border border-gray-500/[0.1] transition-all duration-700 md:z-0 z-[4]
            ${open ? "translate-x-[0px]" : "md:translate-x-0 translate-x-[250px]"}
        `}>

            {/* open and close button  */}
            <button 
                className={`p-4 py-5 ml-auto md:hidden relative
                transition-all duration-700
                ${open ? "translate-x-[-12px]" : "translate-x-[-60px]"}`} 
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>


            <p className="text-[#C1B4C7] p-4">GENERAL</p>
            {
                generalLinks.map(links => ( 
                    <Link key={links.id} to={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 py-2 duration-500 rounded-[8px] ${pathname.indexOf(links.to) !== -1 ? "bg-purple text-white" : "hover:bg-purple/[0.2] "}`}>
                        <span className="text-[17px]">{links.icon}</span>
                        {links.text}
                    </Link>
                ))
            }

            <p className="text-[#C1B4C7] p-4">OTHERS</p>
            {
                otherLinks.map(links => ( 
                    <Link key={links.id} to={links.to} onClick={() => links.text === "logout" ? logOut() : ""} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 py-2 duration-500 rounded-[8px] ${pathname === links.to ? "bg-purple text-white" : "hover:bg-purple/[0.2] "}`}>
                        <span className="text-[17px]">{links.icon}</span>
                        {links.text}
                    </Link>
                ))
            }
        </div>
    )
} 