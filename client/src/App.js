import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMission from './Components/AllMission';
import Error from './pages/Error';
import Home from './pages/Home';
import Room from './pages/Room';
import PrivateArea from './pages/PrivateArea';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='AllMissions' element={<AllMission/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='room' element={<Room/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='privateArea' element={<PrivateArea />}/>
      </Routes>
    </Router>
  )
}
