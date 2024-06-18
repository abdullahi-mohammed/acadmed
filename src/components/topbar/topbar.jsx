import { FiHome, FiDatabase, FiList } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function Topbar() {
    return (
        <header className="flex justify-between items-center py-3 px-8 md:pr-8 pr-16">
            <h1 className="text-[#807185] text-[18px] font-medium">Acad <span className="text-purple">Med</span></h1>
            <nav className="sm:block hidden">
                <ul className="flex items-center justify-between gap-[60px]">
                    <li><NavLink to={"/"} className="flex items-center justify-center gap-2"><FiHome /><p>Home</p></NavLink></li>
                    <li><NavLink to={"/about"} className="flex items-center justify-center gap-2"><FiList /><p>About</p></NavLink></li>
                    <li><NavLink to={"/dashboard"} className="flex items-center justify-center gap-2"><FiDatabase /><p>Platform</p></NavLink></li>
                </ul>
            </nav>
            <img src="/src/assets/profile-pic.png" alt="profile picture" width="42px" height="auto" />
        </header>
    )
} 