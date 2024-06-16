import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/home'
import Topbar from './components/topbar/topbar'
import Dashboard from './pages/dashboard'
import Checkup from './pages/checkup/index'

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <hr className='border-b-[#F7F0FB]' />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/dashboard/*"} exact element={<Dashboard />} />
        <Route path={"/dashboard/checkup*"} exact element={<Checkup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
