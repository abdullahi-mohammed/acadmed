import { useState } from "react";

function InputField({ text, action, value, type }) {
    const [focus, setFocus] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <div className="w-full py-4 text-[12px]">
            <div className={`relative border p-[2px] rounded ${focus ? "outline-1 outline-purple/[0.2] outline-offset-1 border-purple" : " border-gray-500/[0.4]"}`}>
                <label 
                    htmlFor={text} 
                    className={`absolute transition-all p-[1px] px-2 bg-gradient-to-b from-white via-white dark:via-black dark:from-black rounded capitalize 
                    ${focus ? "text-purple -top-5 left-0 text-[10px]" : active ? "-top-5 left-0 text-[10px] text-gray-500" : "opacity-[0.6] left-2 top-2 text-[12px]"}`}
                >
                    {text}
                </label>

                <input 
                    id={text} 
                    type={type} 
                    className="p-2 border-none outline-none bg-transparent w-full" 
                    defaultValue={value} 
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)} 
                    onChange={(e) => { setActive(e.target.value !== ""); action(e.target.value)}} 
                />
            </div>
        </div>
    )
}

export default InputField;