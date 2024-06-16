import { FiHome, FiDatabase, FiList } from 'react-icons/fi'

export default function Topbar() {
    return (
        <header className="flex justify-between items-center py-3 px-8 md:pr-8 pr-16">
            <h1 className="text-[#807185] text-[18px] font-medium">Acad <span className="text-purple">Med</span></h1>
            <nav className="sm:block hidden">
                <ul className="flex items-center justify-between gap-[60px]">
                    <li><a className="flex items-center justify-center gap-2" href="/"><FiHome /><p>Home</p></a></li>
                    <li><a className="flex items-center justify-center gap-2" href="/about"><FiList /><p>About</p></a></li>
                    <li><a className="flex items-center justify-center gap-2" href="/dashboard"><FiDatabase /><p>Platform</p></a></li>
                </ul>
            </nav>
            <img src="/src/assets/profile-pic.png" alt="profile picture" width="42px" height="auto" />
        </header>
    )
} 