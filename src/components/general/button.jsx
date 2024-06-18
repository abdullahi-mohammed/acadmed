import React from 'react'

const Button = (props) => {
    return (
        <button type="submit" className={props.className + " p-2 px-6 bg-purple rounded shadow-md text-white"}>
            <p>{props.buttonText}</p>
            {/* props.buttonText + "Image" */}
            <img src={props.imgUrl} alt={""} />
        </button>
    )
}

export default Button
