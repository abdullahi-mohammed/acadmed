import { FiHome, FiDatabase } from 'react-icons/fi'

export default function Topbar() {
    return (
        <header className="flex justify-between items-center py-5 max-w-[1200px] mx-auto">
            <h1 className="text-[#807185] text-[18px]">Acad <span className="text-[#AC42C7]">Med</span></h1>
            <nav className="">
                <ul className="flex items-center justify-between gap-[60px]">

                    <li className="flex items-center justify-center gap-2"><a href="/"><FiHome /><p>Home</p></a></li>
                    <li className="flex items-center justify-center gap-2"><a href="/about"><img src="/src/assets/about.png" alt="about image" width="32px" height="32px" /><p>About</p></a></li>
                    <li className="flex items-center justify-center gap-2"><a href="/dashboard"><FiDatabase /><p>Platform</p></a></li>
                </ul>
            </nav>
            <img src="/src/assets/profile-pic.png" alt="profile picture" width="42px" height="auto" />
        </header>
    )
} 