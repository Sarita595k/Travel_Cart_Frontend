import { Routes, Route } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import Footer from './Components/Footer'
import MovingCar from './Components/MovingCar'
import Register from './Page/Register'
import Login from './Page/Login'

const App = () => {
  return (
    <div className='text-2xl'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <HeroSection /> */}
      <MovingCar />
      <Footer />
    </div>
  )
}

export default App