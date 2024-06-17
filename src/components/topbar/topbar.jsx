import { FiHome, FiDatabase, FiList } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

export default function Topbar() {
    const pathname = useLocation().pathname

    return (
        <header className="flex justify-between items-center sticky top-0 shadow-sm bg-white py-2 px-8 md:pr-8 pr-16 z-[3]">
            <Link to={"/"} className="text-[18px] font-medium">Acad<span className="text-purple">Med</span></Link>
            <nav className="sm:block hidden">
                <ul className="flex items-center justify-between gap-4 font-medium">
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname === "/" ? "bg-purple/[0.1] text-purple" : ""}`} href="/"><FiHome /><p>Home</p></a></li>
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname === "/about" ? "bg-purple/[0.1] text-purple" : ""}`} href="/about"><FiList /><p>About</p></a></li>
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname.split("/").indexOf("dashboard") !== -1 ? "bg-purple/[0.1] text-purple" : ""}`} href="/dashboard"><FiDatabase /><p>Platform</p></a></li>
                </ul>
            </nav>
            <img src="/images/profile-pic.png" alt="profile picture" width="42px" height="auto" />
        </header>
    )
} 