import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMission from './Components/AllMission';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='AllMissions' element={<AllMission/>}/>
        <Route path='' element={<Home/>}/>
      </Routes>
    </Router>
  )
}
