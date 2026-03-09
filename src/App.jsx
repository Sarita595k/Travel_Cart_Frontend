import { Routes, Route } from 'react-router-dom'
import LandingPage from './Page/LandingPage'

const App = () => {
  return (
    <div className='text-2xl'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path='/register' element={<LandingPage />} />
        <Route path='/login' element={<LandingPage />} /> */}
      </Routes>
      {/* <HeroSection /> */}
    </div>
  )
}

export default App