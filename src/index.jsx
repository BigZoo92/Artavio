import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/style/style.css';
import AnimatedRoutes from './Components/AnimatedRouted';
import Header from './Components/Header'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <AnimatedRoutes />
        </BrowserRouter>
    </React.StrictMode>
)