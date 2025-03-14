import React from 'react'
import ProfileCard from './components/ProfileCard'
import BetterProfileCard from './components/BetterProfileCard'
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import ChallengeThree from './pages/ChallengeThree'
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        {/* <ProfileCard /> */}
        {/* <BetterProfileCard /> */}
      <Routes>
        <Route path='/three' element={<ChallengeThree />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App