import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex justify-between items-center max-w-[90%] mx-auto h-[100px]'>
                <p>All rights reserve 2024</p>
                <ul className='flex justify-center gap-5 items-center'>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>linkedIn</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
