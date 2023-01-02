import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PrivateArea from './pages/PrivateArea';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='privateArea' element={<PrivateArea />}/>
      </Routes>
    </Router>
  )
}
