import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import Overview from './overview/overview'
import SideNav from '../../components/sideNav/sideNav'
import SymptomCheck from './symptom-check/symptomCheck'
import Checkup from './checkup'
import Planner from './planner/planner'
import Login from '../login/login'
import { AuthContext } from '../../customHooks/useAuth'
import Settings from './settings/settings'

function Dashboard() {
  const {user} = useContext(AuthContext)

  if(!user) {
    return (
      <Routes>
        <Route path={"/*"} exact element={<Navigate to={"/login"} />} />
        <Route path={"/login"} exact element={<Login />} />
      </Routes>
    )
  }
  else {
    return (
      <div className='flex '>
          <SideNav />
          <div className="flex-1 p-[3%]">

            <div className="flex flex-wrap justify-between items-start w-full">
              <div className="w-full">
                <Routes>
                    <Route path={"/"} exact element={ <Navigate to="/dashboard/overview" />} />
                    <Route path={"/overview"} exact element={<Overview />} />
                    <Route path={"/checkup"} exact element={<Checkup />} />
                    <Route path={"/planner"} exact element={<Planner />} />
                    <Route path={"/settings"} exact element={<Settings />} />
                    <Route path={"/checkup/symptom-check"} exact element={<SymptomCheck />} />
                </Routes>
              </div>

            </div>
          </div>
      </div>
    )
  }
}

export default Dashboard