import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserManagement from './Pages/UserManagement'
import UserDetails from './Pages/UserDetails'
import PrivateRoutes from './Routes'

function App () {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<UserManagement />} />
          <Route path='/user' exact element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
