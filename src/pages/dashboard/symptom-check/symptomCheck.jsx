import { useState } from 'react';
import UserFlow from "../../../components/userFlow/userFlow";

export default function SymptomCheck() {
    const [result, setResult] = useState({})
    const [data, setData] = useState({ symptoms: [] })

    return (
        <div className="flex flex-wrap justify-between">
            <div className="lg:w-[60%] w-full">
                <UserFlow result={result} setResult={setResult} data={data} setData={setData}/>
            </div>
            
            <div className="lg:w-[36%] w-full p-4 border border-gray-500/[0.1] fill-white stroke-gray-500 rounded-[15px]">
                
            </div>
        </div>
    )
}