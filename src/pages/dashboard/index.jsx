import { Route, Routes } from 'react-router-dom'

import Overview from './overview/overview'

function App() {

  return (
      <Routes>
        <Route path={"/"} exact element={<Overview />} />
      </Routes>
  )
}

export default App
