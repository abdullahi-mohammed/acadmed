import { useState } from 'react';
import UserFlow from "../../../components/userFlow/userFlow";
import BotTips from '../../../components/botTips/botTips';

export default function SymptomCheck() {
    const [result, setResult] = useState({})
    const [data, setData] = useState({ symptoms: [] })

    return (
        <div className="flex flex-wrap justify-between">
            <div className="lg:w-[70%] w-full md:mt-0 mt-12">
                <UserFlow result={result} setResult={setResult} data={data} setData={setData}/>
            </div>
            
            <BotTips prompt={` using information ${JSON.stringify(data)}, generate tips for me for success as a student, what i need to watch out for concerning my health and how to plan my schedules everyday `} />
        </div>
    )
}