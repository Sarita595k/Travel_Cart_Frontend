import { Routes, Route } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import Footer from './Components/Footer'
import MovingCar from './Components/MovingCar'
import Register from './Page/Register'
import Login from './Page/Login'
import ProtectedRoute from './Components/ProtectedRoute'
// import Dashboard from './Page/Dashboard'
// import AiForm from './Components/AIForm'
// import Itinerary from './Page/Itinerary'
import DashboardPage from './Page/DashboardPage'
import ItineraryPage from './Page/ItineraryPage'
import AiFormPage from './Page/AiFormPage'

const App = () => {
  return (
    <div className='text-2xl'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/aiPlanner" element={
          <ProtectedRoute>
            <AiFormPage />
          </ProtectedRoute>
        } />
        <Route
          path="/itinerary"
          element={
            <ProtectedRoute>
              <ItineraryPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <MovingCar />
      <Footer />
    </div>
  )
}

export default App