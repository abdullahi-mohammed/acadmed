import { useState } from "react";

function InputField({ text, action, value, type, placeholder }) {
    const [focus, setFocus] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <div className="w-full py-4 text-[12px]">
            <div className={`relative border p-[2px] rounded ${focus ? "outline outline-purple/[0.2] outline-offset-1 border-purple" : " border-gray-500/[0.4]"}`}>
                <label 
                    htmlFor={text} 
                    className={`absolute duration-500 min-w-[80px] p-[1px] px-2 rounded capitalize 
                    ${focus || value !== "" ? "bg-gradient-to-b from-white via-white dark:via-black dark:from-black text-purple -top-5 left-0 text-[10px]" : active ? "-top-5 left-0 text-[10px] text-gray-500" : "left-2 top-[10px] bg-white dark:bg-black text-[12px]"}`}
                >
                    {text}
                </label>

                <input 
                    id={text} 
                    type={type} 
                    className="p-2 border-none outline-none bg-transparent w-full" 
                    defaultValue={value} 
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)} 
                    onChange={(e) => { setActive(e.target.value !== ""); action(e.target.value)}} 
                />
            </div>
        </div>
    )
}

export default InputField;