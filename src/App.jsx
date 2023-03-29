import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Orders from '../src/pages/Orders';
import ReadyToDeliver from '../src/pages/ReadyToDeliver';
import Workers from '../src/pages/Workers';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import '../src/styles/global.css';
import Menu from '../src/pages/Menu';

const App = () => {
    return (
            <Routes>
                  <Route path="/" element={<Home />} />
          		  <Route path="/login" element={<Login />} />
                  <Route path='/menu' element={<Menu />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/ready-to-deliver' element={<ReadyToDeliver />} />
                  <Route path='/workers' element={<Workers />} />
                  <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default App;