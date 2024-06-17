import { useEffect, useState } from 'react'
import SelectField from '../selectField/selectField'
import { infermedica } from '../../utils/infermedica'

export default function AssessmentResult({ result, data }) {
    const [ interview, setInterview ] = useState([])
    const [ answers, setAnswers ] = useState([])
    const [ answer, setAnswer ] = useState([])
    const [ active, setActive ] = useState(0)

    useEffect(() => {
        setInterview([ result ])
        console.log(interview)
    }, [result])
    
    const addUserAnswer = (id, value) => {
        const newAnswer = 
            answer.find(item => item.id === id) ?
                answer.map(item => (
                    item.id === id ?
                    { id, choice_id: value }
                    :
                    item
                ))
            :
        [ ...answer, {id, choice_id: value} ]

        setAnswer(newAnswer)

        setAnswers(
            answers.find(item => item.id === active) ?
                answers.map(item => (
                    item.id === active ?
                    {id: active, answer: newAnswer}
                    :
                    item
                ))
            :
                [ ...answers, {id: active, answer: newAnswer} ]
        )
    }

    const handleNext = () => {
        infermedica(data.gender, data.age, data.interviewId, answers[active].answer)
        .then(result => {
            setInterview([ ...interview, result ])
            setActive(active+1)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="">
            <div>

                { // Show the checkup result conditions

                    interview[active]?.conditions?.map(condition => (
                        <div 
                            key={condition.id}
                            className={`flex flex-col bg-slate-100 p-4 gap-2 rounded-[10px] my-2 border
                            ${condition.probability > 0.5 ? "bg-emerald-400/[0.09] border-green-400" : 
                                condition.probability > 0.3 ? "bg-yellow-400/[0.09] border-orange-400/[0.4]" 
                                : "bg-purple/[0.09] border-purple/[0.4]"}`} 
                        >
                            <p className="font-medium">{condition.name}</p>
                            <div className="flex gap-1 text-[10px] opacity-[0.6]">
                                <p>Probability: </p>
                                <p>{condition.probability}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>
                <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                    <p className="font-medium p-4 px-6 mb-4 border border-transparent border-b-gray-500/[0.1] bg-gray-100 dark:bg-black rounded-t-[15px]">{interview[active]?.question?.text}</p>
                    <div className="px-6">

                        { // Ask user more questions to give better results

                            interview[active]?.question?.items.map(item => (
                                <div key={item.id} className="flex flex-col">
                                    <p className="-mb-2 text-[14px]">{item.name}</p>
                                    <SelectField text={item.id} action={addUserAnswer} options={item.choices.map(option => ({ id: option.id, label: option.label, value: option.id }))}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>

            <div className="grid grid-cols-2 py-6 gap-4">
                {
                    active > 0 ?
                    <button className="border border-gray-500/[0.3] rounded-[10px] p-3 " onClick={() => setActive(active-1)}>Back</button>
                    : <span></span>
                }
                <button className="bg-purple text-white border border-gray-500/[0.3] rounded-[10px] p-3" onClick={() => handleNext()}>Continue</button>
            </div>
        </div>
    )
}