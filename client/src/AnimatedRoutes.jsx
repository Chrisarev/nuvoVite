import React from 'react';
import './App.css';
import Home from './Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
