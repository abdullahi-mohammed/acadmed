import { Route, Routes } from 'react-router-dom'
import Overview from './overview/overview'
import SideNav from '../../components/sideNav/sideNav'
import SymptomCheck from './symptom-check/symptomCheck'
import Checkup from './checkup/checkup'
import Planner from './planner/planner'

function Dashboard() {

  return (
    <div className='flex'>
      <SideNav />
      <div className="flex-1 p-[3%]">

        <div className="flex flex-wrap justify-between items-start w-full">
          <div className="w-full">
            <Routes>
              <Route path={"/"} exact element={<Overview />} />
              <Route path={"/checkup"} exact element={<Checkup />} />
              <Route path={"/planner"} exact element={<Planner />} />
              <Route path={"/checkup/symptom-check"} exact element={<SymptomCheck />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard