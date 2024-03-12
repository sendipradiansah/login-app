import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Maxnumber from './pages/Maxnumber';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/maxnumber" element={<Maxnumber />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
