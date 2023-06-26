import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Signup' element={<Signup />} />
    </Routes>
  );
}

export default App;