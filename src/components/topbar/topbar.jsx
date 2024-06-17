import { useContext, useEffect } from 'react'
import { FiHome, FiDatabase, FiList } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../customHooks/useAuth'

export default function Topbar() {
    const pathname = useLocation().pathname
    const {user} = useContext(AuthContext)

    useEffect(() =>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })

    return (
        <header className="flex justify-between items-center sticky top-0 shadow-sm bg-white dark:bg-black py-2 md:px-8 px-4 z-[3]">
            <Link to={"/"} className="text-[18px] font-medium">Acad<span className="text-purple">Med</span></Link>
            <nav className="sm:block hidden">
                <ul className="flex items-center justify-between gap-4 font-medium">
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname === "/" ? "bg-purple/[0.1] text-purple" : ""}`} href="/"><FiHome /><p>Home</p></a></li>
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname === "/about" ? "bg-purple/[0.1] text-purple" : ""}`} href="/about"><FiList /><p>About</p></a></li>
                    <li><a className={`flex items-center justify-center px-4 py-2 rounded gap-2 ${pathname.split("/").indexOf("dashboard") !== -1 ? "bg-purple/[0.1] text-purple" : ""}`} href="/dashboard"><FiDatabase /><p>Platform</p></a></li>
                </ul>
            </nav>
            {
                user ? 
                <Link
                    to="/dashboard"
                    className="flex items-center justify-center w-[35px] h-[35px] py-0 rounded-full bg-slate-300/[0.5] hover:outline outline-offset-2 outline-purple/[0.1] hover:text-darkpurple"
                    role="menuitem" 
                >
                    { user?.photoURL ? <img src={user?.photoURL} alt="user" className="rounded-full" width={35} height={35} /> : user?.email.charAt(0)}
                </Link>
                :
                <a href="/login" className="md:block hidden px-6 py-2 bg-black text-white rounded">Login</a>
            }
        </header>
    )
} 