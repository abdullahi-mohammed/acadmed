import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/home'
import Topbar from './components/topbar/topbar'
import Dashboard from './pages/dashboard'
import Login from './pages/login/login'
import AuthProvider from './customHooks/useAuth'
import SchedulesProvider from './context/scheduleContext'

function App() {

  return (
    <AuthProvider>
      <SchedulesProvider>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path={"/"} exact element={<Home />} />
            <Route path={"/login"} exact element={<Login />} />
            <Route path={"/dashboard/*"} exact element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </SchedulesProvider>
    </AuthProvider>
  )
}

export default App
