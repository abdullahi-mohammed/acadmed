import { useContext, useEffect } from "react"
import { AuthContext } from "../../../customHooks/useAuth"
import GeneralHeader from "../../../components/general/header"
import { CheckupContext } from "../../../context/checkupContext"
import { PiBackpack, PiCalendar } from "react-icons/pi"
import { Link } from "react-router-dom"
import BotTips from "../../../components/botTips/botTips"
import ScheduleGrid from "../../../components/scheduleGrid/scheduleGrid"
import { SchedulesContext } from "../../../context/scheduleContext"


export default function Overview() {
  const { user } = useContext(AuthContext)
  const { checkups } = useContext(CheckupContext)
  const { schedules } = useContext(SchedulesContext)
  const checkup = checkups.filter(item => item.user === user.email)[0]

  useEffect(() => {
    console.log(checkup)
  }, [])

  return (
    <div>
      <GeneralHeader h2={`Welcome, ${user.displayName || user.email.split("@")[0] }`} p={"Insights to your checkup history and schedules planning"} />

      
      <div className="flex gap-2 flex-wrap items-start justify-between py-4">
        
        <div className='md:w-[70%] w-full flex-1 flex flex-col justify-between items-start bg-[#FFFFFF] dark:bg-black border-gray-500/[0.2] border p-6 rounded-[10px]'>
          <div className="w-full">
              <h3 className="font-semibold border border-transparent border-b-gray-500/[0.2] pb-4">Checkup Results</h3>
          </div>

          <table className="table-auto w-full">
            <thead>
                <tr className="text-[12px] p-4">
                    
                </tr>
            </thead>
            <tbody className="text-[10px]">
                {
                    [...Array(checkup?.conditions?.length).keys()].map(date => (
                    <tr key={date} className="h-[65px] border border-transparent border-y-gray-500/[0.2]">
                        
                        {
                            checkup?.conditions?.map(condition => (
                                    <td 
                                      key={condition.id}
                                      className={`flex flex-col p-4 gap-2 rounded-[10px] my-2 border
                                      ${condition.probability > 0.5 ? "bg-green-400/[0.09] border-green-400" : 
                                          condition.probability > 0.3 ? "bg-yellow-400/[0.09] border-orange-400/[0.4]" 
                                          : "bg-gray-400/[0.1] border-gray-500/[0.1]"}`} 
                                  >
                                      <p className="font-medium">{condition.name}</p>
                                      <div className="flex gap-1 text-[10px] opacity-[0.6]">
                                          <p>Probability: </p>
                                          <p>{condition.probability}</p>
                                      </div>
                                  </td>
                            ))
                        }
                    </tr> 
                    ))
                }
            </tbody>

          </table>
          <Link to={"/dashboard/checkup"} className="flex items-center gap-2 px-6 py-2 mt-4 bg-purple text-white rounded">View Checkup History  <PiBackpack /></Link>

          <div className='my-4 w-full flex-1 flex flex-col justify-between items-start bg-[#FFFFFF] dark:bg-black border-gray-500/[0.2] border p-6 rounded-[10px]'>
            <div className="w-full">
                <h3 className="font-semibold border border-transparent border-b-gray-500/[0.2] pb-4">Your tasks</h3>
                <div className="py-2">
                        {
                            schedules.slice(0, 4).map(element => ( 
                                <ScheduleGrid key={element.id} element={element} layout={"List"} />
                            ))
                        }
                </div>
            </div>
          </div>
          <Link to={"/dashboard/planner"} className="flex items-center gap-2 px-6 py-2 mt-4 bg-purple text-white rounded">View All Tasks  <PiCalendar /></Link>
        </div>

        
        <BotTips prompt={` using information ${JSON.stringify({checkup})}, generate a short tip of at most 200 words on how to improve through scheduling`} />
      </div>
    </div>
  )
}