import { useState } from "react";

function SelectField({ text, action, value, options }) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="w-full py-4 text-[12px]">
            <div className={`relative border p-[2px] rounded ${focus ? "outline-1 outline-purple/[0.2] outline-offset-1 border-purple" : " border-gray-500/[0.2]"}`}>
                <select 
                    id={text} 
                    className="p-2 border-none outline-none bg-transparent w-full" 
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)} 
                    value={value}
                    onChange={(e) => {action(text, e.target.value)}}
                >
                    <option className="opacity-[0.5]">Select one</option>
                    {
                        options.map(option => (
                            <option className="dark:bg-black" value={option.value} key={option.id}>{option.label || option.value}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default SelectField;