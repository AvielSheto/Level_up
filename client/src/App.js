import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './pages/Error';
import Home from './pages/Home';
import Room from './pages/Room';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='room' element={<Room/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}
