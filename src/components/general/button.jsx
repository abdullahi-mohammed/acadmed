import React from 'react'

const Button = (props) => {
    return (
        <button type="submit" className={props.className + "bg-[#AC42C7] text-white rounded-[5px] py-4 px-12"}>
            <p>{props.buttonText}</p>
            {/* props.buttonText + "Image" */}
            <img src={props.imgUrl} alt={""} />
        </button>
    )
}

export default Button
