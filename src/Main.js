import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Home';
import About from './Pages/About';

const Main = () => {
  return (

    <Routes>
      <Route path='/' element={Login}></Route>
      <Route path='/signup' element={About}></Route>
    </Routes>
  );
}

export default Main;