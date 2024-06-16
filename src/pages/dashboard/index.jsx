import { Route, Routes } from 'react-router-dom'
import Overview from './overview/overview'
import SideNav from '../../components/sideNav/sideNav'
import SymptomCheck from './symptom-check/symptomCheck'

function Dashboard() {

  return (
    <div className='flex '>
        <SideNav />
        <div className="flex-1 p-[3%]">
          {/* header goes here */}

          <div className="flex flex-wrap justify-between items-start w-full">
            <div className="md:w-[60%] w-full">
              <Routes>
                  <Route path={"/"} exact element={<Overview />} />
                  <Route path={"/checkup/symptom-check"} exact element={<SymptomCheck />} />
              </Routes>
            </div>

            <div className="md:w-[36%] w-full p-4 border border-gray-500/[0.2] fill-white stroke-gray-500 rounded-[15px]">
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard