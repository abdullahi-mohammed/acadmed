import React from 'react'

const Card = (props) => {
    return (
        <div className={props.className + ' bg-[#F7F0FB]'}>
            {props.children}
        </div>
    )
}

export default Card
