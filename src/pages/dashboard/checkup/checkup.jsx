import React, { useContext, useState } from 'react'
import GeneralHeader from '../../../components/general/header'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../customHooks/useAuth'
import { FiEdit } from 'react-icons/fi'
import { PiStethoscope } from 'react-icons/pi'
import { CheckupContext } from '../../../context/checkupContext'

const Checkup = () => {
    const { user } = useContext(AuthContext)
    const { checkups } = useContext(CheckupContext)
    const checkup = checkups.filter(item => item.user === user.email)[0]

    return (
        <div className=''>
            <GeneralHeader h2="Check Ups" p="Health checkups are important to ensure optimal health status." />

            <div className="flex gap-2 flex-wrap py-4">
                <div className='md:w-auto w-full flex flex-col items-center gap-4 bg-[#FFFFFF] dark:bg-black border-gray-500/[0.2] border p-4 py-6 rounded-[10px]'>
                    {
                        user?.photoURL ?
                            <img src={user?.photoURL} alt="profile pic" className="w-[90px] rounded-full" />
                            :
                            <p className="flex justify-center items-center bg-gray-400/[0.2] h-[90px] w-[90px] rounded-full">{user.email.charAt(0)}</p>
                    }
                    <h3>{user?.displayName || <Link to={"/dashboard/settings"} className="hover:text-purple">Add Name</Link>}</h3>
                    <p className="text-[12px]">{user.email}</p>
                    <div className="grid grid-cols-2 text-[12px]">
                        <div className="px-4 text-center border border-transparent border-r-gray-500/[0.2]">
                            <p className="font-medium text-[20px]">{checkup?.age}</p>
                            <p>AGE</p>
                        </div>
                        <div className="px-4 text-center">
                            <p className="font-medium text-[20px]">{checkup?.gender}</p>
                            <p>GENDER</p>
                        </div>
                    </div>
                    <Link to={"/dashboard/settings"} className="flex items-center gap-2 px-6 py-2 bg-purple text-white rounded">Edit Information <FiEdit /></Link>
                </div>

                <div className='md:w-auto w-full flex-1 flex flex-col justify-between items-start bg-[#FFFFFF] dark:bg-black border-gray-500/[0.2] border p-6 rounded-[10px]'>
                    <div className="w-full">
                        <h3 className="font-semibold border border-transparent border-b-gray-500/[0.2] pb-4">Previous Checkup</h3>

                        <div className="grid md:grid-cols-2 gap-2 my-2 p-4 bg-gray-400/[0.09] rounded">

                            <div className="pb-4 border border-transparent border-b-gray-500/[0.2]">
                                <p className="opacity-[0.6] text-[10px] mb-1">weight</p>
                                <p>{checkup?.weight}</p>
                            </div>

                            <div className="pb-4 border border-transparent border-b-gray-500/[0.2]">
                                <p className="opacity-[0.6] text-[10px] mb-1">Fitness Level</p>
                                <p>{checkup?.fitness}</p>
                            </div>

                            <div className="pb-4 border border-transparent border-b-gray-500/[0.2]">
                                <p className="opacity-[0.6] text-[10px] mb-1">Blood</p>
                                <p>{checkup?.blood}</p>
                            </div>

                            <div className="py-4 border border-transparent border-b-gray-500/[0.2]">
                                <p className="opacity-[0.6] text-[10px] mb-1">Symptoms</p>
                                <div className="grid grid-cols-2 gap-1">
                                    {
                                        checkup?.symptoms?.map((symptom) => (
                                            <button
                                                key={symptom.id}
                                                className="flex items-center gap-2 text-start text-[10px] p-2 py-1 rounded border border-gray-500/[0.2]"
                                                title={symptom}
                                            >
                                                {symptom.description}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            
                        </div>

                        
                        <div className="pb-4 border border-transparent border-b-gray-500/[0.2] mb-4">
                                <p className="opacity-[0.6] text-[10px] mb-1">Results</p>
                                { // Show the checkup result conditions

                                    checkup?.conditions?.map(condition => (
                                        <div 
                                            key={condition.id}
                                            className={`flex flex-col bg-slate-100 p-4 gap-2 rounded-[10px] my-2 border
                                            ${condition.probability > 0.5 ? "bg-green-400/[0.09] border-green-400" : 
                                                condition.probability > 0.3 ? "bg-yellow-400/[0.09] border-orange-400/[0.4]" 
                                                : "bg-gray-400/[0.1] border-gray-500/[0.1]"}`} 
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
                    </div>
                    <Link to={"/dashboard/checkup/symptom-check"} className="flex items-center gap-2 px-6 py-2 bg-purple text-white rounded">Quick Assessment  <PiStethoscope /></Link>
                </div>

            </div>
        </div>
    )
}

export default Checkup
