import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Error from '../../Pages/Error'
import Home from '../../Pages/Home';
import CultureArt from '../../Pages/CultureArt';
import ExpArt from '../../Pages/ExpArt';
import TroisArt from '../../Pages/TroisArt';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path='/cultural_art' element={<CultureArt />}></Route>
                <Route path='/experimental_art' element={<ExpArt />}></Route>
                <Route path='/3d_art' element={<TroisArt />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes