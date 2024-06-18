import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-[#F7F0FB] dark:bg-gray-400/[0.1] p-4 '>
            {props.children}
        </div>
    )
}

export default Card
