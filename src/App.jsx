import { Routes, Route } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import Footer from './Components/Footer'
import MovingCar from './Components/MovingCar'
import Register from './Page/Register'
import Login from './Page/Login'
import ProtectedRoute from './Components/ProtectedRoute'
import DashboardPage from './Page/DashboardPage'
import ItineraryPage from './Page/ItineraryPage'
import AiFormPage from './Page/AiFormPage'
import ForgotPage from './Page/ForgotPage'
import ResetPage from './Page/ResetPage'
import ScrollToTop from './Components/ScrollToTop'
// import NotFound from './Components/NotFound.jsx'

const App = () => {
  return (
    <div className='text-2xl'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPage />} />
        <Route path="/reset-password/:token" element={<ResetPage />} />
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
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <MovingCar />
      <Footer />
    </div>
  )
}

export default App