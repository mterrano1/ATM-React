import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
      <UserProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
    </UserProvider>
  );
}

export default App;