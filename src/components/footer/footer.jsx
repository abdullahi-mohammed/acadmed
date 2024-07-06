import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-2 text-[12px] gap-[30px] py-[30px] md:px-[5%] px-[3%] border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <ul className="w-full">
                    <h2 className='text-lg flex items-center gap-2'>
                        <img src="/images/logo.svg" width={30} height={30} alt="logo" />
                        Acadmed
                    </h2>
                </ul>
                <ul className="w-full">
                    <li className="flex w-full"><a href="/shop?query=Sweatshirts" className="py-[5px] w-full hover:text-purple">Checkup</a></li>
                    <li className="flex w-full"><a href="/shop?query=academics" className="py-[5px] w-full hover:text-purple">Planner</a></li>
                    <li className="flex w-full"><a href="/shop?query=joggers" className="py-[5px] w-full hover:text-purple">Settings</a></li>
                </ul>
                <ul className="w-full">
                    <div className="flex flex-wrap gap-4 py-4 text-[20px] text-purple">
                        <a href="https://facebook.com/"><FaFacebookSquare /></a>
                        <a href="https://twitter.com/"><FaTwitterSquare /></a>
                        <a href="https://instagram.com/"><FaInstagramSquare /></a>
                    </div>
                    <p className="py-1">Lagos, Nigeria</p>
                    <a href="tel:+2347060989331" className="block py-1">+234811234567</a>
                    <a href="mailto:support@acadmed.com" className="block py-1">Support@acadmed.com</a>
                </ul>
            </div>
        </div>
    )
}

export default Footer
