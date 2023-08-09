import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Game from './pages/Game'
import End from './pages/End'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/End" element={<End />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
