import { useEffect, useState } from "react"
import { askGemini } from "../../utils/geminiApi"
import { nanoid } from "nanoid"
import Markdown from "markdown-to-jsx"
import { PiRobot, PiUser } from "react-icons/pi"

export default function BotTips({ prompt }) {
    const [msg, setMsg] = useState([])

    useEffect(() => {
        askGemini(prompt)
        .then(result => {
            setMsg([ { type: "bot", id: nanoid(5), result } ])
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className="lg:w-[27%] w-full lg:sticky h-screen top-[70px] p-2 border border-gray-500/[0.1] rounded-[15px] overflow-y-auto">
            {
                msg.map((item) => (
                    <div key={item.id} className="p-4">
                        <div className={`markdown flex flex-col gap-2 p-2 mb-[2px] text-[12px] rounded-[8px] w-fit ${item.type === "bot" ? "" : "ml-auto"}`}><Markdown>{item.result}</Markdown></div>
                        <p className={`text-lg rounded-full p-2 border border-gray-500/[0.2] w-fit ${item.type === "bot" ? "" : "ml-auto"}`}>{item.type === "bot" ? <PiRobot /> : <PiUser/>}</p>
                    </div>
                ))
            }
        </div>
    )
}